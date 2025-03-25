"use client";

import React from "react";
import Layout from '@/components/layout/Layout';
import "./index.css"
import Video from "@/components/Video";

const Index = () => {

  return (
    <Layout className="container bg-amber-300">
      <section>
        <div className="wrapper-H1">

          <div className="container relative">
            <Video src='/images/Candy.mp4'/>
            



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
