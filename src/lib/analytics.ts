// Google Analytics 4 setup
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Google Analytics 4 configuration
export const gtag = {
  // Page view tracking
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
  },

  // Event tracking
  event: (action: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, parameters)
    }
  },

  // Performance tracking
  performance: {
    // Track page load time
    pageLoad: (loadTime: number) => {
      gtag.event('page_load_time', {
        value: Math.round(loadTime),
        custom_parameter: 'load_time_ms'
      })
    },

    // Track Core Web Vitals
    webVitals: (metric: any) => {
      gtag.event(metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }
  }
}

// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        gtag.performance.pageLoad(loadTime)
      })
    }
  },

  // Measure Core Web Vitals
  measureWebVitals: () => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(gtag.performance.webVitals)
        getFID(gtag.performance.webVitals)
        getFCP(gtag.performance.webVitals)
        getLCP(gtag.performance.webVitals)
        getTTFB(gtag.performance.webVitals)
      })
    }
  },

  // Track user interactions
  trackInteractions: () => {
    if (typeof window !== 'undefined') {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          gtag.event('button_click', {
            button_text: target.textContent,
            button_location: target.closest('section')?.id || 'unknown'
          })
        }
      })

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement
        gtag.event('form_submit', {
          form_id: form.id || 'unknown',
          form_action: form.action || 'unknown'
        })
      })
    }
  }
}

// Performance budget configuration
export const performanceBudget = {
  // Core Web Vitals thresholds
  webVitals: {
    LCP: 2500, // Largest Contentful Paint (ms)
    FID: 100,  // First Input Delay (ms)
    CLS: 0.1,  // Cumulative Layout Shift
    FCP: 1800, // First Contentful Paint (ms)
    TTFB: 800  // Time to First Byte (ms)
  },

  // Resource size limits
  resources: {
    totalPageSize: 2 * 1024 * 1024, // 2MB
    imageSize: 500 * 1024,          // 500KB per image
    jsSize: 500 * 1024,             // 500KB for JS
    cssSize: 100 * 1024,            // 100KB for CSS
  },

  // Performance scores
  scores: {
    performance: 90,
    accessibility: 95,
    bestPractices: 90,
    seo: 95
  }
}

// Performance alerts
export const performanceAlerts = {
  checkWebVitals: (metrics: any) => {
    const budget = performanceBudget.webVitals
    
    if (metrics.name === 'LCP' && metrics.value > budget.LCP) {
      console.warn(`LCP exceeded budget: ${metrics.value}ms > ${budget.LCP}ms`)
    }
    
    if (metrics.name === 'FID' && metrics.value > budget.FID) {
      console.warn(`FID exceeded budget: ${metrics.value}ms > ${budget.FID}ms`)
    }
    
    if (metrics.name === 'CLS' && metrics.value > budget.CLS) {
      console.warn(`CLS exceeded budget: ${metrics.value} > ${budget.CLS}`)
    }
  }
}
