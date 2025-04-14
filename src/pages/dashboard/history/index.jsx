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
      <div className="flex-1 ps-6">
        <div className="container">
          <DashboardTopBar />
          <div className="history-content flex items-center gap-5 flex-wrap">
            {dashboardhistory.map((item) => (
              <div
                className=" basis-[100%] md:basis-[48%] h-[40vh] md:h-[50vh] lg:h-[70vh]  relative"
                key={item.id}
              >
                <figure
                  className="bg-cover bg-center bg-no-repeat w-full h-[100%] rounded-md overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%),url(${item.img.src})`,
                  }} // ✅ Use .src if imported
                ></figure>

                <div className="mt-2 flex flex-col justify-between absolute bottom-0">
                  <span className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-white px-4">
                    {item.tourname}
                  </span>
                  <p className="text-xs px-4" style={{color: '#DBDBDB'}}>{item.content}</p>
                  <div className=" px-4 text-sm my-1 text-[#DBDBDB]">
                    <span>{item.time}</span>
                    <span className="px-1">from {item.price}</span>
                  </div>
                </div>
                <span className="absolute top-2 right-2 bg-[#FFFFFFB2] rounded-full py-2 px-3 ">
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
