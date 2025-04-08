"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerimg1 from "@/images/aboutus/aboutbanner.jpeg";
import { CiShare2 } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Pagination, Navigation } from "swiper/modules";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import "./tourdetail.css";
import img from "@/images/planMyTrip/img.png";
import Frame68 from "@/images/Frame68.png";
import naran from "@/images/naran.jpeg";
import { tourDetails } from "@/jsonData/Data";
import Layout from "@/components/layout/Layout";
import { accordianData } from "@/jsonData/Data";
import AccordianWithSelection from "@/components/AccordianWithSelection";
import Accordian from "@/components/Accordian";
const TourDetail = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [img, Frame68, naran];
  return (
    <Layout>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[100vw] h-[50vh] md:h-[100vh]">
            <figure className="w-full h-auto">
              <Image
                src={bannerimg1}
                alt="bannerimg1"
                className="w-full h-auto"
              />
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="w-[100vw] h-[100vh]">
            <Image
              src={bannerimg1}
              alt="bannerimg1"
              className="w-fit h-auto "
            />
          </figure>
        </SwiperSlide>
      </Swiper>
      <section>
        <div className="wrapper">
          <div className="container mx-auto px-5">
            <div className="heading py-5 flex items-center gap-5 pl-10 ">
              <p className="text-black">Overview</p>
              <p className="text-black">Tour Plan</p>
              <p className="text-black">Pricing</p>
              <p className="text-black">FAQs</p>
            </div>
            <div className="tourdetail px-2 ">
              <div className="flex items-center justify-between flex-wrap">
                <h2>Tour Name Appear Here</h2>
                <div className="flex items-center gap-5">
                  <figure className="flex items-center gap-1">
                    <IoIosStar className="textColor2 text-lg md:text-xl lg:text-2xl" />
                    <figcaption className="text-sm textColor2">4.3</figcaption>
                    <figcaption className="text-xs text-gray-600">
                      2034 ratings
                    </figcaption>
                  </figure>
                  <figure>
                    <FaRegHeart className="text-lg md:text-xl  lg:text-2xl" />
                  </figure>
                  <figure>
                    <CiShare2 className="text-lg md:text-xl lg:text-2xl" />
                  </figure>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap md:gap-0 gap-3 py-5">
                <div className="md:basis-[48%] basis-[100%]">
                  <h3 className="mb-3">About this tour</h3>
                  <p>
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolor similique ut quasi maxime ut deserunt
                    autem At praesentium voluptatem aut libero nisi. Et eligendi
                    sint ab cumque veritatis aut provident aliquam. Aut
                    aspernatur consequuntur eum quaerat distinctio ut inventore
                    aliquid et quasi alias ut rerum suscipit et nihil deleniti.
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolor similique ut quasi maxime ut deserunt
                    autem At praesentium voluptatem aut libero nisi. Et eligendi
                    sint ab cumque veritatis aut provident aliquam. Aut
                    aspernatur consequuntur eum quaerat distinctio ut inventore
                    aliquid et quasi alias ut rerum suscipit et nihil deleniti.
                  </p>
                </div>
                <div className=" basis-[100%] md:basis-[48%] h-[30vh] md:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.061547080058!2d-122.4206792846803!3d37.778519379758424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1e6e2d4fd7%3A0x3f0fd79aa3ec3b87!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1605124438470!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-3 py-5 w-[80%]">
                {tourDetails.map((items, index) => {
                  return (
                    <div className="flex items-center gap-3" key={index}>
                      <figure>
                        <Image
                          src={items.img}
                          alt={items.title}
                          className="w-full h-auto"
                        ></Image>
                      </figure>
                      <div>
                        <h5 className="font-bold">{items.title}</h5>
                        <p className="max-w-[350px]">{items.data}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tourplan">
        <div className="wrapper">
          <div className="container mx-auto px-5">
            <h2>Tour Plan</h2>
            <p>You need to come at least once in your life</p>
            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-0 py-3">
              <div className=" basis-[100%] md:basis-1/2">
                <Accordian data={accordianData} />
              </div>
              <div className="basis-[100%] md:basis-1/2 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.061547080058!2d-122.4206792846803!3d37.778519379758424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1e6e2d4fd7%3A0x3f0fd79aa3ec3b87!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1605124438470!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="priceing">
        <div className="wrapper">
          <div className="container mx-auto px-5">
            <div className="pricing-content">
              <div className="flex items-center justify-between py-5">
                <div>
                  <h2 className="text-2xl font-semibold">Pricing</h2>
                  <p className="text-gray-600">
                    You need to come at least once in your life
                  </p>
                </div>

                {/* Date Picker Input with Icon */}
                <div className="relative">
                  <input
                    type="date"
                    className="border rounded px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
                </div>
                {/* End of Date Picker */}
                  <div>
                    <h5>Toyota Corolla</h5>
                    <p>(2 to 4 persons)</p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper-P4 mt-10 lg:mt-20">
          <div className="container">
            <div className="flex flex-col gap-3 sm:gap-8 px-5">
              <h2>Frequently Asked Questions</h2>
              <p>You need to come at least once in your life</p>
              <div className="flex flex-col md:flex-row pt-6">
                {/* Image Section */}
                <div className="md:basis-1/2 flex justify-center items-center">
                  <figure className="w-[200px] sm:w-[300px] md:w-[330px] lg:w-full">
                    <Image
                      src={images[selectedIndex] || images[0]}
                      width={500}
                      height={300}
                      alt="Carousel Image"
                      className="w-full h-full"
                    />
                  </figure>
                </div>

                {/* Accordion Section */}
                <div className="md:basis-1/2 px-10 mt-10 lg:mt-0 flex justify-center items-center">
                  <AccordianWithSelection
                    data={accordianData}
                    onSelect={(index) => setSelectedIndex(index ?? 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourDetail;

// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full">
//       {items.map((item, index) => (
//         <div key={index} className="border-b border-gray-300">
//           <button
//             onClick={() => toggleAccordion(index)}
//             className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700  hover:bg-gray-200 transition-all"
//           >
//             {item.title}
//             <span>{openIndex === index ? "" : ""}</span>
//           </button>
//           {openIndex === index && (
//             <div className="p-4 bg-white text-gray-600">{item.content}</div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
