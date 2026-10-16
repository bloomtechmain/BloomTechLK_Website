import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './AppRoutes';
import { getAllServices } from './data/servicesData';
import { siteUrl } from './utils/seoConfig';

// Lets prerender.js build every service page and the sitemap from the same data the site uses
export const serviceSlugs = getAllServices().map(service => service.slug);
export { siteUrl };

export function render(url: string, context?: any) {
  const helmetContext = {};
  
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <MemoryRouter initialEntries={[url]} initialIndex={0}>
          <AppRoutes />
        </MemoryRouter>
      </HelmetProvider>
    </StrictMode>
  );
  
  return { html, helmetContext };
}
