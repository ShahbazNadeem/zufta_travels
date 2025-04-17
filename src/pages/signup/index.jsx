"use client";
import React, { useState } from "react";
import "@/globalcss";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import { useSelector } from 'react-redux';

const index = () => {
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    phonenumber: "",
    password: "",
  });

  const getUserData = (e) => {
    const { name, value, type, checked } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://67ffac3db72e9cfaf7257b92.mockapi.io/signup", users);
      console.log("Signup successful:", res.data);

      setUsers({
        firstname: "",
        lastname: "",
        email: "",
        date: "",
        phonenumber: "",
        password: "",
      });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  const { user } = useSelector(state => state.auth);
  if (user) {
    return (
      <div className='flex flex-col justify-center items-center h-screen w-full'>
        <h2>Your are already loged in</h2>
        <p>if you want to create new account ask admin or logout first</p>
      </div>
    )
  }
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
                        value={users.firstname}
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
                        value={users.lastname}
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
                        value={users.email}
                      />
                      <label
                        for="email"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        onChange={getUserData}
                        className="block ps-2.5 pe-[63px] py-3 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48] [&:not(:placeholder-shown)]:text-gray-800"
                        value={users.date}
                      />
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
                        value={users.phonenumber}
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
                        value={users.password}
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
