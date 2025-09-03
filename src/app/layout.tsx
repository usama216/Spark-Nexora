import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spark Nexora - Where Ideas Spark & Brands Soar',
  description: 'Transform your business into a digital powerhouse with Spark Nexora. We craft strategies that ignite engagement, boost visibility, and drive real results.',
  keywords: 'digital marketing, social media marketing, SEO, PPC, content marketing, web design, branding',
  authors: [{ name: 'Spark Nexora' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Spark Nexora - Where Ideas Spark & Brands Soar',
    description: 'Transform your business into a digital powerhouse with Spark Nexora.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Spark Nexora Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
