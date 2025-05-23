'use client';

import React from 'react';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import db from "@/jsonData/db.json";
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Link from "next/link";

const WishlistPage = () => {

  return (
    <ProtectedRoute>
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
                    className={`relative m-1 h-[250px] md:h-[300px] lg:h-[440px] ${index === 0 ? "w-[91%] lg:w-[98%]" : "w-[45%] lg:w-[24%]"}`}
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
                        <span className="text-[18px] md:text-[20px] lg:text-[24px] text-white">{items.title}</span>
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
    </ProtectedRoute>
  );
}

export default WishlistPage;
