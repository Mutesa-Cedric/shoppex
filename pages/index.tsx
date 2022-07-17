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
const Home = () => {
    const [reviewsNumber, setreviewsNumber] =useState(5);
    const updateReviewNumber = () => {
        if (reviewsNumber <= 8) {
            setreviewsNumber(reviewsNumber + 3);
        } else {
            setreviewsNumber(5);
        }
    }

    return (
        <div className='px-[170px] bg-[#FAFAFE]'>
            <Head>
                <title>shoppex -  welcome</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <main className='flex flex-col space-y-12 items-center justify-between min-h-screen'>
                <HomeNav />
                <HomeBanner />
                <HomeAds />
                {/* reviews */}
                <div className='flex flex-col items-center'>
                    <div className="flex">
                        {
                            Array.from({ length: reviewsNumber }, (_, index) => {
                                return <Review key={index} {...reviews[index]} />
                            }
                            )
                        }
                    </div>
                    {reviewsNumber <= 8 ?
                        <button className="" onClick={updateReviewNumber}>
                            <span>Load More</span>
                        </button>
                        :
                        <button className="" onClick={updateReviewNumber}>
                            <span>Show Less</span>
                        </button>}
                </div>
                {/* reviews */}
                <HomeSecondBanner />
                <HomeContactUs />
                <HomeFooter />
            </main>
        </div>
    )
}

Home.singlePage = true;
export default Home
