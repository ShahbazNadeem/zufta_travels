"use client";

import React from "react";
import "@/globalcss";
import Layout from '@/components/layout/Layout';
import "./index.css"
// import Candy from "./Candy.mp4"
import Video from 'next-video';
// import myVideo from '/videos/my-video.mp4';

const Index = () => {
// console.log('alww',videoBG2)

  return (
    <Layout className="container bg-amber-300">
      <section>
        <div className="wrapper-H1">
          {/* <Image
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              src={zuftalogo} /> */}
          <div className="container relative">
            {/* Background Video */}
            {/* <Video
              className="absolute top-0 left-0 w-full h-full object-cover -z-10 border"
              src="/public/video/Candy.mp4"
              autoPlay
              muted
              loop
           /> */}
             {/* <Video src={myVideo} /> */}


            <div className="flex flex-row relative z-10">
              <div className="basis-1/2 border flex flex-col gap-20 py-20">
                <span className="mainHead">Hero Heading Should Appear After A While</span>
                <span>Explore More</span>
              </div>
              <div className="basis-1/2 border px-[70px]">
                <div className="shadow-[0px_10px_20px_0px_#0000000D] backdrop-blur-[16px] w-auto h-auto rounded-[16px] border border-gray-300 p-[29px_28px]">
                  <form>jj</form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Index;
