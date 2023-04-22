import { NextIntlProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/react'

import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
      <Analytics />
    </NextIntlProvider>
  )
}
