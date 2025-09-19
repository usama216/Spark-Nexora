'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
        </svg>
      ),
      title: 'Social Media Marketing',
      description: 'Build strong communities, grow followers, and boost engagement across all major platforms.',
      features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Analytics & Reporting'],
      image: '/Services/pexels-eva-bronzini-6956303.jpg',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Search Engine Optimization',
      description: 'Get found, rank higher, and stay ahead of competitors with our comprehensive SEO strategies.',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Link Building'],
      // image: '/Services/pexels-eva-bronzini-6956303.jpg',
      image: '/Services/pexels-pixabay-270637.jpg',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize ROI with smartly targeted paid campaigns across Google, Facebook, and Instagram.',
      features: ['Campaign Setup', 'Ad Creative Design', 'Bid Management', 'Performance Optimization'],
      image: '/Services/pexels-energepic-com-27411-159888.jpg',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Content Marketing',
      description: 'Blogs, videos, and creatives that tell your brand\'s story and engage your audience.',
      features: ['Blog Writing', 'Video Production', 'Infographic Design', 'Content Strategy'],
      image: '/Services/pexels-goumbik-590020.jpg',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Marketing',
      description: 'Nurture leads and turn subscribers into loyal customers with targeted email campaigns.',
      features: ['Email Design', 'Automation Setup', 'List Management', 'A/B Testing'],
      image: '/Services/pexels-mikael-blomkvist-6476577.jpg',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Design & Development',
      description: 'Fast, modern, and conversion-focused websites that drive results and user engagement.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Integration', 'Analytics Setup'],
      image: '/Services/pexels-shkrabaanthony-5466250.jpg',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'Branding & Strategy',
      description: 'From logo design to full-scale digital strategy, we help your brand stand out.',
      features: ['Brand Identity', 'Logo Design', 'Digital Strategy', 'Market Research'],
      image: '/Services/pexels-eva-bronzini-7661627.jpg',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden px-1 lg:px-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-secondary-100 rounded-full opacity-15"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-50 rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 text-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.div 
            className="w-24 lg:w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6 lg:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg lg:text-xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            We offer end-to-end digital marketing services designed to spark growth and drive measurable results for your business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-white shadow-lg group-hover:shadow-2xl transition-all duration-700 border border-gray-100/50 group-hover:border-primary-200/50 flex flex-col h-full"
                whileHover={{ 
                  y: -16, 
                  scale: 1.02,
                  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Hero Image Section */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating Icon */}
                  <motion.div 
                    className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-8 h-8 text-white">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Service Badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {service.title.split(' ')[0]}
                  </motion.div>
                  
                  {/* Image Loading Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center opacity-0 group-hover:opacity-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                      <div className="w-10 h-10">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>

                  {/* Features List with Tick Marks */}
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-xs lg:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                 
                </div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 w-32 h-2 bg-gradient-to-r ${service.color} rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-primary-500 to-primary-600 p-10 lg:p-16 rounded-3xl lg:rounded-4xl text-white relative overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full -translate-x-12 -translate-y-12"></div>
            </div>
            
            {/* Animated Elements */}
            <motion.div
              className="absolute top-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-12 h-12 border-2 border-white/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold mb-6 text-modern"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Digital Presence?
              </motion.h3>
              <motion.p 
                className="text-xl lg:text-2xl text-white/90 mb-8 lg:mb-10 max-w-3xl mx-auto px-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Let&apos;s discuss how our comprehensive digital marketing services can drive growth and success for your business.
              </motion.p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-10 lg:py-5 lg:px-12 rounded-2xl lg:rounded-3xl transition-all duration-300 relative overflow-hidden text-lg lg:text-xl shadow-xl hover:shadow-2xl group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Get Started Today</span>
                  <motion.svg 
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>

                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  whileHover={{
                    opacity: 0.3,
                    x: ['-100%', '100%']
                  }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;