import Image from 'next/image';
import React from 'react'
import { FaRegBell, FaUser } from "react-icons/fa";
import dashboardUserImg from "@/images/dashboard/dashboardUserImg.png"
import Link from 'next/link';
import { useSession } from "next-auth/react";

const DashboardTopBar = () => {
    const { data: session } = useSession();
    const date = new Date();
    const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return (
        <div className='py-5 md:py-10 flex justify-between items-start flex-wrap'>
            <div className='flex flex-col gap-5'>
                <h3>Welcome, {session.user.firstname}{" "}{session.user.lastname}</h3>
                <p>{formattedDate}</p>
            </div>
            <div className='flex items-center gap-5'>
                <Link href="/dashboard/setting" className='bg-[#FFFFFF] rounded-lg textColor p-3 cursor-pointer'>
                    <FaRegBell size={25} />
                </Link>
                <figure className='w-[50px] h-auto rounded-full overflow-hidden'>
                    {/* <FaUser size={25} /> */}
                    <Image src={dashboardUserImg} classname=' w-full h-auto' />
                </figure>
            </div>
        </div>
    )
}

export default DashboardTopBar