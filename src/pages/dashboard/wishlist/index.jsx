'use client';

import React, { useEffect } from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
// import { premiumTourPickup } from '@/jsonData/Data'
import db from "@/jsonData/db.json"
// import TourCards from '@/components/TourCards';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const index = () => {
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    // if (!user) router.push('/login');
  }, [user]);

  if (!user) {
    return (
      <div className="h-screen flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <Link href='/login' className="text-xl font-bold text-blue-600">go to login page</Link>
        <Link href='/' className="text-xl font-bold text-blue-600">go to Home</Link>
      </div>
    );
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="container">
          <DashboardTopBar />
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center w-full">
              {db.wishlist.map((items, index) => (
                <Link
                  href={`/${items.link}`}
                  className={`relative m-1 h-[250px] md:h-[300px] lg:h-[440px] ${index === 0 ? "w-[91%] lg:w-[98%]" : "w-[45%] lg:w-[24%]"
                    }`}
                  key={index}
                >
                  <div className="absolute inset-0 -z-10">
                    <figure className='h-[100%]'>
                      <Image
                        src={items.image.src}
                        fill
                        className="object-cover w-full h-auto"
                        alt={items.title}
                      />

                    </figure>
                  </div>
                  <div className="forShadow inset-0 -z-10 flex flex-col justify-between h-full px-3 pb-3">
                    <figure
                      className="bg-gray-200 rounded-full p-2 self-end hover:bg-gray-300 transition duration-300 ease-in-out"
                      onClick={() => toggleLike(index, items)}
                    >
                      <FaHeart color='red' />
                    </figure>

                    <div>
                      <span className="text-[18px] md:text-[20px] lg:text-[24px] text-white">
                        {items.title}
                      </span>
                      <div className="flex flex-wrap gap-1 md:gap-2 text-white text-[13px] md:text-[16px] w-full">
                        <span>{items.duration}</span>
                        <span>{items.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index