import Image from 'next/image';
import React from 'react'
import { AiFillBackward, AiFillStepBackward, AiOutlineArrowLeft, AiFillCamera } from 'react-icons/ai'
import { useRecoilState } from 'recoil';
import { profileMode } from '../../state/CurrentPageState';
import useAuth from '../../hooks/useAuth';

function EditProfile() {
    const { user, logout } = useAuth();
    const [mode, setMode] = useRecoilState(profileMode);

    return (
        <div className='w-full space-y-4 flex flex-col items-center justify-between '>
            <div className='w-full flex  justify-between md:pr-12 pr-4'>
                <button className='text-primary flex space-x-2 transition-all duration-200 font-bold hover:scale-x-105 items-center'
                    onClick={() => setMode('view')}>
                    <AiOutlineArrowLeft /> <span>Back</span>
                </button>
            </div>
            <div className='w-full h-full border rounded-xl flex flex-col space-y-6 lg:pr-48 md:pr-12 pl-6 md:py-10'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl'>Change Info</h1>
                    <p className="text-gray-500">changes will be reflected to every service</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <Image src={user?.photoURL ? user.photoURL : '/images/profile.svg'} width={50} height={50} className="rounded-full" />
                    <span className='uppercase text-gray-500 font-bold hover:text-primary cursor-pointer'>change photo</span>
                </div>
                <form className='flex flex-col space-y-3 pr-12'>
                    <div className='flex flex-col space-y-1 '>
                        <span className='capitalize font-bold'> name</span>
                        <input type="text" placeholder="enter your name"
                            className='rounded-xl border border-gray-400 placeholder:text-gray-500 capitalize px-5 h-12 bg-inherit focus:outline-none focus:border-primary' />
                    </div>
                    <div className='flex flex-col space-y-1 '>
                        <span className='capitalize font-bold'> phone</span>
                        <input type="telephone" placeholder="enter your name"
                            className='rounded-xl border border-gray-400 placeholder:text-gray-500 capitalize px-5 h-12 bg-inherit focus:outline-none focus:border-primary' />
                    </div>
                    <div className='flex flex-col space-y-1 '>
                        <span className='capitalize font-bold'> email</span>
                        <input type="email" placeholder="enter your name"
                            className='rounded-xl border border-gray-400 placeholder:text-gray-500 capitalize px-5 h-12 bg-inherit focus:outline-none focus:border-primary' />
                    </div>
                    <div className='flex flex-col space-y-1 '>
                        <span className='capitalize font-bold'> password</span>
                        <input type="password" placeholder="enter your name"
                            className='rounded-xl border border-gray-400 placeholder:text-gray-500 capitalize px-5 h-12 bg-inherit focus:outline-none focus:border-primary' />
                    </div>
                    <button className='bg-primary text-white rounded-xl px-6 py-2 font-bold w-1/4 transition-all duration-500 hover:text-primary border hover:bg-inherit border-primary'>
                        save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile