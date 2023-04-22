import { NextIntlProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

import type { AppProps } from 'next/app'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
      <Analytics />
    </NextIntlProvider>
  )
}
