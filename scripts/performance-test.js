#!/usr/bin/env node

/**
 * Performance Testing Script for Spark Nexora
 * 
 * This script helps you test your website's performance using various tools
 * and provides automated performance monitoring.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  siteUrl: 'http://localhost:3000', // Change to your production URL
  lighthouse: {
    output: 'html',
    outputPath: './performance-reports',
    categories: ['performance', 'accessibility', 'best-practices', 'seo']
  },
  budgets: {
    performance: 90,
    accessibility: 95,
    bestPractices: 90,
    seo: 95,
    lcp: 2500, // ms
    fid: 100,  // ms
    cls: 0.1,
    fcp: 1800, // ms
    ttfb: 800  // ms
  }
};

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkDependencies() {
  log('🔍 Checking dependencies...', 'blue');
  
  const requiredPackages = ['lighthouse', 'web-vitals'];
  const missingPackages = [];
  
  requiredPackages.forEach(pkg => {
    try {
      require.resolve(pkg);
      log(`✅ ${pkg} is installed`, 'green');
    } catch (e) {
      missingPackages.push(pkg);
      log(`❌ ${pkg} is missing`, 'red');
    }
  });
  
  if (missingPackages.length > 0) {
    log(`\n📦 Installing missing packages: ${missingPackages.join(', ')}`, 'yellow');
    execSync(`npm install --save-dev ${missingPackages.join(' ')}`, { stdio: 'inherit' });
  }
}

function createReportsDirectory() {
  const reportsDir = path.join(process.cwd(), config.lighthouse.outputPath);
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
    log(`📁 Created reports directory: ${reportsDir}`, 'green');
  }
}

function runLighthouse() {
  log('\n🚀 Running Lighthouse performance audit...', 'blue');
  
  try {
    const command = `npx lighthouse ${config.siteUrl} ` +
      `--output=${config.lighthouse.output} ` +
      `--output-path=${config.lighthouse.outputPath}/lighthouse-report.html ` +
      `--chrome-flags="--headless" ` +
      `--only-categories=${config.lighthouse.categories.join(',')}`;
    
    execSync(command, { stdio: 'inherit' });
    log('✅ Lighthouse audit completed!', 'green');
    log(`📊 Report saved to: ${config.lighthouse.outputPath}/lighthouse-report.html`, 'blue');
    
  } catch (error) {
    log('❌ Lighthouse audit failed:', 'red');
    console.error(error.message);
  }
}

function runWebVitals() {
  log('\n📈 Running Web Vitals analysis...', 'blue');
  
  try {
    const command = `npx web-vitals-cli ${config.siteUrl}`;
    execSync(command, { stdio: 'inherit' });
    log('✅ Web Vitals analysis completed!', 'green');
    
  } catch (error) {
    log('❌ Web Vitals analysis failed:', 'red');
    console.error(error.message);
  }
}

function generatePerformanceReport() {
  log('\n📋 Generating performance report...', 'blue');
  
  const report = {
    timestamp: new Date().toISOString(),
    siteUrl: config.siteUrl,
    budgets: config.budgets,
    recommendations: [
      'Optimize images using WebP/AVIF formats',
      'Implement lazy loading for below-the-fold content',
      'Minimize and compress CSS/JS files',
      'Use a CDN for static assets',
      'Enable browser caching',
      'Optimize font loading with font-display: swap',
      'Reduce server response time (TTFB)',
      'Minimize third-party scripts',
      'Use efficient image formats and sizes',
      'Implement critical CSS inlining'
    ],
    tools: {
      lighthouse: 'https://developers.google.com/web/tools/lighthouse',
      pageSpeed: 'https://pagespeed.web.dev/',
      gtmetrix: 'https://gtmetrix.com/',
      webPageTest: 'https://www.webpagetest.org/',
      chromeDevTools: 'Press F12 in Chrome and go to Performance tab'
    }
  };
  
  const reportPath = path.join(config.lighthouse.outputPath, 'performance-summary.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log('✅ Performance report generated!', 'green');
  log(`📄 Report saved to: ${reportPath}`, 'blue');
  
  return report;
}

function displayPerformanceTips() {
  log('\n💡 Performance Optimization Tips:', 'yellow');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'yellow');
  
  const tips = [
    '🎯 Core Web Vitals Targets:',
    '   • LCP (Largest Contentful Paint): < 2.5s',
    '   • FID (First Input Delay): < 100ms',
    '   • CLS (Cumulative Layout Shift): < 0.1',
    '',
    '🚀 Quick Wins:',
    '   • Enable compression (gzip/brotli)',
    '   • Optimize images (WebP, proper sizing)',
    '   • Minimize CSS/JS bundles',
    '   • Use CDN for static assets',
    '   • Implement lazy loading',
    '',
    '🔧 Next.js Specific:',
    '   • Use next/image for optimized images',
    '   • Implement dynamic imports for code splitting',
    '   • Use next/font for font optimization',
    '   • Enable static generation where possible',
    '',
    '📊 Monitoring Tools:',
    '   • Google PageSpeed Insights',
    '   • Chrome DevTools Lighthouse',
    '   • GTmetrix',
    '   • WebPageTest',
    '   • Google Search Console'
  ];
  
  tips.forEach(tip => log(tip, tip.startsWith('🎯') || tip.startsWith('🚀') || tip.startsWith('🔧') || tip.startsWith('📊') ? 'bold' : 'reset'));
}

function main() {
  log('🎯 Spark Nexora Performance Testing Suite', 'bold');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');
  
  // Check if site is running
  log(`🌐 Testing site: ${config.siteUrl}`, 'blue');
  
  checkDependencies();
  createReportsDirectory();
  
  // Run performance tests
  runLighthouse();
  runWebVitals();
  
  // Generate report
  const report = generatePerformanceReport();
  
  // Display tips
  displayPerformanceTips();
  
  log('\n🎉 Performance testing completed!', 'green');
  log('📁 Check the performance-reports directory for detailed results.', 'blue');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { config, runLighthouse, runWebVitals, generatePerformanceReport };
