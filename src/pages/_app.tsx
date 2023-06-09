import 'bootstrap/dist/css/bootstrap.min.css';

import '@/styles/globals.scss'
import '@/styles/default-style.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
