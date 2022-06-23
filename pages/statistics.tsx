import Head from 'next/head'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';

function Statistics() {
    const [currentPage,setCurrentPage]=useRecoilState(currentPageState);
    setCurrentPage('statistics');
    return (
        <div>
            <Head>
                <title>Shoppex - your statistics</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
        </div>
    )
}

export default Statistics