'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Fashion Brand',
      description: 'Boosted online sales by 200% with comprehensive SEO strategy and targeted paid advertising campaigns. Implemented conversion optimization techniques and social media marketing.',
      result: '200% Sales Increase',
      metrics: ['200% Sales Growth', '150% Traffic Increase', '85% Conversion Rate'],
      duration: '6 months',
      industry: 'Fashion & Retail',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      image: '/Portfolio/pexels-a-darmel-7710082.jpg'
    },
    {
      id: 2,
      title: 'Tech Startup',
      description: 'Built a strong brand identity and drove 5k+ monthly leads through strategic digital marketing. Created compelling content and optimized user acquisition funnels.',
      result: '5K+ Monthly Leads',
      metrics: ['5K+ Monthly Leads', '300% Brand Awareness', '95% Client Satisfaction'],
      duration: '4 months',
      industry: 'Technology',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      image: '/Portfolio/pexels-anna-nekrashevich-6802042.jpg'
    },
    {
      id: 3,
      title: 'Local Restaurant Chain',
      description: 'Increased social media engagement by 350% in just 3 months with targeted campaigns. Improved local SEO and implemented location-based marketing strategies.',
      result: '350% Engagement',
      metrics: ['350% Social Engagement', '200% Follower Growth', '120% Online Orders'],
      duration: '3 months',
      industry: 'Food & Beverage',
      color: 'from-primary-400 to-secondary-500',
      bgColor: 'from-primary-50 to-secondary-50',
      image: '/Portfolio/pexels-tima-miroshnichenko-7567591.jpg'
    }
  ];

  const tabs = [
    { id: 0, name: 'All Case Studies' },
    { id: 1, name: 'E-Commerce' },
    { id: 2, name: 'Startups' },
    { id: 3, name: 'Local Business' }
  ];

  const getFilteredCaseStudies = () => {
    if (activeTab === 0) return caseStudies;
    return caseStudies.filter((_, index) => index === activeTab - 1);
  };

  return (
    <section id="portfolio" className="px-1 lg:px-16 py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-primary-50 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-48 h-48 bg-secondary-50 rounded-full opacity-15"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16 from-gray-50 to-gray-100 p-2 rounded-full max-w-5xl mx-auto "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-xl transform scale-105'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-white/80 hover:shadow-md border border-gray-200'
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {activeTab === tab.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                {activeTab === tab.id && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <span>{tab.name}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Case Studies Layout - Improved Previous Design */}
        <div className="space-y-8 mb-12">
          {getFilteredCaseStudies().map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-6 lg:gap-12`}>
                {/* Content Side */}
                <div className="w-full lg:flex-1 space-y-4">
                  <div className="space-y-3">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 text-modern group-hover:text-primary-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{item.industry}</span>
                          <span>•</span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">Key Results:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-lg text-xs font-medium`}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result Badge */}
                    <div className="flex items-center space-x-3">
                      <div className={`inline-flex items-center px-5 py-2 bg-gradient-to-r ${item.color} text-white rounded-xl font-bold text-sm shadow-lg`}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        {item.result}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Side - Portfolio Image */}
                <div className="w-full lg:flex-1">
                  <motion.div
                    className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Portfolio Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Image Loading Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      
                      {/* Success Badge Overlay */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-bold shadow-lg transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500`}>
                          {item.result}
                        </div>
                      </div>

                      {/* Industry Tag */}
                      <div className="absolute bottom-4 left-4">
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          {item.industry}
                        </div>
                      </div>

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                          <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto shadow-2xl`}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xl font-bold text-white text-modern">
                              Success Story
                            </h4>
                            <p className="text-white/90 font-medium text-sm">
                              View Details
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className={`absolute top-6 left-6 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-300`}></div>
                      <div className={`absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-400`}></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Case Studies</span>
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioSection;