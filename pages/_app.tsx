import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import MainLayout from '../layouts/MainLayout';
import { RecoilRoot } from 'recoil';
import  { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }: { Component: any; pageProps: AppProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Toaster />
        {
          Component.singlePage ?
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
