import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: '644 АВТО | Автосервис в Железнодорожном и Балашихе',
  description: 'Профессиональный ремонт и обслуживание автомобилей в Железнодорожном. Сход-развал 3D, слесарные работы, ремонт электрики, заправка кондиционеров. Гарантия на все работы.',
  keywords: 'автосервис, ремонт авто, Железнодорожный, Балашиха, сход-развал, шиномонтаж, диагностика',
  openGraph: {
    title: '644 АВТО | Автосервис в Железнодорожном',
    description: 'Профессиональный ремонт автомобилей всех марок. Честные цены, гарантия качества.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5A623',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
