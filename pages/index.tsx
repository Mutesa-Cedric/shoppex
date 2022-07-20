import Head from 'next/head'
import { useState } from 'react';
import HomeAds from '../components/Home/HomeAdds';
import HomeBanner from '../components/Home/HomeBanner';
import HomeContactUs from '../components/Home/HomeContactUs';
import HomeFooter from '../components/Home/HomeFooter';
import HomeNav from '../components/Home/HomeNav';
import HomeSecondBanner from '../components/Home/HomeSecondBanner';
import Review from '../components/Home/Review';
import { reviews } from '../constants/Reviews';
import useAuth from '../hooks/useAuth';
const Home = () => {
    const [reviewsNumber, setreviewsNumber] = useState(5);
    const { loading, initialLoading } = useAuth();
    const updateReviewNumber = () => {
        if (reviewsNumber <= 8) {
            setreviewsNumber(reviewsNumber + 3);
        } else {
            setreviewsNumber(5);
        }
    }

    return (
        <div className=' relative overflow-x-hidden bg-[#FAFAFE] flex flex-col justify-center items-center min-h-screen'>
            <Head>
                <title>shoppex -  welcome</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            {initialLoading ?
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                <main className='flex relative flex-col lg:space-y-32 md:space-y-20 space-y-4 items-center justify-between min-h-screen'>
                    <HomeNav />
                    <HomeBanner />
                    <HomeAds />
                    {/* reviews */}
                    <div className='flex flex-col items-center lg:px-[130px] md:px-[20px] px-4 md:h-[80vh]'>
                        <div className='flex items-center justify-center w-full mb-10'>
                            <div className='w-1/5 border-b-2'></div>
                            <span className="px-12 font-bold text-xl">Reviews</span>
                            <div className='w-1/5 border-b-2'></div>
                        </div>
                        <div className="md:flex grid grid-cols-1 md:flex-wrap items-center  justify-center h-full md:gap-0 gap-8 md:space-x-12 mb-12">
                            {
                                Array.from({ length: reviewsNumber }, (_, index) => {
                                    return <Review key={index} {...reviews[index]} />
                                }
                                )
                            }
                        </div>

                        <button className="" onClick={updateReviewNumber}>
                            <span className="font-bold underline hover:text-primary"> {reviewsNumber <= 8 ? "Load More..." : "Show few"}</span>
                        </button>

                    </div>
                    {/* reviews */}
                    <HomeSecondBanner />
                    <HomeContactUs />
                    <HomeFooter />
                </main>
            }
        </div>
    )
}

Home.singlePage = true;
export default Home
