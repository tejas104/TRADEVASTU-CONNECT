import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TradeVastu - Premium Web Development & Digital Solutions',
  description: 'Leading web development and digital marketing agency specializing in export websites, branding, and growth intelligence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-dark-bg text-foreground`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
