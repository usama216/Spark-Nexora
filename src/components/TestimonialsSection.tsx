'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ayesha Khan',
      role: 'Boutique Owner',
      company: 'Fashion Forward',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Spark Nexora took our small business and gave it a big voice online. Our sales skyrocketed within months!',
      results: ['300% Sales Increase', '500% Social Growth', '150% Website Traffic']
    },
    {
      id: 2,
      name: 'Daniel Lewis',
      role: 'Startup Founder',
      company: 'TechInnovate',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The team\'s creativity and data-driven approach helped us reach new audiences we never thought possible.',
      results: ['5K+ Monthly Leads', '200% Brand Awareness', '95% Client Satisfaction']
    },
    {
      id: 3,
      name: 'Maria Ahmed',
      role: 'Marketing Head',
      company: 'Global Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Professional, reliable, and results-oriented. Spark Nexora is our go-to digital partner.',
      results: ['400% ROI', '250% Lead Generation', '100% Project Success']
    },
    {
      id: 4,
      name: 'Ayesha Khan',
      role: 'Boutique Owner',
      company: 'Fashion Forward',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Spark Nexora took our small business and gave it a big voice online. Our sales skyrocketed within months!',
      results: ['300% Sales Increase', '500% Social Growth', '150% Website Traffic']
    },
    {
      id: 5,
      name: 'Daniel Lewis',
      role: 'Startup Founder',
      company: 'TechInnovate',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The team\'s creativity and data-driven approach helped us reach new audiences we never thought possible.',
      results: ['5K+ Monthly Leads', '200% Brand Awareness', '95% Client Satisfaction']
    },
    {
      id: 6,
      name: 'Maria Ahmed',
      role: 'Marketing Head',
      company: 'Global Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Professional, reliable, and results-oriented. Spark Nexora is our go-to digital partner.',
      results: ['400% ROI', '250% Lead Generation', '100% Project Success']
    }
  ];

  const stats = [
    { 
      number: '500+', 
      label: 'Happy Clients', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: '99%', 
      label: 'Satisfaction Rate', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      number: '200%', 
      label: 'Average Growth', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      number: '24/7', 
      label: 'Support Available', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="testimonials" className="px-1 lg:px-16 py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary-50 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary-50 rounded-full opacity-15"
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
          className="text-center mb-20"
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
            Client <span className="gradient-text">Testimonials</span>
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
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us and the results we&apos;ve achieved together.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 card-modern"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-primary-600 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-96 p-8 card-modern flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Results:</h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <span
                          key={resultIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-primary-200 text-4xl opacity-20">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-8">
            <div className="swiper-pagination-custom flex space-x-2"></div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
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
                Ready to Join Our Success Stories?
              </motion.h3>
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Let&apos;s discuss how we can help your business achieve similar results and become our next success story.
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
                  <span>Start Your Success Story</span>
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

      <style jsx global>{`
        .testimonials-swiper {
          padding: 20px 0 60px 0;
        }
        
        .swiper-pagination-custom {
          position: static !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #005073;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;