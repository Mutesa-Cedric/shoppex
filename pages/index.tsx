import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideNav from '../components/SideNav'
import useAuth from '../hooks/useAuth'

const Home= () => {

  const { user, logout, initialLoading } = useAuth();
  return (
    <div className="bg-[#FAFAFE] min-h-screen flex items-center justify-center">
      <Head>
        <title>Shoppex - Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
    </div>
  )
}
export default Home
