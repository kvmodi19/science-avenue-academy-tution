import 'bootstrap/dist/css/bootstrap.min.css';

import '@/styles/globals.scss'
import '@/styles/default-style.scss'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import { useRouter } from 'next/router';

import * as gtag from "../lib/gtag"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      console.log('handleRouteChange', url)
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}
