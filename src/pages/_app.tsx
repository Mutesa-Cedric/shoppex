import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from '../hooks/useAuth';
import MainLayout from '../layouts/MainLayout';
import '../styles/globals.css';
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
