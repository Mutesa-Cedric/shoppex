import React, { useEffect, useState } from 'react'
import type { NextPage } from "next"
import AuthForm from '../components/UI/AuthForm';
import Image from 'next/image';
import Head from 'next/head'
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { isArray } from 'util';
const Welcome = () => {
    const router = useRouter();
    const [currentPage, setcurrentPage] = useState('signup');
    const { mode } = router.query;
    useEffect(() => {
        if (mode && !isArray(mode) && mode === 'login') {
            setcurrentPage(mode)
        }
        else {
            setcurrentPage("signup");
        }
        return () => {

        }
    }, [mode])

    const { error } = useAuth();
    const toLogin = () => {
        setcurrentPage('login');
    }

    const toSignup = () => {
        setcurrentPage('signup');
    }

    return (
        <div>
            <Head>
                <title>Shoppex - Welcome</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <main className='flex w-screen h-screen font-quicksand relative'>
                <AuthForm currentPage={currentPage} toLogin={toLogin} toSignup={toSignup} />
                <div className='w-3/6 h-full bg-no-repeat flex items-start -z-40 justify-center bg-cover bg-[#FFF0DE]'>
                    <Image src={'/images/woman-bg.png'} width={610} height={620} />
                </div>
            </main>
        </div>
    )
}

Welcome.singlePage = true;
export default Welcome