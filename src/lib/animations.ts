// Global animation configurations for consistent, smooth animations across the app

export const animationConfig = {
  // Easing functions for smooth animations
  easing: {
    smooth: [0.25, 0.46, 0.45, 0.94] as const,
    spring: [0.4, 0, 0.6, 1] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
  },
  
  // Duration presets
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    slower: 1.5,
  },
  
  // Spring configurations
  spring: {
    gentle: { type: "spring" as const, stiffness: 300, damping: 30 },
    smooth: { type: "spring" as const, stiffness: 400, damping: 25 },
    bouncy: { type: "spring" as const, stiffness: 500, damping: 20 },
  },
  
  // Common animation variants
  variants: {
    fadeInUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.15
        }
      }
    },
    staggerItem: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  
  // Hover animations
  hover: {
    lift: { y: -5, scale: 1.02 },
    scale: { scale: 1.05 },
    rotate: { rotate: 5 },
    glow: { boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }
  },
  
  // Tap animations
  tap: {
    scale: { scale: 0.95 },
    press: { scale: 0.98 }
  }
};

// Helper function to create smooth transitions
export const createSmoothTransition = (
  duration: number = 0.8,
  delay: number = 0,
  ease: readonly number[] = animationConfig.easing.smooth
) => ({
  duration,
  delay,
  ease
});

// Helper function for staggered animations
export const createStaggerTransition = (
  staggerDelay: number = 0.15,
  itemDelay: number = 0
) => ({
  staggerChildren: staggerDelay,
  delayChildren: itemDelay
});

// Helper function for infinite animations
export const createInfiniteTransition = (
  duration: number = 10,
  ease: readonly number[] = animationConfig.easing.spring
) => ({
  duration,
  repeat: Infinity,
  ease,
  repeatType: "reverse" as const
});
