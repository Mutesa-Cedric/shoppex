import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useAuth from '../hooks/useAuth'

const Home: NextPage = () => {

  const { user ,logout} = useAuth();
  console.log(user)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Shoppex - Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p>
          shoppex
        </p>
        <button className="bg-primary text-white py-2 px-8 rounded-md my-2 text-xl " onClick={logout}>
          logout
        </button>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">

      </footer>
    </div>
  )
}

export default Home
