import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import MainLayout from '../layouts/MainLayout';
import { RecoilRoot } from 'recoil'
function MyApp({ Component, pageProps }: { Component: any; pageProps: AppProps }) {
  return (
    <RecoilRoot>
      {
        Component.singlePage ?
          (
            <Component {...pageProps} />
          ) : (
            <AuthProvider>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </AuthProvider>

          )
      }
    </RecoilRoot>

  )
}
export default MyApp
