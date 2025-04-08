"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import Banner from '@/components/Banner'
import Layout from '@/components/layout/Layout'
import Image from "next/image";
import './blog.css'
import { blogSlides } from "@/jsonData/Data";
import Head from "next/head";
import Link from "next/link";

const index = () => {

  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>

      <section>
        <div className="wrapper-B1">
          <Banner title='Blogs' />
        </div>
      </section>

      <section>
        <div className="wrapper-B2 pt-10 lg:pt-20">
          <div className="container">
            <div className="flex flex-col gap-10 md:gap-14 lg:gap-20 px-5">
              <div className="max-w-[900px] flex flex-col gap-10 mx-auto ">
                <h2 className="text-center">Latest News & Articles</h2>
                <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi.</p>
              </div>
              {/* slider */}
              <div className="w-full flex justify-center overflow-hidden">
                <Swiper
                  modules={[Navigation, EffectCoverflow]}
                  effect="coverflow"
                  spaceBetween={50}
                  centeredSlides={true}
                  loop={true}
                  navigation
                  // pagination={{ clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                  }}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2.5,
                    slideShadows: false,
                  }}
                  className="w-full max-w-[1400px] h-[400px] pt-40">

                  {blogSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden w-full">

                      <Image src={slide.image} alt={slide.title} layout="fill" className="object-cover" />
                      <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end text-white">
                        <div className="p-5 flex flex-col justify-between gap-48">
                          <div >
                            <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] font-manrope'>
                              Culture
                            </span>
                          </div>
                          <div className="flex flex-col gap-3 md:gap-6">
                            <h3 className='text-white'>{slide.title}</h3>
                            <span className='flex flex-wrap gap-3 justify-between text-[13px] md:text-[14px] lg:text-[16px]'>
                              <span className='flex gap-2 items-center text-white'><SlCalender />{slide.date}</span>
                              <span className='flex gap-2 items-center text-white'><FaRegClock />{slide.duration}</span>
                              <Link href={slide.link}>
                                <span className="rounded-[50px] border border-white text-white px-3 py-2">
                                  Keep Reading
                                </span>
                              </Link>

                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-B3 py-10 lg:py-20">
          <div className="container">
            <div className="flex  flex-col gap-10 lg:gap-20 mx-5">
              <div className="flex md:flex-row flex-col gap-10 lg:gap-20 md:h-[600px] lg:h-[900px] ">
                <div className="">
                  <div className="p-5 flex flex-col gap-20 sm:gap-40 md:gap-64 lg:gap-96 blog1rdimg">
                    <div>
                      <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] text-white font-manrope'>
                        Culture
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                      <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                      <span className='flex flex-wrap gap-3 text-[13px] md:text-[14px] lg:text-[16px]'>
                        <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                        <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:flex items-end">
                  <div className="p-5 flex flex-col justify-between blog2rdimg gap-20 sm:gap-40 md:gap-[300px] lg:gap-[500px]">
                    <div>
                      <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] text-white font-manrope'>
                        Culture
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                      <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                      <span className='flex flex-wrap gap-3 text-[13px] md:text-[14px] lg:text-[16px]'>
                        <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                        <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="max-w-[1200px] h-auto blog3rdimg">
                <div className="p-5 flex flex-col justify-between gap-48">
                  <div>
                    <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] text-white font-manrope'>
                      Culture
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-6">
                    <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                    <span className='flex flex-wrap gap-3 justify-between text-[13px] md:text-[14px] lg:text-[16px]'>
                      <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                      <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                      <span className='rounded-[50px] border border-white text-white px-3 py-2'>Keep Reading</span>
                    </span>
                  </div>
                </div>
              </div>


              <div className="flex md:flex-row flex-col gap-10 lg:gap-20 md:h-[600px] lg:h-[900px] ">
                <div className="md:flex items-end">
                  <div className="p-5 flex flex-col justify-between blog2rdimg gap-20 sm:gap-40 md:gap-[300px] lg:gap-[500px]">
                    <div>
                      <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] text-white font-manrope'>
                        Culture
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                      <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                      <span className='flex flex-wrap gap-3 text-[13px] md:text-[14px] lg:text-[16px]'>
                        <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                        <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="p-5 flex flex-col justify-between blog2rdimg gap-20 sm:gap-40 md:gap-[300px] lg:gap-[500px]">
                    <div>
                      <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] text-white font-manrope'>
                        Culture
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6">
                      <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                      <span className='flex flex-wrap gap-3 text-[13px] md:text-[14px] lg:text-[16px]'>
                        <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                        <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-auto flex justify-end max-w-[1200px]">
                <div className="p-5 flex flex-col justify-between gap-48 blog3rdimg">
                  <div>
                    <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] text-white font-manrope'>
                      Culture
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-6">
                    <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                    <span className='flex flex-wrap gap-3 justify-between text-[13px] md:text-[14px] lg:text-[16px]'>
                      <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                      <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                      <span className='rounded-[50px] border border-white text-white px-3 py-2'>Keep Reading</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index