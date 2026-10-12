import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'كودركس يمن',
    short_name: 'كودركس',
    description: 'مساحة العميل لإدارة المشاريع والخدمات الرقمية',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7faff',
    theme_color: '#071a3a',
    orientation: 'portrait-primary',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      { src: '/codrix-symbol.png', sizes: '1024x1024', type: 'image/png', purpose: 'any maskable' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
  }
}
