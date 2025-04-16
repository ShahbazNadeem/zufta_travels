"use client";
import React, { useState } from "react";
import "@/globalcss";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FaCalendarAlt } from "react-icons/fa"

const index = () => {
    const [users, setUsers] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const getUserData = (e) => {
        const { name, value, type, checked } = e.target;
        setUsers({ ...users, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
    };
    return (
        <Layout>
            <Head>
                <title>Sign up</title>
            </Head>

            <section>
                <div className="wrapper-S1">
                    <div className="container">
                        <div className="mt-24 xl:my-32 mb-10 w-full flex justify-center items-center">
                            <div className="w-auto h-auto rounded-[20px] border border-gray-300 p-[19px_18px] xl:p-[20px_28px] backdrop-blur-md flex flex-col gap-4">
                                <div className="text-[20px] md:text-[24px] font-marcellus text-center">
                                    Sign Up to begin adventure
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-3 md:gap-5"
                                >
                                    <div className="flex gap-2 md:gap-3 lg:gap-5">
                                        <div class="relative">
                                            <input
                                                type="text"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                                                placeholder=" "
                                                name="firstname"
                                                id="firstname"
                                                onChange={getUserData}
                                                required
                                            />
                                            <label
                                                for="firstname"
                                                class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Firstname
                                            </label>
                                        </div>
                                        <div class="relative">
                                            <input
                                                type="text"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                                                placeholder=" "
                                                name="lastname"
                                                id="lastname"
                                                onChange={getUserData}
                                                required
                                            />
                                            <label
                                                for="lastname"
                                                class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Lastname
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 md:gap-3 lg:gap-5">
                                        <div class="relative">
                                            <input
                                                type="email"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                                                placeholder=" "
                                                id="email"
                                                name="email"
                                                onChange={getUserData}
                                                required
                                            />
                                            <label
                                                for="email"
                                                class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Email
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input type="date"
                                                className="rounded-lg ps-8 pe-6 py-2 focus:outline-none border-2 border-gray-300 appearance-none focus:ring-0 peer focus:border-[#1A2B48] text-gray-300 [&:not(:placeholder-shown)]:text-gray-800"/>

                                            <FaCalendarAlt className="absolute left-2 top-3 text-[#D6D7D8]" />
                                        </div>

                                    </div>
                                    <div className="flex gap-2 md:gap-3 lg:gap-5">
                                        <div class="relative">
                                            <input
                                                type="number"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                                                placeholder=" "
                                                id="phonenumber"
                                                name="phonenumber"
                                                onChange={getUserData}
                                                required
                                            />
                                            <label
                                                for="phonenumber"
                                                class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Phone number
                                            </label>
                                        </div>
                                        <div class="relative">
                                            <input
                                                type="password"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                                                placeholder=" "
                                                name="password"
                                                id="password"
                                                onChange={getUserData}
                                                required
                                            />
                                            <label
                                                for="password"
                                                class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Password
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <button className=" w-full">Sign Up</button>
                                    </div>
                                </form>

                                <div className="text-[14px] font-manrope text-center">
                                    already have an account{" "}
                                    <Link href="/login" className="text-[#1A2B48] font-bold">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default index;
