import { ReactNode } from 'react'

interface StructuredDataProps {
  data: object | object[]
  children?: ReactNode
}

export default function StructuredData({ data, children }: StructuredDataProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
      {children}
    </>
  )
}

// Pre-built structured data components
export function OrganizationStructuredData({
  name = 'Spark Nexora',
  description = 'Digital Marketing & Branding Agency',
  url = 'https://sparknexora.com',
  logo = 'https://sparknexora.com/logo.png',
  email = 'info@sparknexora.com',
  phone = '+1-555-0123',
  address = {
    street: '123 Business Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'US'
  },
  socialProfiles = [
    'https://www.facebook.com/sparknexora',
    'https://www.twitter.com/sparknexora',
    'https://www.linkedin.com/company/sparknexora',
    'https://www.instagram.com/sparknexora'
  ]
}: {
  name?: string
  description?: string
  url?: string
  logo?: string
  email?: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  socialProfiles?: string[]
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": logo,
      "width": 512,
      "height": 512
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": email,
      "telephone": phone
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zipCode,
      "addressCountry": address.country
    },
    "sameAs": socialProfiles
  }

  return <StructuredData data={structuredData} />
}

export function ServiceStructuredData({
  name,
  description,
  provider = 'Spark Nexora',
  url = 'https://sparknexora.com',
  image,
  price,
  priceCurrency = 'USD',
  availability = 'InStock',
  serviceType = 'Digital Marketing'
}: {
  name: string
  description: string
  provider?: string
  url?: string
  image?: string
  price?: string
  priceCurrency?: string
  availability?: string
  serviceType?: string
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": url
    },
    "serviceType": serviceType,
    "areaServed": "Worldwide",
    ...(image && { "image": image }),
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": priceCurrency,
        "availability": `https://schema.org/${availability}`
      }
    })
  }

  return <StructuredData data={structuredData} />
}

export function BreadcrumbStructuredData({
  items
}: {
  items: Array<{
    name: string
    url: string
  }>
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return <StructuredData data={structuredData} />
}

export function FAQStructuredData({
  faqs
}: {
  faqs: Array<{
    question: string
    answer: string
  }>
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return <StructuredData data={structuredData} />
}
