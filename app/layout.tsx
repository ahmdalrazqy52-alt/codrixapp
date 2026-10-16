import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'كودركس يمن | مساحة العميل',
  description: 'منصة كودركس يمن لإدارة المشاريع والخدمات الرقمية والذكاء الاصطناعي',
  generator: 'v0.app',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/codrix-favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/codrix-app-icon.png', type: 'image/png', sizes: '1024x1024' },
    ],
    apple: '/codrix-app-icon.png',
    shortcut: '/codrix-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafdff' },
    { media: '(prefers-color-scheme: dark)', color: '#06142f' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
