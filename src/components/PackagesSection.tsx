'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PaymentModal from './PaymentModal';

const PackagesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: number;
    description: string;
  } | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const packages = [
    {
      name: "Starter Spark",
      price: "$199",
      period: "mo",
      description: "Perfect for Small Businesses & Startups",
      features: [
        { text: "Social Media Management (2 platforms)", included: true },
        { text: "8 Custom Posts per Month", included: true },
        { text: "Basic SEO (on-page optimization)", included: true },
        { text: "Monthly Performance Report", included: true },
        { text: "Email Support", included: true },
        { text: "Advanced Analytics", included: false },
        { text: "Priority Support", included: false },
        { text: "Custom Strategy", included: false }
      ],
      popular: false,
      color: "primary",
      icon: "📦"
    },
    {
      name: "Growth Ignite",
      price: "$499",
      period: "mo",
      description: "For Growing Brands Ready to Scale",
      features: [
        { text: "Social Media Management (3 platforms)", included: true },
        { text: "16 Custom Posts + Stories per Month", included: true },
        { text: "Advanced SEO (on-page + off-page)", included: true },
        { text: "Google My Business Optimization", included: true },
        { text: "2 Paid Ad Campaigns", included: true },
        { text: "Email + WhatsApp Support", included: true },
        { text: "Bi-weekly Reports", included: true },
        { text: "Custom Strategy", included: false }
      ],
      popular: true,
      color: "secondary",
      icon: "🏢"
    },
    {
      name: "Premium Blaze",
      price: "$999",
      period: "mo",
      description: "For Businesses Who Want to Dominate",
      features: [
        { text: "Social Media Management (All platforms)", included: true },
        { text: "30+ Custom Posts + Stories + Reels", included: true },
        { text: "Full SEO Suite (on-page, off-page, technical)", included: true },
        { text: "PPC Management (Google + Meta Ads)", included: true },
        { text: "Blog Writing (4 per month)", included: true },
        { text: "Email Marketing Campaigns (2 per month)", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "Weekly Reports + Strategy Calls", included: true }
      ],
      popular: false,
      color: "primary",
      icon: "📋"
    },
    {
      name: "Custom Power Plan",
      price: "Custom",
      period: "Quote",
      description: "Tailored for Your Business Needs",
      features: [
        { text: "Website Design & Development", included: true },
        { text: "Branding & Logo Design", included: true },
        { text: "E-Commerce Marketing", included: true },
        { text: "Influencer Marketing", included: true },
        { text: "Video Ads & Creative Production", included: true },
        { text: "Custom Strategy Development", included: true },
        { text: "Priority Support", included: true },
        { text: "Flexible Terms", included: true }
      ],
      popular: false,
      color: "secondary",
      icon: "📄"
    }
  ];

  const handlePackageSelect = (pkg: any) => {
    if (pkg.name === 'Custom Power Plan') {
      // For custom plans, scroll to contact
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For regular packages, open payment modal
      const packagePrice = parseFloat(pkg.price.replace('$', ''));
      setSelectedPackage({
        name: pkg.name,
        price: packagePrice,
        description: pkg.description
      });
      setIsPaymentModalOpen(true);
    }
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section id="packages" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-secondary-100 rounded-full opacity-15"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-50 rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Packages</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Choose the perfect package for your business needs. All plans include our core services with varying levels of support and features.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Package Card */}
              <motion.div
                className="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Gradient Header */}
                <div className={`h-20 bg-gradient-to-r ${
                  pkg.color === 'primary' 
                    ? 'from-primary-500 to-primary-600' 
                    : 'from-secondary-500 to-primary-500'
                } flex items-center justify-center relative`}>
                  <div className="text-center">
                    <div className="text-white text-lg font-semibold">{pkg.name}</div>
                  </div>
                  
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                        🔥 Most Popular
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-center mb-4">
                    <div className="text-primary-600 mb-2 flex justify-center">
                      {index === 0 ? (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : index === 1 ? (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ) : index === 2 ? (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                      ) : (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary-500">{pkg.price}</span>
                      <span className="text-lg text-primary-400 ml-1">/{pkg.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 mr-3 mt-0.5">
                            {feature.included ? (
                              <svg
                                className="w-5 h-5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5 text-red-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm leading-relaxed ${
                            feature.included ? 'text-gray-700' : 'text-gray-400'
                          }`}>
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden mt-auto ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
                        : pkg.color === 'primary'
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700'
                        : 'bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600'
                    }`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <span className="relative z-10">
                      {pkg.name === 'Custom Power Plan' ? 'Get Custom Quote' : 'Get Started'}
                    </span>

                    {/* Button Shine Effect */}
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
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need something different?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All our packages can be customized to fit your specific needs. Contact us to discuss your requirements and we&apos;ll create a tailored solution just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      {selectedPackage && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={closePaymentModal}
          packageData={selectedPackage}
        />
      )}
    </section>
  );
};

export default PackagesSection;