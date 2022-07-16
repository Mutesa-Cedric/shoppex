import Head from 'next/head'
const Home = () => {
    return (
        <div className='px-24'>
            <Head>
                <title>shoppex -  welcome</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <main className='flex flex-col items-center justify-between min-h-screen'>
                
            </main>
        </div>
    )
}

Home.singlePage = true;
export default Home
