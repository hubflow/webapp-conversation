import { getLocaleOnServer } from '@/i18n/server'
import { Montserrat } from 'next/font/google'

import './styles/globals.css'
import './styles/markdown.scss'
import type { Viewport } from 'next/dist/lib/metadata/types/extra-types'
import type { Metadata } from 'next'

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Chatflo AI',
  viewport,
}
const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className={`h-full ${montserrat.className}`}>
      <body className="h-full overflow-y-hidden">
        <div className="overflow-x-auto">
          <div className="w-screen h-[90vh] sm:h-[90vh] md:h-screen lg:h-screen min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html >
  )
}

export default LocaleLayout
