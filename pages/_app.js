import { ThemeProvider, useTheme } from 'next-themes'
import 'normalize.css'
import '../styles/globals.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const {theme, setTheme} = useTheme()

  return <ThemeProvider
    defaultTheme='system'
    attribute='class'>
    <div className="font-light flex flex-col bg-zinc-100 dark:bg-black dark:text-white min-h-screen">
      <Navigation theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
}

export default MyApp
