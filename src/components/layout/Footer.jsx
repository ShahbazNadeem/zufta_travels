import Image from 'next/image'
import React from 'react'
import footerImg from "@/images/footer/footerImg.png"
import pato from "@/images/footer/pato.png"
import chamber from "@/images/footer/chamber.png"
import eman from "@/images/footer/eman.png"
import pakProp from "@/images/footer/pakProp.png"
import secp from "@/images/footer/secp.png"
import zuftalogo from "@/images/zufta-logo.png"
import "./layout.css"
import Link from 'next/link'
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater, MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='secondary-backColor max-w-[2000] mx-auto'>
      <div className="container mx-auto sm:px-10 px-2 pt-16 flex flex-col gap-10 ">
        <div className="flex md:flex-row flex-col justify-between gap-5 border-b-2 border-color pb-5">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col textColor gap-5 max-w-[370px]">
              <Image src={zuftalogo} />
              <span className='flex gap-2 items-center'><FaLocationDot className='text-[#575756]' /><h5>4517 Washington Ave. Manchester, Kentucky 39495</h5></span>
              <span className='flex gap-2 items-center'><MdWatchLater className='text-[#575756]' /><h5>Hours: 8:00 - 17:00, Mon - Sat</h5></span>
              <span className='flex gap-2 items-center'><IoMdMail className='text-[#575756]' /><h5>support@travila.com</h5></span>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className='font-bold'>Follow us</h4>
              <ul className='flex gap-2'>
                <li>
                  <Link href="#" className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center">
                    <TbBrandInstagramFilled size={24} />
                  </Link>
                </li>
                <li><Link href="#" className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center">
                  <FaFacebookSquare size={24} />
                </Link>
                </li>
                <li><Link href="#" className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center">
                  <FaTwitter size={24} />
                </Link>
                </li>
                <li><Link href="#" className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center">
                  <FaYoutube size={24} />
                </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h4 className='font-bold'>Company</h4>
              <div className="textColor flex flex-wrap xl:gap-20 gap-5">
                <ul className='flex flex-col gap-5'>
                  <li><Link href="#"><h5>About  us</h5></Link></li>
                  <li><Link href="#"><h5>By Air</h5></Link></li>
                  <li><Link href="#"><h5>Latest News</h5></Link></li>
                </ul>
                <ul className='flex flex-col gap-5'>
                  <li><Link href="#"><h5>Contact us</h5></Link></li>
                  <li><Link href="#"><h5>Plan My Trip</h5></Link></li>
                  <li><Link href="#"><h5>Travel plane</h5></Link></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <h4 className='font-bold'>We are registered</h4>
              <p className='text-[#8E8E8E]'>Exploring new destinations can be one of life's greatest joys.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-2 md:gap-5 w-[370px]">
              <h4 className='font-bold'>Subscribe For Newsletter</h4>
              <div className="relative w-full max-w-md mt-1">
                <input
                  type="text"
                  placeholder="Enter email here"
                  className="w-full p-3  border border-color rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute top-1/2 right-0 -translate-y-1/2 text-white px-5 py-3 rounded-full">
                  Subscribe
                </button>
              </div>
              <span className='text-[12px] textColor'>No ads. No trails. No commitments</span>
              <span className='flex flex-col gap-3'>
                <h4 className='font-bold flex gap-2 items-center'><MdLocalPhone />Need help? Call us</h4>
                <h3 className='font-bold text-[#1A2B48]'>1-800-222-8888</h3>
              </span>

            </div>
            <div className="flex flex-col gap-5">
              <h4 className='font-bold'>Payments</h4>
              <ul className='flex gap-5'>
                <li><Image src={pato} /></li>
                <li><Image src={chamber} /></li>
                <li><Image src={eman} /></li>
                <li><Image src={pakProp} /></li>
                <li><Image src={secp} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600] mx-auto pt-9">
        <div className="flex sm:justify-between flex-col md:flex-row items-center gap-2 md:gap-0 container mx-auto sm:px-10 px-2">
          <span className='md:text-[14px] text-[12px] textColor'>© 2024 Travila Inc. All rights reserved.</span>
          <ul className='flex gap-8 text-[12px] textColor mt- '>
            <li><Link href="">Terms</Link></li>
            <li><Link href="">Privacy policy</Link></li>
            <li><Link href="">Legal Notice</Link></li>
            <li><Link href="">Accessibility</Link></li>
          </ul>
        </div>
        <Image src={footerImg} />
      </div> 

    </div>
  )
}

export default Footer