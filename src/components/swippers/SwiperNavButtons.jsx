import React from 'react';
import { useSwiper } from 'swiper/react';
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";
import '../components.css'


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <span className='cursor-pointer' onClick={() => swiper.slidePrev()}><FiChevronLeft  size={25}/></span>
      <span className='cursor-pointer' onClick={() => swiper.slideNext()}><FiChevronRight  size={25} /></span>
    </div>
  );
};