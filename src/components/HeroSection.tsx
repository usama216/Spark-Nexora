'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 animated-bg"
        animate={{
          background: [
            "linear-gradient(135deg, #005073 0%, #006a8e 100%)",
            "linear-gradient(135deg, #006a8e 0%, #0084b3 100%)",
            "linear-gradient(135deg, #0084b3 0%, #009fd8 100%)",
            "linear-gradient(135deg, #009fd8 0%, #00bafd 100%)",
            "linear-gradient(135deg, #00bafd 0%, #0084b3 100%)",
            "linear-gradient(135deg, #0084b3 0%, #005073 100%)",
            "linear-gradient(135deg, #005073 0%, #006a8e 100%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rounded-lg"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-white/20 rounded-full"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-white/20 rounded-lg"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-32 left-1/4 w-2 h-2 bg-white/60 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-60 right-1/3 w-3 h-3 bg-white/40 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/50 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Company Logo/Brand */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center space-x-4">
                {/* <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div> */}
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-white text-modern">Spark Nexora</h1>
                  <p className="text-white/80 text-sm">Digital Innovation</p>
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-modern">Where ideas</span>
                <span className="gradient-text text-modern">
                  Spark
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <span className="text-modern">&</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <span className="text-modern">Brands</span>
                <span className="gradient-text text-modern">
                  Soar
                </span>
              </div>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Transform your business into a digital powerhouse with our cutting-edge marketing strategies, 
              innovative technology solutions, and data-driven approaches that deliver measurable results.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary text-lg px-10 py-4"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 80, 115, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="flex flex-col items-center text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;