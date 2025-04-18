'use client';

import { usePathname } from 'next/navigation';
import { useState } from "react";
import logo from "@/images/zufta-logo.png";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import {
  FaHeart,
  FaClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoMdHeartEmpty, IoMdTime } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAdminFill, RiAdminLine } from "react-icons/ri";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice/AuthSlice";
import { useRouter } from 'next/router';

export default function Sidebar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = [
    { icon1: <MdDashboard />, icon2: <LuLayoutDashboard />, label: "Dashboard", link: "/dashboard" },
    { icon1: <FaHeart />, icon2: <IoMdHeartEmpty />, label: "Wishlist", link: "/dashboard/wishlist" },
    { icon1: <FaClock />, icon2: <IoMdTime />, label: "Booking History", link: "/dashboard/history" },
    { icon1: <FaCog />, icon2: <IoSettingsOutline />, label: "Settings", link: "/dashboard/setting" },
    { icon1: <RiAdminFill />, icon2: <RiAdminLine />, label: "admin", link: "/dashboard/admin" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <div className="flex flex-col justify-between pt-12 bg-white transition-all duration-300 group hover:w-48 w-18 md:w-20 overflow-hidden">

      {/* Logo */}
      <div className="flex flex-col items-center py-4">
        <Link href="/">
          <figure className="w-[60px] h-auto">
            <Image src={logo} alt="Logo" className="w-full h-auto" />
          </figure>
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col ps-2 pt-8 gap-6">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.link;

          return (
            <Link href={item.link} key={idx}>
              <div className={`flex items-center space-x-4 px-4 py-2 cursor-pointer text-gray-600 ${isActive ? 'textColor2' : ''}`}>
                <span className="text-[20px] md:text-[24px]">
                  {isActive ? item.icon1 : item.icon2}
                </span>
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 text-gray-600 flex items-center space-x-4 cursor-pointer hover:font-bold">
        <FaSignOutAlt className="text-xl" />
        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 whitespace-nowrap" onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
}
