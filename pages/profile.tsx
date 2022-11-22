import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { currentPageState, profileMode, showItemNav } from '../state/CurrentPageState';
import EditProfile from '../components/Profile/EditProfile';
import ViewProfile from '../components/Profile/ViewProfile';
import useAuth from '../hooks/useAuth'

function profile() {
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
    const [mode, setMode] = useRecoilState(profileMode);
    const [activePage, setCurrentPage] = useRecoilState(currentPageState);
    const { user } = useAuth();
    setCurrentPage('unknown')
    const { logout } = useAuth();
    return (
        <div className="bg-[#FAFAFE] ml-20 md:overflow-y-hidden md:w-[72%] w-full h-full flex items-center justify-between"
            style={{ display: `${show && size < 768 ? "none" : ''}` }}>
            <Head>
                <title>shoppex - your profile</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <main className='flex flex-col w-full items-center justify-between md:px-28 px-4 py-12 space-y-8'>
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