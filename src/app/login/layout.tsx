import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Spark Nexora Admin',
  description: 'Admin login for Spark Nexora',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen">
      {children}
    </div>
  )
}
