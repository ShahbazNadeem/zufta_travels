"use client";
import React, { useEffect, useState } from "react";
import zuftalogo from "@/images/zufta-nav-logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center flex-row-reverse md:flex-row bg-[#0000000D] backdrop-blur-md rounded-full px-5 ">
          <span onClick={() => setIsOpen(true)} className='lg:hidden bg-transparent'>
            <GiHamburgerMenu size={24} />
          </span>
          <figure>
            <Image src={zuftalogo} alt="Zufta Logo" />
          </figure>
          <ul className="lg:flex justify-between xl:gap-10 gap-5 font-marcellus lg:text-[14px] xl:text-[16px] hidden">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/premiumgrouptours">Premium Group Tours</Link></li>
            <li><Link href="/privatetiurs">Private Tours</Link></li>
            <li><Link href="/byair">By Air</Link></li>
            <li><Link href="/psy">Pakistan Sikh Yatra</Link></li>
            <li><Link href="/contactus">Contact</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
          <span>
            <button className="hidden sm:block">
              Plan My Trip
            </button>
          </span>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)} // Close when clicking outside
        ></div>
      )}

      {/* Off-Canvas Drawer */}
      <div
        className={`bg-[#F8F8F8] fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto w-80 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center">
          <figure>
            <Image src={zuftalogo} alt="Zufta Logo" />
          </figure>

          {/* Close Button */}
          <span
            onClick={() => setIsOpen(false)}
            className=" text-gray-400 "
          >
            <IoClose size={28} />
          </span>
        </div>

        <div className="py-10 px-2 flex flex-col gap-10">

          <ul className="flex flex-col gap-5 font-marcellus text-[16] ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/premiumgrouptours">Premium Group Tours</Link></li>
            <li><Link href="/privatetiurs">Private Tours</Link></li>
            <li><Link href="/byair">By Air</Link></li>
            <li><Link href="/psy">Pakistan Sikh Yatra</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>

          <span>
            <button className="text-white rounded-full px-5 py-2 transition-all duration-300 block sm:hidden">
              Plan My Trip
            </button>
          </span>
        </div>
      </div>

    </>
  );
};

export default Navbar;
