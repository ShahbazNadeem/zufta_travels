"use client";
import React, { useState } from "react";
import Layout from '@/components/layout/Layout';
import "./index.css"
import Video from "@/components/Video";
import Image from "next/image";
import { homePartners, homeTourPickup } from '../jsonData/Data'
import apostofy from '@/images/home/apostofy.png'
import img from '@/images/home/img.png'

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const content = [
    "This is content for Tab 1.",
    "This is content for Tab 2.",
    "This is content for Tab 3.",
  ];

  return (
    <Layout>
      {/* <section>
        <div className="wrapper-H1 py-20 relative max-w-[1440px] mx-auto">

          <div className="absolute inset-0 -z-10 w-full h-full">
            <Video src="/images/Candy.mp4" />
          </div>
          <div className="container">

            <div className="flex flex-row relative z-10 pt-10">
              <div className="basis-1/2 border flex flex-col gap-20 py-20">
                <span className="mainHead">Hero Heading Should Appear After A While</span>
                <span>Explore More</span>
              </div>
              <div className="basis-1/2 border px-[70px]">
                <div className="shadow-[0px_10px_20px_0px_#0000000D] backdrop-blur-[16px] w-auto h-auto rounded-[16px] border border-gray-300 p-[29px_28px]">
                  <div className="w-full max-w-md mx-auto">

                    <div className="flex border-b border-gray-300">
                      {tabs.map((tab, index) => (
                        <button
                          key={index}
                          className={`flex-1 py-2 text-center font-semibold ${activeTab === index
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500 hover:text-blue-500"
                            }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 text-gray-700">{content[activeTab]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section> */}

      <section>
        <div className="wrapper-H2 bg-white py-20">
          <div className="container">
            <div className="flex flex-col items-center gap-12 px-5 sm:px-0">
              <span className="font-marcellus text-[24px]">Trusted by beloved partner and customer</span>
              <div className="flex justify-evenly flex-wrap w-full gap-5">
                {homePartners.map((partner) => {
                  return (
                    <figure key={partner.id}>
                      <Image
                        src={partner.image}
                        alt={`Partner ${partner.id}`}
                        className="w-full h-full object-contain "
                      />
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="wrapper-H3 bg-">
          <div className="container">
            <div className="flex flex-col">
              <h1 className="text-center">Tours Handpicked for you</h1>
              <div>
                <div className="flex flex-wrap ">
                  {homeTourPickup.map((items) => {
                    return (
                      <div className="basis-1/4 pt-40 px-18 relative">
                        <div className="absolute inset-0 -z-10 w-[98%] h-[90%]">
                          <Image src={items.image} />
                        </div>
                        <div className="border absolute inset-0 -z-10 w-full h-full flex items-end px-6">
                          {items.id}
                          {items.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="wrapper bg-[#F0F0E5] max-w-[1440px] mx-auto py-12 md:py-28">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 px-5 sm:px-0">
              <div className="md:basis-1/2 flex flex-col gap-8 md:gap-26">
                <div className="flex flex-col gap-4 md:gap-8">
                  <figure className="w-[50px] md:w-[100px]"><Image src={apostofy} alt="img" className="w-full h-full" /></figure>
                  <span className="text-[16px]/6 md:text-[20px]/6 font-marcellus textColor">
                    Exploring new destinations can be one of life's greatest joys. From the bustling streets of Tokyo to the serene beaches of Bali, travel opens up a world of experiences. Whether you're savoring local cuisines, immersing yourself in different cultures, or simply enjoying breathtaking landscapes, each journey adds a unique chapter to your story. So pack your bags, grab your passport, and let the adventure begin!
                  </span>
                </div>
                <h3>- A local from Azad Kashmir.</h3>
              </div>

              <div className="md:basis-1/2 flex justify-center items-center ">
                <figure className="w-full lg:w-[80%]"><Image src={img} alt="img" className="w-full h-full" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
