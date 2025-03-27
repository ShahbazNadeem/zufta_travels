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
import img from '@/images/home/designYurTrip.jpeg'
import './blog.css'

const index = () => {
  const slides = [
    {
      image: img,
      category: "Discovery",
      title: "Ultimate Travel Planning Guide: 10 Tips For A Seamless Journey",
      date: "18 Sep 2024",
      duration: "6 mins",
    },
    {
      image: img,
      category: "Discovery",
      title: "Exploring Hidden Nature Spots: A Guide for Adventurers",
      date: "20 Sep 2024",
      duration: "5 mins",
    },
    {
      image: img,
      category: "Discovery",
      title: "The Most Scenic Landscapes to Visit This Year",
      date: "22 Sep 2024",
      duration: "7 mins",
    },
    {
      image: img,
      category: "Discovery",
      title: "The Most Scenic Landscapes to Visit This Year",
      date: "22 Sep 2024",
      duration: "7 mins",
    },
    {
      image: img,
      category: "Discovery",
      title: "The Most Scenic Landscapes to Visit This Year",
      date: "22 Sep 2024",
      duration: "7 mins",
    },
    {
      image: img,
      category: "Discovery",
      title: "The Most Scenic Landscapes to Visit This Year",
      date: "22 Sep 2024",
      duration: "7 mins",
    },
    {
      image: img,
      category: "Discovery",
      title: "The Most Scenic Landscapes to Visit This Year",
      date: "22 Sep 2024",
      duration: "7 mins",
    },
  ];
  return (
    <Layout>
      <section>
        <div className="wrapper-B1">
          <Banner title='Blogs' link='blog' />
        </div>
      </section>

      <section>
        <div className="wrapper-B2 pt-20">
          <div className="container">
            <div className="flex flex-col gap-10 md:gap-14 lg:gap-20 px-5">
              <div className="max-w-[900px] flex flex-col gap-10 mx-auto ">
                <h1 className="text-center">Latest News & Articles</h1>
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
                  className="w-full max-w-[1400px] h-[400px] pt-40"
                >

                  {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden w-full">

                      <Image src={slide.image} alt={slide.title} layout="fill" className="object-cover" />
                      <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end text-white">
                        <div className="p-5 flex flex-col justify-between gap-48">
                          <div >
                            <span className='bg-[#0000000D] backdrop-blur-md rounded-[50px] px-[15px] py-[8px] font-manrope'>
                              Culture
                            </span>
                          </div>
                          <div className="flex flex-col gap-6">
                            <h3 className='text-white'>Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</h3>
                            <span className='flex flex-wrap gap-3 justify-between'>
                              <span className='flex gap-2 items-center text-white'><SlCalender />18 Sep 2024</span>
                              <span className='flex gap-2 items-center text-white'><FaRegClock />6 mins</span>
                              <span className='rounded-[50px] border border-white text-white px-3 py-2'>Keep Reading</span>
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
    </Layout>
  )
}

export default index