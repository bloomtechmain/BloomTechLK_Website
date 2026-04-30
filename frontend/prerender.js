import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All routes to pre-render
const routes = [
  '/',
  '/company',
  '/contact',
  '/login',
  '/register',
  '/dashboard',
  '/services/ai-machine-learning',
  '/services/ai-custom-development-automation',
  '/services/custom-ai-hardware',
  '/services/it-network-infrastructure',
  '/services/custom-server-design-deployment',
  '/services/custom-nas-storage',
  '/services/rack-and-roll-services',
  '/services/cloud-hosting-deployment',
  '/services/custom-crm-erp-solutions',
  '/services/asset-lifecycle-management',
  '/services/professional-it-consulting',
  '/services/security-data-protection',
  '/services/av-smart-workspaces',
  '/services/custom-websites-design',
  '/services/online-marketing-services',
];

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
  const { render } = await import('./dist/server/entry-server.js');
  
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
      const { html: appHtml, helmetContext } = render(route);
      const { helmet } = helmetContext;
      
      // Inject the app HTML into template
      let html = template.replace('<!--app-html-->', appHtml);
      
      // Inject helmet meta tags if available
      if (helmet) {
        html = html.replace(
          '</head>',
          `${helmet.title?.toString() || ''}${helmet.meta?.toString() || ''}${helmet.link?.toString() || ''}${helmet.script?.toString() || ''}</head>`
        );
      }

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
