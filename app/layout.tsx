import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Portfolio - AI & Robotics Engineer',
  description: 'From Malaysia to Tokyo: An Engineer\'s Global Journey. Showcasing AI/ML projects, robotics research, and international experiences.',
  keywords: ['AI', 'Machine Learning', 'Robotics', 'Software Engineer', 'Tokyo', 'Portfolio'],
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
