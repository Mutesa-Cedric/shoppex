import Head from 'next/head'
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';
import { ShowHistoryItem } from '../atoms/HistoryItemState';
import HistoryItem from '../components/HistoryItem';
import ViewHistoryItem from '../components/ViewHistoryItem';
import { testItem } from '../testItem';
import { Item } from '../typings';

function History() {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const showHistoryItem=useRecoilValue(ShowHistoryItem)
    setCurrentPage('history');
    return (
        <div className="bg-[#FAFAFE] md:overflow-y-hidden w-[72%] h-full flex justify-between">
            <Head>
                <title>Shoppex - Your History</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            {showHistoryItem ?
                <ViewHistoryItem {...testItem} />
                :
                <div className='flex flex-col w-full px-20 mt-12'>
                    <h1 className='text-[#34333A] font-extrabold text-[26px] leading-[32px] mb-8'>Shopping history</h1>
                    <div className="mb-8">
                        <h1 className="font-semibold text-[13px] pl-2">January 2022</h1>
                        <HistoryItem name="Grocery List" date='Mon 27.8.2020' status="completed" />
                        <HistoryItem name='Eero&apos;s farewell party' date='Mon 24.8.2020' status='completed' />
                    </div>
                    <div>
                        <h1 className="font-semibold text-[13px] pl-2">March 2022</h1>
                        <HistoryItem name='Board game week 2' date='Mon 27.8.2020' status='cancelled' />
                        <HistoryItem name="Grocery List" date='Mon 27.8.2020' status="completed" />
                    </div>
                </div>
            }

        </div>
    )
}

export default History