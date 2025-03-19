import React from 'react';
import zuftalogo from "@/images/zufta-nav-logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center flex-row-reverse lg:flex-row bg-[#0000000D] backdrop-blur-md rounded-full px-5 shadow-md">
        <button className='lg:hidden bg-transparent'><GiHamburgerMenu size={24} /></button>
        <figure>
          <Image src={zuftalogo} alt="Zufta Logo" />
        </figure>
        <ul className="lg:flex justify-between gap-10 font-marcellus text-[16] hidden">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Premium Group Tours</Link></li>
          <li><Link href="#">Private Tours</Link></li>
          <li><Link href="#">By Air</Link></li>
          <li><Link href="#">Pakistan Sikh Yatra</Link></li>
          <li><Link href="#">Contact</Link></li>
          <li><Link href="#">Login</Link></li>
        </ul>
        <span>
          <button className="bg-emerald-500 text-white rounded-full px-5 py-2 hover:bg-emerald-600 transition-all duration-300 hidden sm:block">
            Plan My Trip
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
