"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import "./index.css";
import Video from "@/components/Video";
import Image from "next/image";
import { homePartners, homeTourPickup, sliderData1 } from "../jsonData/Data";
import apostofy from "@/images/home/apostofy.png";
import img from "@/images/home/img.png";
import tourist from "@/images/home/tourist.png";
import Frame9 from "@/images/home/Frame9.png";
import hunza from "@/images/hunza.jpeg";
import arrow from "@/images/arrow.png";
import Slider from "@/components/swippers/Slider";
import NewsAndTips from "@/components/NewsAndTips";
import CardsSwipper from "@/components/swippers/CardsSwipper";
import Head from "next/head";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
const Index = () => {
  const itemRefs = useRef([]);
  const [inViewStates, setInViewStates] = useState([]);

  useEffect(() => {
    setInViewStates(
      itemRefs.current.map((ref) => {
        if (!ref) return false;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInViewStates((prev) => {
                const newState = [...prev];
                newState[itemRefs.current.indexOf(ref)] = true;
                return newState;
              });
              observer.disconnect();
            }
          },
          { rootMargin: "-50px" }
        );
        observer.observe(ref);
        return false;
      })
    );
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tours", "Hotels", "TravelerPayout Flight"];
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");
  const [origin, setOrigin] = useState("");
  const [depart, setDepart] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerClass, setPassengerClass] = useState("");
  const handleSearch = async () => {
    let payload = {};

    if (activeTab === 0) {
      // Tours
      payload = {
        type: "tour",
        location,
        fromDate,
        toDate,
      };
    } else if (activeTab === 1) {
      // Hotels
      payload = {
        type: "hotel",
        location,
        checkIn,
        checkOut,
        guest,
      };
    } else if (activeTab === 2) {
      // Flights
      payload = {
        type: "flight",
        origin,
        depart,
        returnDate,
        passengerClass,
      };
    }

    try {
      const response = await axios.post(
        "https://67ffac3db72e9cfaf7257b92.mockapi.io/searchform",
        {
          payload,
        }
      );
      console.log("Search results:", response);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <section>
        <div className="wrapper-H1 py-10 md:py-20 relative max-w-[1920px] mx-auto px-0 md:px-5">
          <div className="absolute inset-0 -z-10 w-full h-full">
            <Video src="/images/daily.mp4" />
          </div>

          <div className="container max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row md:items-center gap-5 md:gap-0 relative z-10 pt-16 md:py-26 lg:py-36 mx-5 sm:mx-0">
              <div className="md:basis-1/2 flex items-center md:items-start flex-col gap-5 md:gap-10 lg:gap-12">
                <h1 className="mainHead text-center md:text-left text-white">
                  Hero Heading Should Appear After A While
                </h1>
                <span className="text-white flex items-center gap-3">
                  Explore More{" "}
                  <figure>
                    <Image src={arrow} />
                  </figure>
                </span>
              </div>

              <div className="md:basis-1/2 sm:px-[80px] md:px-[70] lg:px-[10px] xl:px-[70px] text-[14px] max-w-[700px]">
                <div className="shadow-[0px_10px_20px_0px_#0000000D] backdrop-blur-[16px] w-auto h-auto rounded-[16px] border border-gray-300 p-[10px_10px] lg:p-[18px_18px] xl:p-[29px_28px]">
                  <div className="w-full mx-auto ">
                    <div className="flex flex-wrap justify-start gap-3">
                      {tabs.map((tab, index) => (
                        <span
                          key={index}
                          className={`px-5 py-2 text-center rounded-2xl cursor-pointer ${
                            activeTab === index
                              ? "bg-[#1a2b48] text-white"
                              : "text-gray-500"
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>

                    <div className="p-5 mt-5 bg-white rounded-xl">
                      {/* Tours Tab */}
                      {activeTab === 0 && (
                        <div className="flex flex-col gap-3 md:gap-6">
                          <div className="flex justify-between flex-wrap gap-3 items-center">
                            <span className="basis-[48%]">
                              Location
                              <span className="flex justify-between items-center">
                                <IoLocationSharp
                                  size={30}
                                  className="text-[#D6D7D8]"
                                />
                                <select
                                  value={location}
                                  onChange={(e) => setLocation(e.target.value)}
                                  className="ps-1 pe-18 block w-full text-sm bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48]"
                                >
                                  <option value="Sharaan">Sharaan</option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                </select>
                                <FiChevronDown size={30} />
                              </span>
                            </span>
                            <div className="basis-[48%]">
                              From Date :
                              <div className="relative">
                                <input
                                  type="date"
                                  value={fromDate}
                                  onChange={(e) => setFromDate(e.target.value)}
                                  className="rounded-lg px-8 py-2 focus:outline-none"
                                />
                                <FaCalendarAlt className="absolute left-0 top-3 text-[#D6D7D8]" />
                              </div>
                            </div>
                          </div>

                          <div className="basis-[100%]">
                            To Date :
                            <div className="relative">
                              <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className="rounded-lg px-8 py-2 focus:outline-none"
                              />
                              <FaCalendarAlt className="absolute left-0 top-3 text-[#D6D7D8]" />
                            </div>
                          </div>

                          <div className="flex justify-between flex-wrap gap-3 items-center pe-4">
                            <span className="flex items-center gap-2">
                              <FaUserAlt />
                              need some help?
                            </span>
                              <button
                                className="flex items-center gap-2"
                                onClick={handleSearch}
                              >
                                <CiSearch size={24} />
                                search
                              </button>
                          </div>
                        </div>
                      )}

                      {/* Hotels Tab */}
                      {activeTab === 1 && (
                        <div className="flex flex-col gap-3 md:gap-6">
                          <div className="flex justify-between flex-wrap gap-3 items-center">
                            <span className="basis-[48%]">
                              Location
                              <span className="flex justify-between items-center">
                                <IoLocationSharp
                                  size={30}
                                  className="text-[#D6D7D8]"
                                />
                                <select
                                  value={location}
                                  onChange={(e) => setLocation(e.target.value)}
                                  className="ps-1 pe-18 block w-full text-sm bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48]"
                                >
                                  <option value="Sharaan">Sharaan</option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                </select>
                                <FiChevronDown size={30} />
                              </span>
                            </span>
                            <div className="basis-[48%]">
                              Check In
                              <div className="relative">
                                <input
                                  type="date"
                                  value={checkIn}
                                  onChange={(e) => setCheckIn(e.target.value)}
                                  className="rounded-lg px-8 py-2 focus:outline-none"
                                />
                                <FaCalendarAlt className="absolute left-0 top-3 text-[#D6D7D8]" />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between flex-wrap gap-3 items-center">
                            <div className="basis-[48%]">
                              Check Out
                              <div className="relative">
                                <input
                                  type="date"
                                  value={checkOut}
                                  onChange={(e) => setCheckOut(e.target.value)}
                                  className="rounded-lg px-8 py-2 focus:outline-none"
                                />
                                <FaCalendarAlt className="absolute left-0 top-3 text-[#D6D7D8]" />
                              </div>
                            </div>
                            <span className="basis-[48%]">
                              Guest (2)
                              <span className="flex justify-between items-center">
                                <FaUserAlt
                                  size={20}
                                  className="text-[#D6D7D8]"
                                />
                                <select
                                  value={guest}
                                  onChange={(e) => setGuest(e.target.value)}
                                  className="ps-1 pe-2 block w-full text-sm bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48]"
                                >
                                  <option value="2 adults, 2 children">
                                    2 adults, 2 children
                                  </option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                </select>
                                <FiChevronDown size={30} />
                              </span>
                            </span>
                          </div>

                          <div className="flex justify-between flex-wrap gap-3 items-center pe-4">
                            <span className="flex items-center gap-2">
                              <FaUserAlt />
                              need some help?
                            </span>
                            <button
                              className="flex items-center gap-2"
                              onClick={handleSearch}
                            >
                              <CiSearch size={24} />
                              search
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Flights Tab */}
                      {activeTab === 2 && (
                        <div className="flex flex-col gap-3 md:gap-6">
                          <div className="flex justify-between flex-wrap gap-3 items-center">
                            <span className="basis-[48%]">
                              Origin
                              <span className="flex justify-between items-center">
                                <IoLocationSharp
                                  size={30}
                                  className="text-[#D6D7D8]"
                                />
                                <select
                                  value={origin}
                                  onChange={(e) => setOrigin(e.target.value)}
                                  className="ps-1 pe-18 block w-full text-sm bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48]"
                                >
                                  <option value="Sharaan">Sharaan</option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                </select>
                                <FiChevronDown size={30} />
                              </span>
                            </span>
                            <div className="basis-[48%]">
                              Depart
                              <div className="relative">
                                <input
                                  type="date"
                                  value={depart}
                                  onChange={(e) => setDepart(e.target.value)}
                                  className="rounded-lg px-8 py-2 focus:outline-none"
                                />
                                <FaCalendarAlt className="absolute left-0 top-3 text-[#D6D7D8]" />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between flex-wrap gap-3 items-center">
                            <div className="basis-[48%]">
                              Return
                              <div className="relative">
                                <input
                                  type="date"
                                  value={returnDate}
                                  onChange={(e) =>
                                    setReturnDate(e.target.value)
                                  }
                                  className="rounded-lg px-8 py-2 focus:outline-none"
                                />
                                <FaCalendarAlt className="absolute left-0 top-3 text-[#D6D7D8]" />
                              </div>
                            </div>
                            <span className="basis-[48%]">
                              Passenger/Class
                              <span className="flex justify-between items-center">
                                <FaUserAlt
                                  size={20}
                                  className="text-[#D6D7D8]"
                                />
                                <select
                                  value={passengerClass}
                                  onChange={(e) =>
                                    setPassengerClass(e.target.value)
                                  }
                                  className="ps-1 pe-2 block w-full text-sm bg-transparent rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48]"
                                >
                                  <option value="1 passenger, economy">
                                    1 passenger, economy
                                  </option>
                                  <option value="Option 1">Option 1</option>
                                  <option value="Option 2">Option 2</option>
                                  <option value="Option 3">Option 3</option>
                                </select>
                                <FiChevronDown size={30} />
                              </span>
                            </span>
                          </div>

                          <div className="flex justify-between flex-wrap gap-3 items-center pe-4">
                            <span className="flex items-center gap-2">
                              <FaUserAlt />
                              need some help?
                            </span>
                            <button
                              className="flex items-center gap-2"
                              onClick={handleSearch}
                            >
                              <CiSearch size={24} />
                              search
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H2 bg-white py-10 md:py-20 max-w-[1440px] mx-auto">
          <div className="container">
            <div className="flex flex-col items-center gap-12 px-5 sm:px-0">
              <h2 className="text-center">
                Trusted by beloved partner and customer
              </h2>
              <div className="flex justify-evenly flex-wrap w-full gap-3 md:gap-5">
                {homePartners.map((partner) => {
                  return (
                    <figure key={partner.id} className="w-[170px]">
                      <Image
                        src={partner.image}
                        alt={`Partner ${partner.id}`}
                        className="w-full h-full object-contain"
                      />
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H3 py-10 md:py-20 mx-auto max-w-[1440px] bg-white">
          <div className="container">
            <div className="flex flex-col px-5">
              <h2 className="text-center">Tours Handpicked for you</h2>
              <div className="flex flex-wrap justify-center mt-20 md:mt-32">
                {homeTourPickup.map((items, index) => {
                  return (
                    <motion.div
                      ref={(el) => (itemRefs.current[index] = el)}
                      key={items.id}
                      className="w-[45%] lg:w-[24%] relative m-1 h-[250px] md:h-[300px] lg:h-[440px]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: inViewStates[index] ? 1 : 0,
                        y: inViewStates[index]
                          ? index % 2 === 0
                            ? -60
                            : -10
                          : 20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 -z-10">
                        <Image
                          src={items.image}
                          className="w-full h-full object-cover"
                          alt={items.title}
                        />
                      </div>
                      <div className="forShadow relative inset-0 -z-10 flex flex-col justify-end h-full px-3 pb-3">
                        <span className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-marcellus">
                          {items.title}
                        </span>
                        <div className="flex flex-wrap gap-1 md:gap-2 text-white text-[13px] md:text-[16px] w-full">
                          <span>{items.duration}</span>
                          <span>From Rs{items.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H4 bg-[#F0F0E5] max-w-[1440px] mx-auto py-12 md:py-28">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 px-5">
              <div className="md:basis-1/2 flex flex-col gap-8 md:gap-26">
                <div className="flex flex-col gap-4 md:gap-8">
                  <figure className="w-[50px] md:w-[100px]">
                    <Image src={apostofy} alt="img" className="w-full h-full" />
                  </figure>
                  <span className="text-[16px]/6 md:text-[20px]/6 font-marcellus textColor">
                    Exploring new destinations can be one of life&apos;s
                    greatest joys. From the bustling streets of Tokyo to the
                    serene beaches of Bali, travel opens up a world of
                    experiences. Whether you&apos;re savoring local cuisines,
                    immersing yourself in different cultures, or simply enjoying
                    breathtaking landscapes, each journey adds a unique chapter
                    to your story. So pack your bags, grab your passport, and
                    let the adventure begin!
                  </span>
                </div>
                <span className="text-[18px] md:text-[20px] lg:text-[24px] font-marcellus">
                  - A local from Azad Kashmir.
                </span>
              </div>

              <div className="md:basis-1/2 flex justify-center items-center ">
                <figure className="w-full lg:w-[80%]">
                  <Image src={img} alt="img" className="w-full h-full" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H5 pt-10 md:pt-20 bg-white max-w-[1440px] mx-auto px-5 ">
          <div className="container">
            <div className="flex flex-col gap-10 ">
              <h2 className="text-center">
                Exploring the Wonders of Global Travel: A Journey Through
                Cultures and Landscapes
              </h2>

              <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className=" group overflow-hidden ">
                  <figure className="transition-transform duration-900 ease-in-out group-hover:scale-120">
                    <Image src={tourist} alt="tourist" />
                  </figure>
                </div>

                <div className="group overflow-hidden ">
                  <figure className="transition-transform duration-900 ease-in-out group-hover:scale-120">
                    <Image src={Frame9} alt="Frame9" />
                  </figure>
                </div>
              </div>

              <div className="text-center font-marcellus text-[16px]/5 md:text-[20px]/6 xl:max-w-[90%] mx-auto">
                Exploring new destinations can be one of life&apos;s greatest
                joys. From the bustling streets of Tokyo to the serene beaches
                of Bali, travel opens up a world of experiences. Whether
                you&apos;re savoring local cuisines, immersing yourself in
                different cultures, or simply enjoying breathtaking landscapes,
                each journey adds a unique chapter to your story. So pack your
                bags, grab your passport, and let the adventure begin!
              </div>

              <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className="group overflow-hidden">
                  <figure className="transition-transform duration-900 ease-in-out group-hover:scale-120">
                    <Image src={Frame9} alt="Frame9" />
                  </figure>
                </div>
                <div className="group overflow-hidden">
                  <figure className="transition-transform duration-900 ease-in-out group-hover:scale-120">
                    <Image src={tourist} alt="tourist" />
                  </figure>
                </div>
              </div>

              <div className="text-center font-marcellus text-[16px]/5 md:text-[20px]/6 xl:max-w-[90%] mx-auto">
                Exploring new destinations can be one of life&apos;s greatest
                joys. From the bustling streets of Tokyo to the serene beaches
                of Bali, travel opens up a world of experiences. Whether
                you&apos;re savoring local cuisines, immersing yourself in
                different cultures, or simply enjoying breathtaking landscapes,
                each journey adds a unique chapter to your story. So pack your
                bags, grab your passport, and let the adventure begin!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H6 pt-10 md:pt-20 bg-white max-w-[1440px] mx-auto">
          <div className="container ">
            <h2 className="text-center">Budget Friendly Adventures!</h2>
            <div className="flex justify-center mt-10 md:mt-16">
              <CardsSwipper />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H7 pt-10 md:pt-20 bg-white max-w-[1920px] mx-auto">
          <div class="designYurTrip">
            {/* <div className="container"> */}
            <div class="content py-24 md:py-48 lg:py-72">
              <div className="flex flex-col gap-4 md:gap-8 lg:gap-18">
                <h2 className="text-center">
                  Let us design your trip of a lifetime
                </h2>
                <span className="flex justify-center items-center gap-5 cursor-pointer">
                  Plan My Trip <Image src={arrow} alt="arrow" />
                </span>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H8 pt-10 md:pt-20 bg-white max-w-[1440px] mx-auto">
          <div className="container">
            <h2 className="text-center pb-12 textColor2">
              What Our Clients Say
            </h2>
            <Slider data={sliderData1} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-H9 pt-20 bg-white max-w-[1440px] mx-auto px-5">
          <div className="container">
            <NewsAndTips />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
