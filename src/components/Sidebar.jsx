// components/Sidebar.tsx
import { useState } from "react";
import logo from "@/images/zufta-logo.png"; 
import Link from "next/link";
import {
  FaTachometerAlt,
  FaHeart,
  FaClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", link: "/dashboard" },
    { icon: <FaHeart />, label: "Wishlist", link: "/dashboard/wishlist" },
    { icon: <FaClock />, label: "Booking History", link: "/dashboard/history" },
    { icon: <FaCog />, label: "Settings", link: "/dashboard/setting" },
  ];

  return (
    <div className="h-screen flex flex-col justify-between bg-white border-r transition-all duration-300 group hover:w-48 w-16 overflow-hidden">
      
      {/* Logo */}
      <div className="flex flex-col items-center py-4">
        <figure className="w-[60px] h-auto">
          <Image src={logo} alt="Logo" className="w-full h-auto" />
        </figure>
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-6 mt-8">
        {menuItems.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <div className="flex items-center space-x-4 px-4 py-2 cursor-pointer text-gray-600 hover:text-blue-600">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="px-4 py-4 text-gray-600 flex items-center space-x-4 cursor-pointer hover:text-red-600">
        <FaSignOutAlt className="text-xl" />
        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 whitespace-nowrap">
          Logout
        </span>
      </div>
    </div>
  );
}
