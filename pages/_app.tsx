import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: { Component: any; pageProps: AppProps }) {
  return (
    // <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  )
}
export default MyApp
