import fs from 'node:fs/promises';
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile(resolve(__dirname, './dist/client/index.html'), 'utf-8')
  : '';

const ssrManifest = isProduction
  ? await fs.readFile(resolve(__dirname, './dist/client/.vite/ssr-manifest.json'), 'utf-8')
  : undefined;

// Create http server
const app = express();

// Add compression middleware
app.use(compression());

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  });
  app.use(vite.middlewares);
} else {
  const sirv = (await import('sirv')).default;
  app.use(base, sirv(resolve(__dirname, './dist/client'), { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile(resolve(__dirname, './index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    // Render the app HTML
    const rendered = render(url, {});
    const { html: appHtml, helmetContext } = rendered;
    
    // Get helmet data
    const { helmet } = helmetContext;
    
    // Inject the app-rendered HTML and helmet data into the template
    let html = template
      .replace('<!--app-html-->', appHtml);
    
    // If helmet exists, inject meta tags
    if (helmet) {
      html = html
        .replace('</head>', `${helmet.title?.toString() || ''}${helmet.meta?.toString() || ''}${helmet.link?.toString() || ''}${helmet.script?.toString() || ''}</head>`);
    }

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
