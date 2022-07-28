import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import MainLayout from '../layouts/MainLayout';
import { RecoilRoot } from 'recoil'
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client'
function MyApp({ Component, pageProps }: { Component: any; pageProps: AppProps }) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <AuthProvider>

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
    </ApolloProvider>


  )
}
export default MyApp
