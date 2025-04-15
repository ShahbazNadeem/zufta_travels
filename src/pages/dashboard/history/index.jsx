import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import Image from "next/image";
import { dashboardhistory } from "@/jsonData/Data";
import naran from "@/images/naran.jpeg";
const index = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 px-3">
        <div className="container">
          <DashboardTopBar />
          <div className="history-content flex items-center gap-3 flex-wrap">
            {dashboardhistory.map((item) => (
              <div
                className=" basis-[100%] md:basis-[48%] h-[40vh] md:h-[46vh] lg:h-[47vh]  relative"
                key={item.id}
              >
                <figure
                  className="bg-cover bg-center bg-no-repeat w-full h-[100%] rounded-md overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%),url(${item.img.src})`,
                  }} 
                ></figure>

                <div className=" flex flex-col gap-2  md:gap-3 lg:gap-5 py-2 md:py-3 lg:py-3 justify-between absolute bottom-0 px-3">
                  <span className="text-[18px] md:text-[20px] lg:text-[24px] text-white px-4 font-marcellus">
                    {item.tourname}
                  </span>
                  <span className=" text-xs md:text-sm px-4 text-[#DBDBDB] lg:max-w-[80%] font-manrope">{item.content}</span>
                  <div className=" px-4 text-sm my-1 text-[#DBDBDB]">
                    <span className="font-marcellus">{item.time}</span>
                    <span className="px-1 font-marcellus">from {item.price}</span>
                  </div>
                </div>
                <span className="absolute top-4 right-4 text-xs md:text-sm font-marcellus bg-[#FFFFFFB2] rounded-full py-2 px-3 ">
                  {item.room}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
