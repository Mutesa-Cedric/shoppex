import Image from 'next/image';
import React from 'react'
import { AiFillBackward, AiFillStepBackward, AiOutlineArrowLeft } from 'react-icons/ai'
import { useRecoilState } from 'recoil';
import { profileMode } from '../../atoms/CurrentPageState';
import useAuth from '../../hooks/useAuth';

function EditProfile() {
    const { user, logout } = useAuth();
    const [mode, setMode] = useRecoilState(profileMode);

    return (
        <div className='w-full space-y-8 flex flex-col items-center justify-between '>
            <div className='w-full flex  justify-between pr-12'>
                <button className='text-primary flex space-x-2 transition-all duration-200 font-bold hover:scale-x-105 items-center'
                onClick={()=>setMode('view')}>
                    <AiOutlineArrowLeft /> <span>Back</span>
                </button>
            </div>
            <div className='w-full h-full border rounded-xl flex flex-col items-center'>

                <div className='w-full py-4 flex items-center justify-between border-b-2 px-12'>
                    <div>
                        <p className='font-bold text-xl'>Profile</p>
                        <p className='text-gray-500 font-bold'>some info maybe visible to other users</p>
                    </div>
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

export default EditProfile