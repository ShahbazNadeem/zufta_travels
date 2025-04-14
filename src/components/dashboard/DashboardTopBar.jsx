import Image from 'next/image';
import React from 'react'
import { FaRegBell, FaUser } from "react-icons/fa";
import dashboardUserImg from "@/images/dashboard/dashboardUserImg.png"
import Link from 'next/link';

const DashboardTopBar = () => {
    return (
        <div className='py-5 md:py-10 flex justify-between items-start flex-wrap'>
            <div className='flex flex-col gap-5'>
                <h3>Welcome, Amanda</h3>
                <p>Tue, 07 June 2022</p>
            </div>
            <div className='flex gap-5'>
                <Link href="/dashboard/setting" className='bg-[#FFFFFF] rounded-lg textColor p-3 cursor-pointer'>
                    <FaRegBell size={25} />
                </Link>
                <div className='w-[50px] h-[50px]'>
                    <figure classname=''>
                        {/* <FaUser size={25} /> */}
                        <Image src={dashboardUserImg} classname='w-full h-auto rounded-lg' />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar