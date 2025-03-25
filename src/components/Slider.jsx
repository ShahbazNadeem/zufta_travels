'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Slider = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };

    return (
        <div className="relative w-full  mx-auto">
            <Swiper
                ref={swiperRef}
                navigation={true}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                onSlideChange={handleSlideChange}
                className="mySwiper"
            >
                {data?.map((items, index) => (
                    <SwiperSlide key={index} className="">
                        <div className='relative  w-full py-10 px-5 md:px-14 lg:px-38 xl:px-68 flex flex-col items-center'>

                        {/* Center Image (Main) */}
                        <motion.figure
                            key={index}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            >
                            <Image src={items.image} width={80} height={80} alt="Main Image" />
                        </motion.figure>
                        <h4>{items.title}</h4>
                                <span>{items.rating}</span>
                                <p className='text-black text-center'>{items.para}</p>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Previous Slide Image (Top Left) */}
            <motion.div
                key={currentIndex - 1}
                initial={{ x: -50, y: -50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -50, y: -50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-5 left-5"
            >
                <Image
                    src={data[(currentIndex - 1 + data.length) % data.length].image}
                    width={50}
                    height={50}
                    alt="Previous Image"
                    className="rounded-full border border-gray-300 shadow-md"
                />
            </motion.div>

            {/* Next Slide Image (Top Right) */}
            <motion.div
                key={currentIndex + 1}
                initial={{ x: 50, y: -50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 50, y: -50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-5 right-5"
            >
                <Image
                    src={data[(currentIndex + 1) % data.length].image}
                    width={50}
                    height={50}
                    alt="Next Image"
                    className="rounded-full border border-gray-300 shadow-md"
                />
            </motion.div>
        </div>
    );
};

export default Slider;
