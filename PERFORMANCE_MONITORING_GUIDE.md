# 🚀 Performance Monitoring Guide for Spark Nexora

## 📊 **How to Check Your Website's Performance**

### 1. **Built-in Performance Monitor** (Development)

Your site now includes a real-time performance monitor that shows:
- **Core Web Vitals** (LCP, FID, CLS, FCP, TTFB)
- **Page Load Time**
- **Performance Budget Status**

**To enable:**
```bash
# In development mode, the monitor appears automatically
npm run dev

# To enable in production, add this to localStorage:
localStorage.setItem('showPerformanceMonitor', 'true')
```

### 2. **Command Line Performance Testing**

#### **Quick Performance Test**
```bash
# Install performance testing tools
npm install

# Run comprehensive performance test
npm run performance

# Run Lighthouse audit only
npm run lighthouse

# Analyze bundle size
npm run analyze
```

#### **Full Performance Suite**
```bash
# Build, start, and test performance
npm run test:performance
```

### 3. **Online Performance Tools**

#### **Google PageSpeed Insights** (Recommended)
```bash
# Visit: https://pagespeed.web.dev/
# Enter your URL: https://sparknexora.com
# Get scores for:
# - Performance (0-100)
# - Accessibility (0-100) 
# - Best Practices (0-100)
# - SEO (0-100)
```

#### **GTmetrix**
```bash
# Visit: https://gtmetrix.com/
# Test your site for:
# - Page load time
# - Total page size
# - Requests count
# - Performance grade (A-F)
# - YSlow score
```

#### **WebPageTest**
```bash
# Visit: https://www.webpagetest.org/
# Advanced testing with:
# - Multiple locations worldwide
# - Different devices (mobile/desktop)
# - Various connection speeds
# - Detailed waterfall analysis
# - Filmstrip view
```

### 4. **Browser DevTools**

#### **Chrome DevTools**
```bash
# Open DevTools: F12 or Ctrl+Shift+I
# Go to these tabs:

# 1. Lighthouse Tab
# - Click "Generate report"
# - Select categories: Performance, SEO, Accessibility, Best Practices
# - Get detailed scores and recommendations

# 2. Performance Tab
# - Click record button
# - Navigate your site
# - Stop recording
# - Analyze timeline and metrics

# 3. Network Tab
# - Monitor resource loading
# - Check bundle sizes
# - Analyze waterfall charts
# - Test with throttling (slow 3G, etc.)

# 4. Coverage Tab
# - Check unused CSS/JS
# - Optimize code splitting
```

### 5. **Performance Budgets & Targets**

Your site is configured with these performance targets:

#### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅
- **FCP (First Contentful Paint)**: < 1.8s ✅
- **TTFB (Time to First Byte)**: < 800ms ✅

#### **Performance Scores**
- **Performance**: 90+ ✅
- **Accessibility**: 95+ ✅
- **Best Practices**: 90+ ✅
- **SEO**: 95+ ✅

#### **Resource Limits**
- **Total Page Size**: < 2MB
- **Image Size**: < 500KB per image
- **JS Bundle**: < 500KB
- **CSS Bundle**: < 100KB

### 6. **Real-time Monitoring Setup**

#### **Google Analytics 4**
```bash
# Add to your .env.local file:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# The analytics.ts file will automatically track:
# - Page load times
# - Core Web Vitals
# - User interactions
# - Performance metrics
```

#### **Google Search Console**
```bash
# 1. Verify your site ownership
# 2. Submit your sitemap: https://sparknexora.com/sitemap.xml
# 3. Monitor Core Web Vitals report
# 4. Check Page Experience metrics
```

### 7. **Performance Testing Commands**

```bash
# Development testing
npm run dev                    # Start development server
npm run performance           # Run performance tests

# Production testing
npm run build                 # Build for production
npm run start                 # Start production server
npm run lighthouse            # Run Lighthouse audit

# Bundle analysis
npm run analyze               # Analyze bundle size
npm run test:performance      # Full performance suite
```

### 8. **Performance Reports**

After running tests, check these locations:
```bash
./performance-reports/
├── lighthouse-report.html    # Detailed Lighthouse report
├── performance-summary.json  # Performance summary
└── web-vitals-report.json   # Core Web Vitals data
```

### 9. **Performance Optimization Checklist**

#### **✅ Already Implemented**
- [x] Image optimization (WebP, AVIF)
- [x] Font optimization (display: swap)
- [x] Bundle optimization
- [x] Compression enabled
- [x] Caching headers
- [x] Lazy loading
- [x] Code splitting
- [x] SEO optimization

#### **🔧 Additional Optimizations**
- [ ] CDN implementation
- [ ] Service Worker for caching
- [ ] Critical CSS inlining
- [ ] Resource hints (preload, prefetch)
- [ ] Third-party script optimization
- [ ] Database query optimization

### 10. **Monitoring Schedule**

#### **Daily**
- Check Google Search Console for errors
- Monitor Core Web Vitals in GA4

#### **Weekly**
- Run Lighthouse audit
- Check PageSpeed Insights
- Review performance reports

#### **Monthly**
- Full performance audit
- Update performance budgets
- Review and optimize slow pages

### 11. **Performance Alerts**

Set up alerts for:
- Core Web Vitals degradation
- Page load time increases
- Bundle size growth
- Error rate spikes
- Uptime monitoring

### 12. **Quick Performance Check Commands**

```bash
# Quick Lighthouse test
npx lighthouse https://sparknexora.com --output=json --output-path=./lighthouse.json

# Web Vitals check
npx web-vitals-cli https://sparknexora.com

# Bundle size check
npm run build && npx @next/bundle-analyzer

# Performance budget check
npm run performance
```

### 13. **Performance Tools Comparison**

| Tool | Best For | Cost | Setup |
|------|----------|------|-------|
| Google PageSpeed Insights | Quick checks | Free | None |
| Lighthouse | Detailed audits | Free | Built-in |
| GTmetrix | Historical tracking | Freemium | Account needed |
| WebPageTest | Advanced analysis | Free | None |
| Google Analytics | Real-time monitoring | Free | Setup required |
| New Relic | Enterprise monitoring | Paid | Complex setup |

### 14. **Troubleshooting Performance Issues**

#### **Common Issues & Solutions**

**Slow LCP (Largest Contentful Paint)**
```bash
# Solutions:
- Optimize images (WebP, proper sizing)
- Use next/image component
- Implement lazy loading
- Optimize server response time
```

**High CLS (Cumulative Layout Shift)**
```bash
# Solutions:
- Set image dimensions
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use font-display: swap
```

**Large Bundle Size**
```bash
# Solutions:
- Code splitting with dynamic imports
- Tree shaking unused code
- Optimize third-party libraries
- Use bundle analyzer
```

### 15. **Performance Monitoring Dashboard**

Create a simple dashboard to track:
- Core Web Vitals trends
- Page load times
- Error rates
- User engagement metrics
- Conversion rates

---

## 🎯 **Quick Start Performance Check**

1. **Run the built-in monitor**: `npm run dev` (shows in bottom-right corner)
2. **Test with PageSpeed**: Visit https://pagespeed.web.dev/
3. **Run Lighthouse**: `npm run lighthouse`
4. **Check bundle size**: `npm run analyze`

Your Spark Nexora website is now fully equipped with comprehensive performance monitoring! 🚀
