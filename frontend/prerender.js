import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeAppHtml } from './ssr-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Static pages; service routes are added from servicesData at build time
const staticRoutes = ['/', '/company', '/contact', '/portfolio', '/refund-policy', '/privacy-policy', '/terms-and-conditions'];

async function prerender() {
  console.log('🚀 Starting pre-rendering process...\n');
  
  // Verify build artifacts exist
  const serverEntryPath = path.resolve(__dirname, './dist/server/entry-server.js');
  const clientTemplatePath = path.resolve(__dirname, './dist/client/index.html');
  
  if (!fs.existsSync(serverEntryPath)) {
    console.error('❌ Error: Server build not found at:', serverEntryPath);
    console.error('   Run "npm run build:server" first');
    process.exit(1);
  }
  
  if (!fs.existsSync(clientTemplatePath)) {
    console.error('❌ Error: Client build not found at:', clientTemplatePath);
    console.error('   Run "npm run build:client" first');
    process.exit(1);
  }
  
  // Import the server entry
  const { render, serviceSlugs, siteUrl } = await import('./dist/server/entry-server.js');
  const routes = [...staticRoutes, ...serviceSlugs.map(slug => `/services/${slug}`)];
  
  // Read the client build HTML template
  const template = fs.readFileSync(clientTemplatePath, 'utf-8');

  // Create a directory for prerendered pages if needed
  const prerenderDir = path.resolve(__dirname, './dist/client');
  
  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      console.log(`📄 Pre-rendering: ${route}`);
      
      // Render the route
      const { html: appHtml } = render(route);
      const html = mergeAppHtml(template, appHtml);

      // Determine output path
      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const filePath = path.resolve(prerenderDir, `.${routePath}`);
      
      // Create directory if it doesn't exist
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write the pre-rendered HTML
      fs.writeFileSync(filePath, html);
      console.log(`   ✓ Saved to: ${routePath}`);
      successCount++;
    } catch (error) {
      console.error(`   ❌ Error pre-rendering ${route}:`, error.message);
      errorCount++;
    }
  }

  // 404 page: Cloudflare Pages serves 404.html with a real 404 status for unknown URLs
  fs.writeFileSync(path.resolve(prerenderDir, '404.html'), mergeAppHtml(template, render('/404').html));
  console.log('📄 Saved 404.html');

  // Sitemap built from the same route list, using the trailing-slash URLs Cloudflare serves
  const today = new Date().toISOString().slice(0, 10);
  const sitemapUrls = routes.map(route => `  <url>
    <loc>${siteUrl}${route === '/' ? '/' : `${route}/`}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route === '/' ? '1.0' : route.startsWith('/services/') ? '0.8' : '0.9'}</priority>
  </url>`);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</urlset>
`;
  fs.writeFileSync(path.resolve(prerenderDir, 'sitemap.xml'), sitemap);
  console.log(`🗺️  Saved sitemap.xml (${routes.length} URLs)`);

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Pre-rendering complete!`);
  console.log(`   Success: ${successCount}/${routes.length} routes`);
  if (errorCount > 0) {
    console.log(`   Errors: ${errorCount} routes failed`);
  }
  console.log('='.repeat(60) + '\n');
  
  // Verify critical pages exist
  const criticalPages = ['/', '/company', '/contact'];
  const missingPages = [];
  
  for (const page of criticalPages) {
    const pagePath = page === '/' ? '/index.html' : `${page}/index.html`;
    const fullPath = path.resolve(prerenderDir, `.${pagePath}`);
    if (!fs.existsSync(fullPath)) {
      missingPages.push(page);
    }
  }
  
  if (missingPages.length > 0) {
    console.error('❌ Critical pages missing:', missingPages.join(', '));
    process.exit(1);
  }
  
  console.log('✓ All critical pages verified\n');
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
