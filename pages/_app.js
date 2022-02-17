import Script from 'next/script'
import 'normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Script type="text/javascript" src="/darkTheme.js" strategy="beforeInteractive" />
    <Component {...pageProps} />
  </>
}

export default MyApp
