import Image from 'next/image'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { profileMode } from '../../state/CurrentPageState';
import useAuth from '../../hooks/useAuth';

function ViewProfile() {
    const [mode, setMode] = useRecoilState(profileMode);
    const { user, logout } = useAuth();
    return (
        <div className='w-full space-y-8 flex flex-col items-center justify-between '>
            <div className='w-full flex  justify-between lg:pr-12  pr-4'>
                <div className='flex flex-col  space-y-1'>
                    <h1 className='font-bold text-xl'>Profile Info</h1>
                    <p className='text-gray-500 font-bold'>your basic info</p>
                </div>
                <button onClick={logout}>
                    <span className="font-bold text-red-700 text-xl rounded-md pr-2 py-2">Logout</span>
                </button>
            </div>
            <div className='w-full h-full border rounded-xl flex flex-col items-center'>

                <div className='w-full py-4 flex items-center justify-between border-b-2 lg:px-12 md:px-6 px-2'>
                    <div>
                        <p className='font-bold text-xl'>Profile</p>
                        <p className='text-gray-500 font-bold'>some info maybe visible to other users</p>
                    </div>
                    <button className='border-primary py-2 px-6 rounded-xl border font-bold text-primary transition-all hover:bg-primary hover:text-white duration-1000'
                        onClick={() => setMode("edit")}>
                        Edit
                    </button>
                </div>
                <div className='w-full py-4 flex items-center justify-between border-b-2 px-12'>
                    <p>photo</p>
                    <Image src={user?.photoURL ? user.photoURL : '/images/profile.svg'} width={50} height={50} className="rounded-full" />
                </div>
                <div className='w-full py-4 flex items-center justify-between border-b-2 px-12'>
                    <p>name</p>
                    <p className='text-gray-500 font-bold'>{user?.displayName}</p>
                </div>
                <div className='w-full py-4 flex items-center justify-between border-b-2 px-12'>
                    <p>Phone</p>
                    <p className='text-gray-500 font-bold'>{user?.phoneNumber ? user.phoneNumber : "none"}</p>
                </div>
                <div className='w-full py-4 flex items-center justify-between  px-12'>
                    <p>email</p>
                    <p className='text-gray-500 font-bold'>{user?.email}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile