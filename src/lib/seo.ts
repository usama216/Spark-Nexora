import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const baseUrl = 'https://sparknexora.com'
const defaultImage = '/og-default.jpg'
const siteName = 'Spark Nexora'

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Spark Nexora Team',
  section,
  tags = []
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Digital Marketing & Branding Agency`
  const fullDescription = description || 'Transform your business into a digital powerhouse with Spark Nexora. Expert digital marketing, SEO, social media, web design, and branding services that drive real results.'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`

  const defaultKeywords = [
    'digital marketing',
    'SEO services',
    'social media marketing',
    'web design',
    'branding services',
    'PPC advertising',
    'content marketing',
    'digital transformation',
    'online marketing',
    'business growth'
  ]

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${fullTitle} - ${siteName}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sparknexora',
      creator: '@sparknexora',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
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
  }

  return metadata
}

export function generateStructuredData({
  type = 'WebPage',
  title,
  description,
  url,
  image,
  author,
  publishedTime,
  modifiedTime,
  organization = true
}: {
  type?: 'WebPage' | 'Article' | 'Product' | 'Service'
  title?: string
  description?: string
  url?: string
  image?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  organization?: boolean
}) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title || "Spark Nexora - Digital Marketing & Branding Agency",
    "description": description || "Transform your business into a digital powerhouse with Spark Nexora. Expert digital marketing services that drive real results.",
    "url": url ? `${baseUrl}${url}` : baseUrl,
    ...(image && { "image": image.startsWith('http') ? image : `${baseUrl}${image}` }),
    ...(author && { "author": { "@type": "Person", "name": author } }),
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
  }

  if (organization) {
    return {
      ...baseStructuredData,
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
          "width": 512,
          "height": 512
        }
      }
    }
  }

  return baseStructuredData
}

export const seoConfig = {
  siteName,
  baseUrl,
  defaultImage,
  social: {
    twitter: '@sparknexora',
    facebook: 'https://www.facebook.com/sparknexora',
    linkedin: 'https://www.linkedin.com/company/sparknexora',
    instagram: 'https://www.instagram.com/sparknexora',
  },
  contact: {
    email: 'info@sparknexora.com',
    phone: '+1-555-0123',
    address: {
      street: '123 Business Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'US'
    }
  }
}
