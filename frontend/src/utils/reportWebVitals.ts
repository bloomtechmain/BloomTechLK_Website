import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Report performance metrics to console (can be extended to send to analytics)
function sendToAnalytics(metric: Metric) {
  const { name, value, rating } = metric;
  
  // Color coding based on rating
  const colors = {
    good: '\x1b[32m', // green
    'needs-improvement': '\x1b[33m', // yellow
    poor: '\x1b[31m', // red
  };
  
  const reset = '\x1b[0m';
  const color = colors[rating] || reset;
  
  console.log(
    `${color}[Web Vitals] ${name}: ${value.toFixed(2)}ms (${rating})${reset}`
  );

  // TODO: Send to your analytics service
  // Example: gtag('event', name, { value, metric_rating: rating });
}

export function reportWebVitals() {
  // Core Web Vitals
  onCLS(sendToAnalytics);  // Cumulative Layout Shift
  onINP(sendToAnalytics);  // Interaction to Next Paint (replaces FID)
  onLCP(sendToAnalytics);  // Largest Contentful Paint
  
  // Other important metrics
  onFCP(sendToAnalytics);  // First Contentful Paint
  onTTFB(sendToAnalytics); // Time to First Byte
}

// Export individual handlers for custom monitoring
export { onCLS, onINP, onFCP, onLCP, onTTFB };
