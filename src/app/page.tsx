import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PackagesSection from '@/components/PackagesSection'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Spark Nexora - Digital Marketing & Branding Agency',
  description: 'Transform your business into a digital powerhouse with Spark Nexora. Expert digital marketing, SEO, social media, web design, and branding services that drive real results.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'social media marketing',
    'web design',
    'branding services',
    'PPC advertising',
    'content marketing',
    'digital transformation',
    'online marketing',
    'business growth'
  ],
  openGraph: {
    title: 'Spark Nexora - Digital Marketing & Branding Agency',
    description: 'Transform your business into a digital powerhouse with Spark Nexora. Expert digital marketing services that drive real results.',
    type: 'website',
    url: 'https://sparknexora.com',
    images: [
      {
        url: '/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Spark Nexora - Digital Marketing Agency Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spark Nexora - Digital Marketing & Branding Agency',
    description: 'Transform your business into a digital powerhouse with Spark Nexora.',
    images: ['/twitter-homepage.jpg'],
  },
  alternates: {
    canonical: 'https://sparknexora.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Spark Nexora - Digital Marketing & Branding Agency",
            "description": "Transform your business into a digital powerhouse with Spark Nexora. Expert digital marketing services that drive real results.",
            "url": "https://sparknexora.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "Spark Nexora",
              "description": "Digital Marketing & Branding Agency",
              "url": "https://sparknexora.com",
              "logo": "https://sparknexora.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@sparknexora.com"
              },
              "sameAs": [
                "https://www.facebook.com/sparknexora",
                "https://www.twitter.com/sparknexora",
                "https://www.linkedin.com/company/sparknexora",
                "https://www.instagram.com/sparknexora"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sparknexora.com"
                }
              ]
            }
          }),
        }}
      />
      
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PackagesSection />
        <ContactSection />
      </main>
    </>
  )
}
