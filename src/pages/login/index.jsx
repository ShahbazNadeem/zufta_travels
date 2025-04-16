"use client";
import React, { useState } from 'react'
import zuftalogo from "@/images/zufta-logo.png"
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser } from "@/redux/authSlice/AuthSlice";

const index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [users, setUsers] = useState({ email: "", password: "", rememberMe: false });
    const getUserData = (e) => {
        const { name, value, type, checked } = e.target;
        setUsers({ ...users, [name]: type === "checkbox" ? checked : value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser(users));
        console.log(result);
        if (loginUser.fulfilled.match(result)) {
            localStorage.setItem("user", JSON.stringify(result.payload));  // Save here
            router.push('/');
        } else {
            console.log("fail", result.payload);
        }
    }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <section>
                <div className='container '>
                    <div className="mt-24 xl:my-32 mb-10 w-full flex justify-center items-center ">
                        <div className="w-auto h-auto rounded-[20px] border border-gray-300 p-[19px_18px] xl:p-[20px_28px] backdrop-blur-md flex flex-col gap-4">
                        <div className="flex justify-center">
                                <figure>
                                    <Image src={zuftalogo} />
                                </figure>
                            </div>
                            <div className='text-[20px] md:text-[24px] font-marcellus text-center'>Login to begin adventure</div>
                            {error && (
                                <div className="text-red-500 text-center text-sm mb-2">
                                    {error}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:gap-3 lg:gap-5'>
                                <div class="relative">
                                    <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="email" name="email" onChange={getUserData} required />
                                    <label for="email" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Email or Username
                                    </label>
                                </div>
                                <div class="relative">
                                    <input type="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " name="password" id="password" onChange={getUserData} required />
                                    <label for="password" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Password
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="rememberMe"
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={users.rememberMe}
                                        onChange={getUserData}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                                    />
                                    <label htmlFor="rememberMe" className="ms-2 text-sm font-medium text-[#555555]">
                                        Remember Me
                                    </label>
                                </div>


                                <button className='font-marcellus text-[16px] text-white w-[280px] h-[46px] rounded-[30px] flex justify-center items-center px-[120px] py-[13px]' disabled={loading}>
                                    <span>{loading ? "Loging in..." : "Login"}</span>
                                </button>
                            </form>
                            <div className='text-[14px] font-manrope text-center'>or <Link href='/signup' className='text-[#1A2B48] font-bold'>create a free account</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default index
