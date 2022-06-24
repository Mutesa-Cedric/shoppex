import Head from 'next/head'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';

function Statistics() {
    const [currentPage,setCurrentPage]=useRecoilState(currentPageState);
    setCurrentPage('statistics');
    return (
        <div className="bg-[#FAFAFE] border border-red-500 md:overflow-y-hidden w-[72%] h-full flex items-center justify-between">
            <Head>
                <title>Shoppex - your statistics</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
        </div>
    )
}

export default Statistics