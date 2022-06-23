import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import MainLayout from '../components/MainLayout';
import {RecoilRoot} from 'recoil'
function MyApp({ Component, pageProps }: { Component: any; pageProps: AppProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        {
          Component.authPage ?
            (
              <Component {...pageProps} />
            ) : (
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            )
        }
      </AuthProvider>
    </RecoilRoot>

  )
}
export default MyApp
