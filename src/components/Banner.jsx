import React from 'react'
import './components.css';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";


const Banner = ({ title, link }) => {
  return (
    <>
      <div className="max-w-[1600] mx-auto bg-[url('/images/bannerimg1.jpeg')] bg-center bg-no-repeat bg-cover ">
        <div className="flex flex-col items-center pt-28 pb-18 sm:py-28 lg:py-38 xl:py-56">
          <h1 className='text-white'>{title}</h1>
          <div className="mt-5 rounded-[33px] px-[20px] py-[10px] gap-[20px] bg-white/70 backdrop-blur-[16px] flex justify-between items-center">
            <Link href='/'>Home</Link>
            <FaChevronRight size={12}/>
            {link}
          </div>

        </div>
      </div>
    </>
  )
}

export default Banner