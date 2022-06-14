import Head from 'next/head'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
function Signup() {
    return (
        <div>
            <Head>
                <title>Shoppex - Signup</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <main className='flex w-screen h-screen font-quicksand'>
                <div className='w-3/6 px-20 py-28'>
                    <form className='w-full h-full border-2 flex flex-col justify-between'>
                        <h1>Welcome to Shoppex</h1>
                        <p>kindly enter your details below!</p>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <button>Sign Up</button>
                        <button className="flex items-center">
                            <FcGoogle className='w-9 h-9' />
                            <span>Sign Up with Google</span>
                        </button>
                    </form>
                </div>
                <div className='w-3/6 h-full bg-no-repeat flex items-start justify-center border bg-cover bg-[#FFF0DE]'>
                    <Image src={'/images/woman-bg.png'} width={610} height={620} />
                </div>
            </main>
        </div>
    )
}

export default Signup