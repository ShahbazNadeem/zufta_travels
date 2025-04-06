'use client';

import { useState } from "react";
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Banner from '@/components/Banner'
import './byair.css'
import NewsAndTips from '@/components/NewsAndTips'
import { byAirTourPickup } from '@/jsonData/Data'
import Image from 'next/image'

const index = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  return (
    <Layout>
      <Head>
        <title>By Air</title>
      </Head>

      <section>
        <div className="wrapper-BA1">
          <Banner title='By Air' />
        </div>
      </section>

      <section>
        <div className='wrapper-BA2 py-10 md:py-20'>
          <div className='container'>
            <div>
              <div className='flex items-center'>
                <h1 className='w-fit'>By Air</h1>
                <div className="ml-5 h-[2px] bg-gray-300 w-4/5"></div>
              </div>
              <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center w-full">
                {byAirTourPickup.slice(0, visibleCount).map((items, index) => (
                  <div key={index} className="w-[45%] lg:w-[24%] relative m-1 h-[250px] md:h-[300px] lg:h-[440px]">
                    <div className="absolute inset-0 -z-10">
                      <Image src={items.image} fill className="object-cover" alt={items.title} />
                    </div>
                    <div className="relative inset-0 -z-10 flex flex-col justify-end h-full px-3 pb-3">
                      <h3 className="text-white">{items.title}</h3>
                      <div className="flex flex-wrap gap-1 md:gap-2 text-[#B8B8B8] text-[13px] md:text-[16px] w-full">
                        <span>{items.duration}</span>
                        <span>From Rs{items.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < byAirTourPickup.length && (
                <button
                  onClick={handleShowMore}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-BA3 pt-10 md:pt-20 bg-white">
          <div className="container">
            <div className="">
              <NewsAndTips />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index