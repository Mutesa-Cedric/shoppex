import Head from 'next/head'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';
import SummaryChart from '../components/SummaryChart';
import TopCategory from '../components/TopCategory';
import TopItem from '../components/TopItem';
import { topItems, topCategories } from "../constants/topItems"
function Statistics() {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    setCurrentPage('statistics');
    return (
        <div className="bg-[#FAFAFE]  md:overflow-y-hidden px-28 pt-16 w-[72%] h-full flex items-center justify-between">
            <Head>
                <title>Shoppex - your statistics</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <div className='flex w-full  h-full flex-col justify-between'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col '>
                        <h1 className="text-[24px] font-extrabold leading-[30px] pb-4">Top Items</h1>
                        <div className="flex flex-col space-y-8 mt-1">
                            {topItems.map(item=>{
                                return <TopItem {...item}/>
                            })}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[24px] font-extrabold leading-[30px] pb-4">Top Categories</h1>
                        <div className="flex flex-col space-y-8 mt-1">
                            {
                                topCategories.map(category=>{
                                    return <TopCategory {...category}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <h1>monthly summary</h1>
                    <SummaryChart />
                </div>
            </div>
        </div>
    )
}

export default Statistics