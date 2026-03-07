import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Emergency Plumbing San Diego | HarborFlow Plumbing & Drain',
  description: '24/7 emergency plumbing services in San Diego. Fast response for burst pipes, clogged drains, and water heater repairs. Call now for immediate service.',
  generator: 'v0.app',
  keywords: ['emergency plumbing', 'San Diego plumber', 'burst pipe repair', 'drain cleaning', '24/7 plumber', 'water heater repair'],
  authors: [{ name: 'HarborFlow Plumbing' }],
  openGraph: {
    title: 'Emergency Plumbing San Diego | HarborFlow Plumbing & Drain',
    description: '24/7 emergency plumbing services in San Diego. Fast response for burst pipes, clogged drains, and water heater repairs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HarborFlow Plumbing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Plumbing San Diego | HarborFlow Plumbing',
    description: '24/7 emergency plumbing services in San Diego. Fast response for burst pipes and water heater repairs.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
