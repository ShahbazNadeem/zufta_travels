import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import './components.css'

const NewsAndTips = () => {
    return (
        <div className='px-2'>
            <div className="flex flex-col sm:flex-row justify-between gap-5">
                <div className="flex flex-col gap-3 sm:gap-8 text-center sm:text-left">
                    <h2 className=''>News, Tips & Guides</h2>
                    <p>Favorite destinations based on customer reviews</p>
                </div>
                <div className="flex items-start justify-center">
                    <button className='flex gap-2 items-center '>View More <FiArrowRight /></button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-16 px-5 sm:px-0">
                <div className="sm:basis-1/3 about_culture p-5 flex flex-col justify-between gap-48 lg:gap-64 xl:gap-90">
                    <div>
                        <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] font-manrope'>
                            Culture
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                        <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                        <span className='flex flex-wrap gap-3 justify-between text-[13px] md:text-[14px] lg:text-[16px]'>
                            <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                            <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                            <span className='cursor-pointer rounded-[50px] border border-white text-white px-3 py-2'>Keep Reading</span>
                        </span>
                    </div>
                </div>
                <div className="sm:basis-1/3 about_travel p-5 flex flex-col justify-between gap-48 lg:gap-64 xl:gap-90">
                    <div>
                        <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] font-manrope'>
                            Culture
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                        <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                        <span className='flex flex-wrap gap-3 justify-between text-[13px] md:text-[14px] lg:text-[16px]'>
                            <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                            <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                            <span className='cursor-pointer rounded-[50px] border border-white text-white px-3 py-2'>Keep Reading</span>
                        </span>
                    </div>
                </div>
                <div className="sm:basis-1/3 about_discover p-5 flex flex-col justify-between gap-48 lg:gap-64 xl:gap-90">
                    <div>
                        <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] font-manrope'>
                            Culture
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                        <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                        <span className='flex flex-wrap gap-3 justify-between text-[13px] md:text-[14px] lg:text-[16px]'>
                            <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                            <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                            <span className='cursor-pointer rounded-[50px] border border-white text-white px-3 py-2'>Keep Reading</span>
                        </span>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default NewsAndTips