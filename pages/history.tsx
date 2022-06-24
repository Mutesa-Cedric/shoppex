import Head from 'next/head'
import React from 'react'
import { useRecoilState } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';
import HistoryItem from '../components/HistoryItem';

function History() {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    setCurrentPage('history');
    return (
        <div className="bg-[#FAFAFE] md:overflow-y-hidden w-[72%] h-full flex items-center justify-between">
            <Head>
                <title>Shoppex - Your History</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className='flex flex-col w-full px-8'>
                <h1>Shopping history</h1>
                <div>
                    <h1>January 2022</h1>
                    <HistoryItem name="Grocery List" date='Mon 27.8.2020' status="completed" />
                    <HistoryItem name='Eero\&apos;s farewell party' date='Mon 24.8.2020' status='completed' />
                </div>
                <div>
                    <h1>March 2022</h1>
                    <HistoryItem name='Board game week 2' date='Mon 27.8.2020' status='cancelled' />
                    <HistoryItem name="Grocery List" date='Mon 27.8.2020' status="completed" />
                </div>
            </div>
        </div>
    )
}

export default History