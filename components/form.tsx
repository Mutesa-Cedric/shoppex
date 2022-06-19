import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth';

interface Props {
    currentPage: string,
    toLogin: () => void,
    toSignup: () => void
}


type Inputs = {
    email: string,
    password: string,
};


function Form({ currentPage, toLogin, toSignup }: Props) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const [login, setLogin] = useState(false);
    const {signIn,signUp}=useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
        if (login) {
          await signIn(data.email,data.password);
        } else {
          await signUp(data.email,data.password);
        }
      }; 

    return (
        <div className='w-3/6 px-[140px] flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='w-full h-auto px-10 py-2 rounded-lg shadow-lg flex flex-col justify-center'>
                <h1 className=' text-2xl font-bold capitalize'>{currentPage === "signup" ? "Welcome  to Shoppex" : "welcome back to Shoppex!"}</h1>
                <p className='text-lg pt-2  mb-4'>kindly enter your details below!</p>
                <div className='flex flex-col justify-between w-full my-2 items-start'>
                    <label htmlFor="email" className='text-xl font-[600] pb-4 capitalize '>
                        email
                    </label>
                    <input type="email" placeholder="Enter Email Address"
                        className='py-3 px-3 border-2 border-gray-300 w-full  rounded-md  focus:outline-none focus:border-2 focus:border-primary'
                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    />
                    {errors.email &&
                        <p className='text-red-500 text-sm my-2 px-auto'>Please enter a valid email</p>
                    }
                </div>
                <div className='flex flex-col justify-between w-full my24 items-start relative'>
                    <label htmlFor="password" className='text-xl font-[600] pb-4 capitalize'>
                        password
                    </label>
                    <input type={passwordVisible ? "text" : "password"} placeholder="Choose Password"
                        {...register("password", { required: true, minLength: 4, maxLength: 20 })}
                        className='py-3 px-3 border-2 border-gray-300 w-full  rounded-md
                            focus:outline-none focus:border-2 focus:border-primary' />
                    {passwordVisible ? <AiFillEye className='text-primary h-6 w-6 absolute bottom-[13%] right-4' onClick={togglePasswordVisibility} /> :
                        <AiFillEyeInvisible className='text-primary h-6 w-6 absolute bottom-[13%] right-4' onClick={togglePasswordVisibility} />}
                    {errors.password &&
                        <p className='text-red-500 text-sm my-2 px-auto'>password must be at least 4 characters long</p>}
                </div>
                <button className='px-12 py-3 bg-primary text-white text-lg font-bold rounded-lg mt-4'>{currentPage === "signup" ? "Sign Up" : "Log In"}</button>
                <button className="flex items-center bg-secondary text-lg font-bold my-4 py-2 justify-center rounded-lg">
                    <FcGoogle className='w-8 mr-2 h-8' />
                    <span>{currentPage === "signup" ? "Sign Up with Google" : "Login with Google"}</span>
                </button>
                <p className="pl-2 py-3">{currentPage === "signup" ? "have an account ?" : "don't have an account ?"}
                    {currentPage === "signup" ?
                        <span className="text-primary  font-bold pl-2  cursor-pointer" onClick={toLogin}>login</span>
                        : <span className="text-primary  font-bold pl-2  cursor-pointer" onClick={toSignup}>signup</span>}
                </p>
            </form>
        </div>
    )
}

export default Form