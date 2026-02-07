import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Qaim Baaden | AI Engineer & Builder',
  description: 'AI Engineer building intelligent solutions in Tokyo. Passionate about machine learning, computer vision, and creating impactful AI applications.',
  keywords: ['AI', 'Machine Learning', 'Computer Vision', 'AI Engineer', 'Tokyo', 'Portfolio', 'Deep Learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
