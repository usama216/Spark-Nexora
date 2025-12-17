'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash on homepage
    if (pathname === '/') {
      const handleHash = () => {
        const hash = window.location.hash;
        if (hash) {
          const sectionId = hash.substring(1); // Remove the '#'
          const element = document.getElementById(sectionId);
          if (element) {
            // Wait a bit for page to fully render
            setTimeout(() => {
              const navbar = document.querySelector('nav');
              const navbarHeight = navbar ? navbar.offsetHeight : 0;
              const elementPosition = element.offsetTop - navbarHeight - 20;
              
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      };

      // Handle hash on mount
      handleHash();
      
      // Also handle hash changes (e.g., browser back/forward)
      window.addEventListener('hashchange', handleHash);
      
      return () => {
        window.removeEventListener('hashchange', handleHash);
      };
    }
  }, [pathname]);

  return null;
}

