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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      role="banner"
      aria-label="Hero Section - Spark Nexora Digital Marketing Agency"
    >
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
            {/* Company Name */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              itemProp="name"
            >
              Spark Nexora
            </motion.h1>

            {/* Tagline */}
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Where Ideas <span className="font-bold">Spark</span> & Brands <span className="font-bold">Soar</span>
            </motion.h2>
            
            {/* Descriptive Paragraph */}
            <motion.p 
              className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              itemProp="description"
            >
              At Spark Nexora, we transform businesses into digital powerhouses. Whether you&apos;re a startup finding your voice or an established brand aiming for growth, we craft strategies that ignite engagement, boost visibility, and drive real results.
            </motion.p>

            {/* Motto with Star */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
             <motion.svg 
                className="w-5 h-5 text-[#FFD049] mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
              <span className="text-lg font-medium text-white">Let&apos;s build your online presence into something extraordinary</span>
                    <motion.svg 
                className="w-5 h-5 text-[#FFD049] ml-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            </motion.div>


            {/* CTA Button */}
            <motion.div 
              className="flex justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                         <motion.button
             onClick={scrollToContact}
             className="bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white font-bold py-4 px-8 rounded-lg text-md transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
             whileHover={{ 
               scale: 1.05,
               boxShadow: "0 20px 40px rgba(0, 80, 115, 0.3)"
             }}
             whileTap={{ scale: 0.95 }}
             aria-label="Get Started Today - Contact Spark Nexora"
           >
             Get Started Today
           </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
       <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;