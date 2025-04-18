import Image from "next/image";
import React from "react";
import footerImg from "@/images/footer/footerImg.png";
import pato from "@/images/footer/pato.png";
import chamber from "@/images/footer/chamber.png";
import eman from "@/images/footer/eman.png";
import pakProp from "@/images/footer/pakProp.png";
import secp from "@/images/footer/secp.png";
import zuftalogo from "@/images/zufta-logo.png";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater, MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="secondary-backColor max-w-[2000] mx-auto">
      <div className='mx-auto sm:px-10 px-2 pt-16 flex flex-col gap-10 ps-4 sm:ps-0'>
        <div className="container ">
          <div className="flex md:flex-row flex-col justify-between gap-5 border-b-2 border-color pb-5 px-5">
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col textColor gap-5 max-w-[370px]">
                <Link href="/">
                  <figure>
                    <Image src={zuftalogo} />
                  </figure>
                </Link>
                <span className="flex gap-2 items-center">
                  {" "}
                  <figure className="w-[20px] md:w-[35px] lg:w-[25px] xl:w-[20px] h-auto">
                    <FaLocationDot className="text-[#575756] w-full h-auto" />
                  </figure>
                  <span className='font-manrope'>4517 Washington Ave. Manchester, Kentucky 39495</span>
                </span>
                <span className="flex gap-2 items-center">
                  <figure className="w-[20px] md:w-[23px] lg:w-[19px] xl:w-[20px] h-auto">
                    <MdWatchLater className="text-[#575756]  w-full h-auto" />
                  </figure>
                  <span className='font-manrope'>Hours: 8:00 - 17:00, Mon - Sat</span>
                </span>
                <span className="flex gap-2 items-center">
                  <IoMdMail className="text-[#575756]" />
                  <span className='font-manrope'>support@travila.com</span>
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[18px] font-bold">Follow us</span>
                <ul className="flex gap-2">
                  <li>
                    <Link
                      href="#"
                      className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center"
                    >
                      <TbBrandInstagramFilled size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center"
                    >
                      <FaFacebookSquare size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center"
                    >
                      <FaTwitter size={24} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[43px] h-[43px] top-[305px] left-[12px] rounded-full border border-gray-300 bg-[#E4E6E8] flex items-center justify-center"
                    >
                      <FaYoutube size={24} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                <span className="text-[18px] font-bold">Company</span>
                <div className="textColor flex flex-wrap xl:gap-20 md:gap-10 gap-5">
                  <ul className="flex flex-col gap-5">
                    <li>
                      <Link href="/aboutus">
                        <span className='font-manrope'>About us</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/by-air">
                        <span className='font-manrope'>By Air</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <span className='font-manrope'>Latest News</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                    <li>
                      <Link href="/contactus">
                        <span className='font-manrope'>Contact us</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/planmytrip">
                        <span className='font-manrope'>Plan My Trip</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/alltours">
                        <span className='font-manrope'>All Tours</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <span className="text-[18px] font-bold">We are registered</span>
                <p className="text-[#8E8E8E] text-[14px]">
                  Exploring new destinations can be one of life's greatest joys.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between ">
              <div className="flex flex-col gap-2 md:gap-5 lg:w-[370px] md:w-[250px]">
                <span className="flex flex-col gap-3 mt-6">
                  <span className="font-bold text-[18px] flex gap-2 items-center">
                    <MdLocalPhone />
                    Need help? Call us
                  </span>
                  <span className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#1A2B48]">1-800-222-8888</span>
                </span>

                <span className="text-[18px] font-bold">Subscribe For Newsletter</span>
                <div className="relative w-full max-w-md mt-1">
                  <input
                    type="text"
                    placeholder="Enter email here"
                    className="w-full px-3 py-2 border border-color rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute top-1/2 right-0 -translate-y-1/2">
                    Subscribe
                  </button>
                </div>
                <span className="text-[12px] textColor">
                  No ads. No trails. No commitments
                </span>

              </div>
              <div className="flex flex-col gap-5 mt-6">
                <span className="text-[18px] font-bold">Payments</span>
                <ul className="flex gap-5">
                  <li>
                    <figure>
                      <Image src={pato} alt="img" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <Image src={chamber} alt="img" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <Image src={eman} alt="img" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <Image src={pakProp} alt="img" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <Image src={secp} alt="img" />
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920] mx-auto pt-9">
        <div className="flex sm:justify-between flex-col md:flex-row items-center gap-2 md:gap-0 container mx-auto sm:px-10 px-2">
          <span className="md:text-[14px] text-[12px] textColor">
            © 2024 Travila Inc. All rights reserved.
          </span>
          <ul className="flex gap-8 text-[12px] textColor mt- ">
            <li>
              <Link href="">Terms</Link>
            </li>
            <li>
              <Link href="">Privacy policy</Link>
            </li>
            <li>
              <Link href="">Legal Notice</Link>
            </li>
            <li>
              <Link href="">Accessibility</Link>
            </li>
          </ul>
        </div>
        <Image src={footerImg} />
      </div>
    </div>
  );
};

export default Footer;
