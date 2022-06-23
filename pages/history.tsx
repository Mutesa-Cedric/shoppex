import Head from 'next/head'
import React from 'react'
import { useRecoilState } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';

function History() {
    const [currentPage,setCurrentPage]=useRecoilState(currentPageState);
    setCurrentPage('history');
    return (
        <div>
            <Head>
                <title>Shoppex - Your History</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
        </div>
    )
}

export default History