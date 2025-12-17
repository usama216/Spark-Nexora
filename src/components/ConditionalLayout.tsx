'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import HashScrollHandler from './HashScrollHandler';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginRoute = pathname.startsWith('/login');

  // For login route, don't show navbar and footer
  if (isLoginRoute) {
    return <>{children}</>;
  }

  // For admin route, don't show navbar and footer
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // For all other routes, show navbar and footer
  return (
    <>
      <HashScrollHandler />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
