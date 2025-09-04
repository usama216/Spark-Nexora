'use client'

import { useEffect, useState } from 'react'
import { performanceMonitor, performanceBudget } from '@/lib/analytics'

interface PerformanceMetrics {
  loadTime: number
  lcp: number
  fid: number
  cls: number
  fcp: number
  ttfb: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('showPerformanceMonitor') === 'true'
    
    if (!shouldShow) return

    setIsVisible(true)

    // Initialize performance monitoring
    performanceMonitor.measurePageLoad()
    performanceMonitor.measureWebVitals()
    performanceMonitor.trackInteractions()

    // Measure Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        const performanceData: Partial<PerformanceMetrics> = {}

        getCLS((metric) => {
          performanceData.cls = metric.value
          updateMetrics(performanceData)
        })

        getFID((metric) => {
          performanceData.fid = metric.value
          updateMetrics(performanceData)
        })

        getFCP((metric) => {
          performanceData.fcp = metric.value
          updateMetrics(performanceData)
        })

        getLCP((metric) => {
          performanceData.lcp = metric.value
          updateMetrics(performanceData)
        })

        getTTFB((metric) => {
          performanceData.ttfb = metric.value
          updateMetrics(performanceData)
        })
      })

      // Measure page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime } as PerformanceMetrics))
      })
    }
  }, [])

  const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics } as PerformanceMetrics))
  }

  const getScoreColor = (value: number, threshold: number, isLowerBetter = false) => {
    if (isLowerBetter) {
      return value <= threshold ? 'text-green-500' : 'text-red-500'
    }
    return value >= threshold ? 'text-green-500' : 'text-red-500'
  }

  const getScoreIcon = (value: number, threshold: number, isLowerBetter = false) => {
    if (isLowerBetter) {
      return value <= threshold ? '✅' : '❌'
    }
    return value >= threshold ? '✅' : '❌'
  }

  if (!isVisible || !metrics) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {/* Core Web Vitals */}
        <div className="border-b border-gray-600 pb-2">
          <h4 className="font-semibold mb-1">Core Web Vitals</h4>
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getScoreColor(metrics.lcp, performanceBudget.webVitals.LCP, true)}>
                {getScoreIcon(metrics.lcp, performanceBudget.webVitals.LCP, true)} {metrics.lcp?.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={getScoreColor(metrics.fid, performanceBudget.webVitals.FID, true)}>
                {getScoreIcon(metrics.fid, performanceBudget.webVitals.FID, true)} {metrics.fid?.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getScoreColor(metrics.cls, performanceBudget.webVitals.CLS, true)}>
                {getScoreIcon(metrics.cls, performanceBudget.webVitals.CLS, true)} {metrics.cls?.toFixed(3)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getScoreColor(metrics.fcp, performanceBudget.webVitals.FCP, true)}>
                {getScoreIcon(metrics.fcp, performanceBudget.webVitals.FCP, true)} {metrics.fcp?.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, performanceBudget.webVitals.TTFB, true)}>
                {getScoreIcon(metrics.ttfb, performanceBudget.webVitals.TTFB, true)} {metrics.ttfb?.toFixed(0)}ms
              </span>
            </div>
          </div>
        </div>

        {/* Page Load Time */}
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, 3000, true)}>
            {getScoreIcon(metrics.loadTime, 3000, true)} {metrics.loadTime?.toFixed(0)}ms
          </span>
        </div>

        {/* Performance Score */}
        <div className="pt-2 border-t border-gray-600">
          <div className="text-center">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('https://pagespeed.web.dev/', '_blank')
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs"
            >
              Test on PageSpeed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
