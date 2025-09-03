'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Fashion Brand',
      category: 'ecommerce',
      description: 'Boosted online sales by 200% with comprehensive SEO and targeted paid advertising campaigns.',
      image: '/api/placeholder/600/400',
      results: ['200% Sales Increase', '150% Traffic Growth', '85% Conversion Rate'],
      technologies: ['SEO', 'PPC', 'Social Media', 'Email Marketing'],
      featured: true
    },
    {
      id: 2,
      title: 'Tech Startup Launch',
      category: 'startup',
      description: 'Built a strong brand identity and drove 5k+ monthly leads through strategic digital marketing.',
      image: '/api/placeholder/600/400',
      results: ['5K+ Monthly Leads', '300% Brand Awareness', '95% Client Satisfaction'],
      technologies: ['Branding', 'Content Marketing', 'SEO', 'Social Media'],
      featured: true
    },
    {
      id: 3,
      title: 'Local Restaurant Chain',
      category: 'local',
      description: 'Increased social media engagement by 350% in just 3 months with targeted campaigns.',
      image: '/api/placeholder/600/400',
      results: ['350% Engagement', '200% Follower Growth', '120% Online Orders'],
      technologies: ['Social Media', 'Local SEO', 'PPC', 'Content Creation'],
      featured: false
    },
    {
      id: 4,
      title: 'Educational Platform',
      category: 'education',
      description: 'Achieved top Google rankings for competitive keywords and increased organic traffic by 400%.',
      image: '/api/placeholder/600/400',
      results: ['400% Organic Traffic', 'Top 3 Rankings', '250% Lead Generation'],
      technologies: ['SEO', 'Content Strategy', 'Technical SEO', 'Analytics'],
      featured: false
    },
    {
      id: 5,
      title: 'SaaS Product Launch',
      category: 'saas',
      description: 'Launched a new SaaS product with comprehensive digital marketing strategy and achieved 10k+ signups.',
      image: '/api/placeholder/600/400',
      results: ['10K+ Signups', '500% Growth', '90% Retention Rate'],
      technologies: ['Product Marketing', 'SEO', 'Content Marketing', 'Email Automation'],
      featured: true
    },
    {
      id: 6,
      title: 'Healthcare Practice',
      category: 'healthcare',
      description: 'Improved online presence and patient acquisition through HIPAA-compliant digital marketing.',
      image: '/api/placeholder/600/400',
      results: ['300% Patient Inquiries', '150% Appointment Bookings', '100% Compliance'],
      technologies: ['Local SEO', 'PPC', 'Content Marketing', 'Reputation Management'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'startup', name: 'Startups' },
    { id: 'local', name: 'Local Business' },
    { id: 'education', name: 'Education' },
    { id: 'saas', name: 'SaaS' },
    { id: 'healthcare', name: 'Healthcare' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Discover how we&apos;ve helped businesses across various industries achieve remarkable growth and success through our digital marketing expertise.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-full bg-white rounded-3xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                    <div className="text-primary-600 opacity-30">
                      {item.featured ? (
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ) : (
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-modern group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.results.map((result, resultIndex) => (
                        <span
                          key={resultIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <motion.button
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-primary-500 to-primary-600 p-12 rounded-3xl text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>

            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold mb-4 text-modern"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Ready to Be Our Next Success Story?
              </motion.h3>
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Let&apos;s discuss how we can help your business achieve similar results and drive remarkable growth.
              </motion.p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-2xl transition-all duration-300 relative overflow-hidden text-lg shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  whileHover={{
                    opacity: 0.2,
                    x: ['-100%', '100%']
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;