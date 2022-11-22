import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, showItemNav } from '../state/CurrentPageState';
import { ShowHistoryItem } from '../state/ItemState';
import HistoryItem from '../components/history/HistoryItem';
import ViewHistoryItem from '../components/history/ViewHistoryItem';
import { testItem } from '../testItem';
import { Item } from '../typings';

function History() {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const showHistoryItem = useRecoilValue(ShowHistoryItem)
    const [show, setShow] = useRecoilState(showItemNav);
    const [size, setSize] = useState(1200);
    useEffect(() => {
        setSize(window.innerWidth);
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        });
        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, [])
    setCurrentPage('history');
    return (
        <div className="bg-[#FAFAFE] md:overflow-y-hidden md:w-[72%] ml-20 w-full flex justify-between"
            style={{ display: `${show && size < 768 ? "none" : ''}` }}>
            <Head>
                <title>Shoppex - Your History</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            {showHistoryItem ?
                <ViewHistoryItem {...testItem} />
                :
                <div className='flex flex-col w-full md:px-20 px-4 mt-12'>
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