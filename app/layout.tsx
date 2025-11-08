import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reel Creator Agent',
  description: 'AI-powered agent for creating viral reel concepts and scripts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
