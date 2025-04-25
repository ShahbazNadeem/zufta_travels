import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { IoIosStar, IoMdHeart } from "react-icons/io";
import { FaRegHeart, FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa"
import { tourDetails, accordianData, pricingToyota, pricingHondaBrv } from '@/jsonData/Data';
import Accordian from '@/components/Accordian';
import img from "@/images/planMyTrip/img.png";
import Frame68 from "@/images/Frame68.png";
import naran from "@/images/naran.jpeg";
import AccordianWithSelection from '@/components/AccordianWithSelection';
import Layout from '@/components/layout/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from "axios";
import tourimg from "@/images/tourdetail/Star1.png"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bannerimg1 from "@/images/aboutus/aboutbanner.jpeg";
import './slug.css'

const CatchAllDetailPage = () => {
  const { query: { slug = [] } } = useRouter();
  const id = slug[2] ?? null;
  console.error("url id", id);
  const [tourData, setTourData] = useState("");

  useEffect(() => {
    fetchTourDetails();
  }, [id]);
  const fetchTourDetails = async () => {
    try {
      // debugger
      const response = await axios.get(`https://192.168.100.177:45455/api/Tours/TourDetailsById?id=${id}`);
      setTourData(response.data);
      //     name": "Fairy Meadows Tour #12",
      // "mapApi": "",
      // "description": "",
      // "departure": "Lahore",
      // "included": "transport",
      // "notIncluded": "Food",
      // "faqImageUrl": null,
      // "images": [],
      // "actionPlans": [],
      console.error('apis getting data', tourData);
    } catch (error) {
      console.error('Failed to fetch tour details:', error);
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [img, Frame68, naran];

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const sectionRefs = {
    overview: useRef(null),
    tourplan: useRef(null),
    pricing: useRef(null),
    faqs: useRef(null),
  };

  const [activeSection, setActiveSection] = useState('overview');


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);


  return (
    <Layout>
      <Head>
        <title>Premiun Group Tours</title>
      </Head>

      <section>
        <div classname='wrapper max-w-[1620px] mx-auto'>
          <div className='container'>
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <figure className='w-full h-auto'><Image src={bannerimg1} className='w-full h-auto' /></figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className='w-full h-auto'><Image src={naran} className='w-full h-auto' /></figure>
                {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                <figure className='w-full h-auto'><Image src={Frame68} className='w-full h-auto' /></figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className='w-full h-auto'><Image src={img} className='w-full h-auto' /></figure>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <div>
        <div className="sticky top-26 bg-[#f8f8f8] max-w-[1300px] mx-auto px-5">
          <ul className="flex items-center gap-5 text-[14px] md:text-[16px] text-black">
            <li className={`p-3 sm:p-5 border-b-4 ${activeSection === 'overview' ? 'border-[#1a2b48]' : 'border-transparent'}`}>Overview</li>
            <li className={`p-3 sm:p-5 border-b-4 ${activeSection === 'tourplan' ? 'border-[#1a2b48]' : 'border-transparent'}`}>Tour Plan</li>
            <li className={`p-3 sm:p-5 border-b-4 ${activeSection === 'pricing' ? 'border-[#1a2b48]' : 'border-transparent'}`}>Pricing</li>
            <li className={`p-3 sm:p-5 border-b-4 ${activeSection === 'faqs' ? 'border-[#1a2b48]' : 'border-transparent'}`}>FAQs</li>
          </ul>

        </div>

        <section ref={sectionRefs.overview} id='overview'>
          <div className="wrapper mt-10 md:mt-20 px-5">
            <div className="container">
              <div>
                <div className="mt-10 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
                  <h2 className='text-center md:text-left'>{tourData?.name || 'Tour Name Appear Here'}</h2>
                  <div className="flex items-center justify-between gap-8">
                    <span className="flex items-center gap-3">
                      <IoIosStar className="textColor2 text-lg md:text-xl lg:text-2xl" />
                      <span className="text-[23px] font-manrope font-bold textColor2">4.3</span>
                      <p>2034 ratings</p>
                    </span>
                    <span className="" >
                      <FaRegHeart className="text-lg md:text-xl lg:text-2xl" />
                      {/* <IoMdHeart className="text-lg md:text-xl lg:text-2xl" /> */}
                    </span>
                    <span>
                      <CiShare2 className="text-lg md:text-xl lg:text-2xl" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap md:gap-0 gap-5 pt-5 md:pt-10">
                  <div className="md:basis-[48%] basis-[100%]">
                    <h3 className="mb-3 text-center md:text-left">About this tour</h3>
                    <p className='text-center md:text-left'>
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
                  <div className="basis-[100%] md:basis-[48%] h-[25vh] md:h-[350px]">
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

                <div className="flex items-center justify-between flex-wrap gap-5 pt-10 lg:max-w-[70%] xl:max-w-[60%]">
                  <div className="flex items-center gap-3">
                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                      <Image src={tourimg} alt='img' className="w-full h-auto" />
                    </figure>
                    <div>
                      <h5 className="font-bold">Destination</h5>
                      <p className="max-w-[350px]">{tourData?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                      <Image src={tourimg} alt='img' className="w-full h-auto" />
                    </figure>
                    <div>
                      <h5 className="font-bold">Departure</h5>
                      <p className="max-w-[350px]">{tourData?.departure}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                      <Image src={tourimg} alt='img' className="w-full h-auto" />
                    </figure>
                    <div>
                      <h5 className="font-bold">Included</h5>
                      <p className="max-w-[350px]">{tourData?.included}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                      <Image src={tourimg} alt='img' className="w-full h-auto" />
                    </figure>
                    <div>
                      <h5 className="font-bold">Not Included</h5>
                      <p className="max-w-[350px]">{tourData?.notIncluded}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={sectionRefs.tourplan} id="tourplan">
          <div className="wrapper mt-10 md:mt-20 px-5">
            <div className="container">
              <h2 className='text-center md:text-left'>Tour Plan</h2>
              <p className="mt-3 text-center md:text-left">You need to come at least once in your life</p>
              <div className="flex items-center flex-col md:flex-row justify-center gap-10 md:gap-03 mt-5 lg:mt-0">
                <div className="md:basis-1/2 md:px-5 lg:px-10 flex justify-center items-center ">
                  <Accordian data={accordianData} />
                </div>
                <div className=" md:basis-1/2 h-[300px]">
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

        <section ref={sectionRefs.pricing} id="pricing">
          <div className="wrapper mt-10 md:mt-20 px-5">
            <div className="container">
              <div className="">
                <div className="flex items-center justify-between flex-wrap gap-8 py-5">
                  <div>
                    <h2>Pricing</h2>
                    <p className="mt-3 text-center md:text-left">
                      You need to come at least once in your life
                    </p>
                  </div>

                  {/* Date Picker Input with Icon */}
                  <div className="relative ">
                    <input
                      type="date"
                      // value={new Date().toISOString().split('T')[0]}
                      className="border rounded-lg px-8 py-2 pl-10 focus:outline-none"
                    />
                    <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
                  </div>
                  {/* End of Date Picker */}

                  <div className="flex gap-5">
                    <span><h5>Toyota Corolla</h5>
                      <p>(2 to 4 persons)</p></span>
                    <span
                      onClick={handleToggle}
                      className={`w-16 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${isToggled ? "bg-gray-300" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isToggled ? "translate-x-8" : ""
                          }`}
                      />
                    </span>
                    <span><h5>Honda BRV</h5>
                      <p>(4 to 6 persons)</p></span>

                  </div>

                </div>

                <div className='flex justify-center  flex-wrap gap-2 mt-5 md:mt-10'>
                  {pricingHondaBrv?.map((item, index) => {
                    const isLast = index === pricingHondaBrv.length - 1;

                    return (
                      <div
                        key={item.id}
                        className={`md:basis-[48%] xl:basis-[23%] p-1 md:p-5 hover:shadow-lg transition ${!isLast ? 'border-r border-color' : 'xl:border-none border-r border-color'}`}
                      >
                        <div className='flex items-center gap-3 md:gap-5'>
                          <FaRegCheckCircle className="text-lg md:text-xl lg:text-2xl" />
                          <h3 className="">{item.title}</h3>
                        </div>
                        <p className="font-semibold mb-3 mt-6 md:mt-10">Rs {item.price}</p>
                        <p className="text-sm border-y border-color py-2">{item.hotel}</p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>


      <section ref={sectionRefs.faqs} id="faqs">
        <div className="wrapper-P4 my-10 lg:my-20 px-5">
          <div className="container">
            <div className="flex flex-col gap-3 sm:gap-8 ">
              <div>
                <h2 className='text-center md:text-left'>Frequently Asked Questions</h2>
                <p className='mt-3 text-center md:text-left'>You need to come at least once in your life</p>
              </div>
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
                <div className="md:basis-1/2 md:px-5 lg:px-10 mt-10 lg:mt-0 flex justify-center items-start">
                  <AccordianWithSelection
                    data={tourData?.faqs}
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

export default CatchAllDetailPage;
