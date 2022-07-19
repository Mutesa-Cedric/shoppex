import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { currentPageState, currentSideBar, profileMode } from '../atoms/CurrentPageState';
import EditProfile from '../components/Profile/EditProfile';
import ViewProfile from '../components/Profile/ViewProfile';
import useAuth from '../hooks/useAuth'

function profile() {
    const [mode, setMode] = useRecoilState(profileMode);
    const [activePage, setCurrentPage] = useRecoilState(currentPageState);
    const { user } = useAuth();
    setCurrentPage('unknown')
    const { logout } = useAuth();

    return (
        <div className="bg-[#FAFAFE] md:overflow-y-hidden w-[72%] h-full flex items-center justify-between">
            <Head>
                <title>shoppex - your profile</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <main className='flex flex-col w-full items-center justify-between px-28 py-12 space-y-8'>
                {
                    mode === 'view' ?
                        <ViewProfile />
                        : <EditProfile />
                }
            </main>
        </div>
    )
}
export default profile