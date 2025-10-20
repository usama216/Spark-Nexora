'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useToast } from '@/hooks/useToast';
import ToastContainer from './ToastContainer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject:'',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { toasts, showSuccess, showError, showWarning, removeToast } = useToast();

  // Validation functions
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 100) return 'Name cannot exceed 100 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (value && value.length > 20) return 'Phone number cannot exceed 20 characters';
        if (value && !/^[\+]?[0-9\s\-\(\)]+$/.test(value)) return 'Please enter a valid phone number';
        return '';
      
      case 'company':
        if (value && value.length > 100) return 'Company name cannot exceed 100 characters';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        if (value.trim().length > 200) return 'Subject cannot exceed 200 characters';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 2000) return 'Message cannot exceed 2000 characters';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
      showError('Validation Error', error);
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);
    
    // Validate form
    // if (!validateForm()) {
    //   showError('Form Validation Failed', 'Please fix the errors below before submitting.');
    //   setIsSubmitting(false);
    //   return;
    // }
    
    setIsSubmitting(true);
    
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.sparknexora.com/api';
      
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success
        showSuccess('Message Sent Successfully!', 'Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: 'Other',
          budget: 'Not sure',
          timeline: 'Just exploring'
        });
        setErrors({});
        setTouched({});
      } else {
        // Error
        const errorMessage = result.message || result.errors?.join(', ') || 'Failed to send message';
        showError('Failed to Send Message', errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showError('Connection Error', 'Sorry, there was an error sending your message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+441223910816', '_self');
  };

  const handleEmailClick = () => {
    const email = 'sparknexora@gmail.com';
    const subject = 'Inquiry from Website';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleLocationClick = () => {
    const address = 'Office 14691 182-184 High Street North East Ham London E6 2JA';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office Address',
      details: 'Office 14691 182-184 High Street North East Ham London E6 2JA',
      action: 'Get Directions',
      onClick: handleLocationClick
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Number',
      details: '+44 1223 910 816',
      action: 'Call Now',
      onClick: handlePhoneClick
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Address',
      details: 'sparknexora@gmail.com',
      action: 'Send Email',
      onClick: handleEmailClick
    }
  ];

  const services = [
    'Social Media Marketing',
    'Search Engine Optimization',
    'Pay-Per-Click Advertising',
    'Content Marketing',
    'Email Marketing',
    'Web Design & Development',
    'Branding & Strategy',
    'Custom Solution'
  ];

  return (
    <>
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
      <section id="contact" className="relative px-24 py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Brand Color Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,80,115,0.05)_0%,transparent_50%)]"></div>
        
        {/* Floating Brand Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-100/30 to-primary-200/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-secondary-100/30 to-secondary-200/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Brand Color Accents */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary-500 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-secondary-500 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header with Brand Colors */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full border border-primary-200 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span className="text-primary-700 font-semibold text-sm">GET IN TOUCH</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Let&apos;s Create Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Amazing
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            Ready to take your business to the next level? We&apos;re here to help you achieve your digital goals with innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information Cards with Brand Colors */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {info.details}
                      </p>
                      <button 
                        onClick={info.onClick}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-300 flex items-center space-x-1 group-hover:translate-x-1"
                      >
                        <span>{info.action}</span>
                        <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modern Contact Form with Brand Colors */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Message</span>
                </h3>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Floating Label Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      required
                      className={`peer w-full px-0 pt-6 pb-2 text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${
                        errors.name && touched.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                      placeholder=" "
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                        errors.name && touched.name 
                          ? 'text-red-500 peer-focus:text-red-500' 
                          : 'text-gray-500 peer-focus:text-primary-500'
                      }`}
                    >
                      Full Name *
                    </label>
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-0">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      required
                      className={`peer w-full px-0 pt-6 pb-2 text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${
                        errors.email && touched.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                      placeholder=" "
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                        errors.email && touched.email 
                          ? 'text-red-500 peer-focus:text-red-500' 
                          : 'text-gray-500 peer-focus:text-primary-500'
                      }`}
                    >
                      Email Address *
                    </label>
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-0">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`peer w-full px-0 pt-6 pb-2 text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${
                        errors.phone && touched.phone 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                      placeholder=" "
                    />
                    <label 
                      htmlFor="phone" 
                      className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                        errors.phone && touched.phone 
                          ? 'text-red-500 peer-focus:text-red-500' 
                          : 'text-gray-500 peer-focus:text-primary-500'
                      }`}
                    >
                      Phone Number
                    </label>
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-0">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`peer w-full px-0 pt-6 pb-2 text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 ${
                        errors.company && touched.company 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                      placeholder=" "
                    />
                    <label 
                      htmlFor="company" 
                      className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                        errors.company && touched.company 
                          ? 'text-red-500 peer-focus:text-red-500' 
                          : 'text-gray-500 peer-focus:text-primary-500'
                      }`}
                    >
                      Company Name
                    </label>
                    {errors.company && touched.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                    )}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-0">
                      <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="peer w-full px-0 pt-6 pb-2 pr-8 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-500 transition-colors duration-300 cursor-pointer"
                    >
                      <option value="" disabled> </option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="py-2 px-4 text-gray-900 bg-white hover:bg-primary-50">
                          {service}
                        </option>
                      ))}
                    </select>
                    <label 
                      htmlFor="service" 
                      className={`absolute text-sm duration-300 transform origin-[0] left-0 z-10 transition-all duration-300 ${
                        formData.service 
                          ? '-translate-y-4 scale-75 text-primary-500' 
                          : 'top-4 scale-100 translate-y-0 text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary-500'
                      }`}
                    >
                      Service Interested In
                    </label>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-0 pointer-events-none">
                      <motion.svg 
                        className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: formData.service ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                    
                    {/* Custom Dropdown Overlay for Better Styling */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Service Preview Card */}
                  {formData.service && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-3 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Selected: {formData.service}</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                <motion.div 
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                    rows={4}
                    className={`peer w-full px-0 pt-6 pb-2 text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 transition-colors duration-300 resize-none ${
                      errors.message && touched.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-primary-500'
                    }`}
                    placeholder=" "
                  />
                  <label 
                    htmlFor="message" 
                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                      errors.message && touched.message 
                        ? 'text-red-500 peer-focus:text-red-500' 
                        : 'text-gray-500 peer-focus:text-primary-500'
                    }`}
                  >
                    Tell us about your project *
                  </label>
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                  <div className="absolute top-4 right-0">
                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 hover:from-primary-600 hover:via-primary-700 hover:to-secondary-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group shadow-2xl hover:shadow-primary-500/25"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3 text-base">
                    {isSubmitting ? (
                      <>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </motion.svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        
                      </>
                    )}
                  </span>

                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
                      whileHover={{
                        opacity: 1,
                        x: ['-100%', '100%']
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  )}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
    </>
  );
};

export default ContactSection;