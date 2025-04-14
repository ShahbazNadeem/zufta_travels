'use client';

import { useState } from "react";
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Banner from '@/components/Banner'
import NewsAndTips from '@/components/NewsAndTips'
import { premiumTourPickup } from '@/jsonData/Data'
import TourCards from "@/components/TourCards";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Premiun Group Tours</title>
      </Head>

      <section>
        <div className="wrapper-BA1">
          <Banner title='Premiun Group Tours' />
        </div>
      </section>

      <section>
        <div className='wrapper-BA2 py-10 md:py-20 max-w-[1440px] mx-auto'>
          <div className='container'>
            <div className="flex flex-col gap-4 md:gap-8 ">
              <div className='flex flex-col gap-4 md:gap-8 px-5'>
                <div className='flex items-center'>
                  <h2 className='min-w-fit'>Premiun Group Tours</h2>
                  <div className="ml-5 h-[2px] bg-gray-300 w-4/5"></div>
                </div>
                <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.</p>
              </div>

              <TourCards data={premiumTourPickup} />

            </div>


          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-BA3 pt-10 md:pt-20 bg-white">
          <div className="container">
            <div className="max-w-[1440px] mx-auto">
              <NewsAndTips />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
