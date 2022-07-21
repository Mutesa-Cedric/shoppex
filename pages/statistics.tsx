import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, showItemNav } from '../atoms/CurrentPageState';
import ConfirmModal from '../components/UI/ConfirmModal';
import SummaryChart from '../components/statistics/SummaryChart';
import TopCategory from '../components/statistics/TopCategory';
import TopItem from '../components/statistics/TopItem';
import { topItems, topCategories } from "../constants/topItems"
function Statistics() {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const [show, setShow] = useRecoilState(showItemNav);
    const [size, setSize] = useState(1200);
    useEffect(() => {
        setSize(window.innerWidth)
      window.addEventListener('resize', () => {
        setSize(window.innerWidth)
      });
      return () => {
        window.removeEventListener('resize', () => { })
      }
    }, [])
    setCurrentPage('statistics');
    return (
        <div className="bg-[#FAFAFE]  md:overflow-y-hidden md:px-28 px-4 pt-16 pb-20 md:w-[72%] md:h-full h-screen flex items-center justify-between"
        style={{ display: `${show && size < 768 ? "none" : ''}` }}>
            <Head>
                <title>Shoppex - your statistics</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <div className='flex w-full  h-full flex-col justify-between'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col '>
                        <h1 className="text-[24px] font-extrabold leading-[30px] pb-4">Top Items</h1>
                        <div className="flex flex-col space-y-6 mt-1">
                            {topItems.map(item => {
                                return <TopItem {...item} />
                            })}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[24px] font-extrabold leading-[30px] pb-4">Top Categories</h1>
                        <div className="flex flex-col space-y-6 mt-1">
                            {
                                topCategories.map(category => {
                                    return <TopCategory {...category} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-xl capitalize font-semibold'>monthly summary</h1>
                    <SummaryChart />
                </div>
            </div>
            <ConfirmModal />
        </div>
    )
}

export default Statistics