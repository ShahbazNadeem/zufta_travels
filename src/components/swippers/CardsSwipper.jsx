"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { homeTourPickup } from "@/jsonData/Data";
import { Autoplay } from 'swiper/modules';
import { SwiperNavButtons } from "./SwiperNavButtons";

const CardsSwipper = () => {
  const itemRefs = useRef([]);
  const [inViewStates, setInViewStates] = useState([]);

  useEffect(() => {
    setInViewStates(
      itemRefs.current.map((ref) => {
        if (!ref) return false;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInViewStates((prev) => {
                const newState = [...prev];
                newState[itemRefs.current.indexOf(ref)] = true;
                return newState;
              });
              observer.disconnect();
            }
          },
          { rootMargin: "-50px" }
        );
        observer.observe(ref);
        return false;
      })
    );
  }, []);

  return (
    <div className="relative w-full mx-auto px-4">
      <Swiper
        scrollbar={{ hide: false, draggable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Scrollbar, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="py-16 md:h-[500px] lg:h-[600px] sm:h-[400px] h-[320px]"
      >
        {homeTourPickup.map((tour, index) => (
          <SwiperSlide key={tour.id} className="bg-white ">
            <motion.div
              ref={(el) => (itemRefs.current[index] = el)}
              key={tour.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: inViewStates[index] ? 1 : 0,
                y: inViewStates[index] ? (index % 2 === 0 ? 1 : 40) : 20,
              }}
              transition={{ duration: 0.5 }}
              className='flex items-end h-full w-full'>
              <div className="absolute inset-0 -z-10">
                <Image src={tour.image} alt={tour.title} fill className=" object-cover" />
              </div>
              <div className="relative inset-0 -z-10 flex flex-col justify-end h-full px-3 pb-3 w-full">
                <h3 className="mt-4 text-lg  text-white">{tour.title}</h3>
                <p className="text-sm text-gray-600">{tour.duration}</p>
                <p className="text-lg font-bold mt-2">PKR {tour.price}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>

      {/* Custom scrollbar styling */}
      <style jsx global>{`
              .swiper-wrapper{
              height:40vh !important;
              }
                .swiper-scrollbar {
                left: 10%;
                width: 80% !important;
                height: 6px !important;
                background: rgba(0, 0, 0, 0.2) !important;
                border-radius: 10px;
                }
                .swiper-scrollbar-drag {
                    background:#000000  !important; /* Custom scrollbar color */
                    border-radius: 10px;
                } 
                @media (max-width: 768px) {
                .swiper-wrapper{
                  height:30vh !important;
                  }
                }   
                @media (max-width: 640px) {
                .swiper-wrapper{
                  height:25vh !important;
                  }
                }   
              }
            `}</style>
    </div>
  )
}

export default CardsSwipper