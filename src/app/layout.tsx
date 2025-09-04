import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sparknexora.com'),
  title: {
    default: 'Spark Nexora - Where Ideas Spark & Brands Soar',
    template: '%s | Spark Nexora'
  },
  description: 'Transform your business into a digital powerhouse with Spark Nexora. We craft strategies that ignite engagement, boost visibility, and drive real results. Expert digital marketing, web design, and branding services.',
  keywords: [
    'digital marketing',
    'social media marketing', 
    'SEO services',
    'PPC advertising',
    'content marketing',
    'web design',
    'branding',
    'digital transformation',
    'online presence',
    'marketing strategy',
    'business growth',
    'startup marketing',
    'brand development',
    'digital agency'
  ],
  authors: [{ name: 'Spark Nexora Team' }],
  creator: 'Spark Nexora',
  publisher: 'Spark Nexora',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#005073' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sparknexora.com',
    siteName: 'Spark Nexora',
    title: 'Spark Nexora - Where Ideas Spark & Brands Soar',
    description: 'Transform your business into a digital powerhouse with Spark Nexora. We craft strategies that ignite engagement, boost visibility, and drive real results.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spark Nexora - Digital Marketing & Branding Agency',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Spark Nexora Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sparknexora',
    creator: '@sparknexora',
    title: 'Spark Nexora - Where Ideas Spark & Brands Soar',
    description: 'Transform your business into a digital powerhouse with Spark Nexora.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://sparknexora.com',
    languages: {
      'en-US': 'https://sparknexora.com',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sparknexora.com/#organization",
        "name": "Spark Nexora",
        "url": "https://sparknexora.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sparknexora.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Transform your business into a digital powerhouse with Spark Nexora. We craft strategies that ignite engagement, boost visibility, and drive real results.",
        "foundingDate": "2024",
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
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sparknexora.com/#website",
        "url": "https://sparknexora.com",
        "name": "Spark Nexora",
        "description": "Digital Marketing & Branding Agency",
        "publisher": {
          "@id": "https://sparknexora.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://sparknexora.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://sparknexora.com/#webpage",
        "url": "https://sparknexora.com",
        "name": "Spark Nexora - Where Ideas Spark & Brands Soar",
        "isPartOf": {
          "@id": "https://sparknexora.com/#website"
        },
        "about": {
          "@id": "https://sparknexora.com/#organization"
        },
        "description": "Transform your business into a digital powerhouse with Spark Nexora. We craft strategies that ignite engagement, boost visibility, and drive real results."
      },
      {
        "@type": "Service",
        "name": "Digital Marketing Services",
        "description": "Comprehensive digital marketing solutions including SEO, PPC, social media marketing, content marketing, and web design.",
        "provider": {
          "@id": "https://sparknexora.com/#organization"
        },
        "serviceType": "Digital Marketing",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Development"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
