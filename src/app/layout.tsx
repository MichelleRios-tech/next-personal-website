import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getLocale } from '@/i18n/server'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michelle Dev Labs',
  description: 'Personal website and portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = getLocale()
  return (
    <html lang={locale} className='dark'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
