import Banner from '@/components/Banner'
import Layout from '@/components/layout/Layout'
import React from 'react'
import payment1 from '@/images/aboutus/payment1.png'
import payment2 from '@/images/aboutus/payment2.png'
import payment3 from '@/images/aboutus/payment3.png'
import payment4 from '@/images/aboutus/payment4.png'
import payment5 from '@/images/aboutus/payment5.png'
import aboutParisimg from '@/images/aboutus/aboutParisimg.png'
import arrow from '@/images/aboutus/arrow.png'
import Image from 'next/image'
import CountUp from 'react-countup';
import './aboutus.css'
import { GoShieldCheck } from "react-icons/go";
import Slider from '@/components/swippers/Slider'
import { sliderData1 } from '../../jsonData/Data'
import NewsAndTips from '@/components/NewsAndTips'
import Video from '@/components/Video'
import Head from 'next/head'

const index = () => {
  return (
    <Layout>
       <Head>
        <title>About us</title>
      </Head>
     
      <section>
        <div className="wrapper-A1">
          <Banner title='About us' />
        </div>
      </section>

      <section>
        <div className="wrapper-A2 mt-20">
          <div className="container">
            <div className="flex flex-col text-center gap-12 px-3 md:px-0">
              <h2>About Zufta Travel & Tours</h2>
              <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="warpper-A3 mt-20">
          <div className="container flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row bg-[#f0f0e5]">

              <div className="basis-1/2 flex justify-center items-center">
                <div>
                  <div className="flex">
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">
                          <CountUp start={0} end={168} duration={4.5} enableScrollSpy={true} scrollSpyOnce={true} />k
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">Happy Clients</span>
                      </div>
                    </div>
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">+
                          <CountUp start={0} end={45} duration={4.5} enableScrollSpy={true} scrollSpyOnce={true} />k
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">Destinations</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">+
                          <CountUp start={0} end={49} duration={4.5} enableScrollSpy={true} scrollSpyOnce={true} />
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">Global Search</span>
                      </div>
                    </div>
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">+
                          <CountUp start={0} end={26} duration={4.5} enableScrollSpy={true} scrollSpyOnce={true} />k
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">Destinations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="basis-1/2 flex justify-center items-center gap-5 py-7 px-5">
                <div className="flex gap-5">
                  <div className="flex items-center">
                    <figure><Image src={payment1} alt='img' /></figure>
                  </div>
                  <div className="flex flex-col gap-5">
                    <figure><Image src={payment2} alt='img' /></figure>
                    <figure><Image src={payment3} alt='img' /></figure>
                  </div>
                  <div className="flex flex-col gap-2">
                    <figure><Image src={payment4} alt='img' /></figure>
                    <figure><Image src={payment5} alt='img' /></figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:basis-1/2">
                <Video src='/images/Candy.mp4' />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-between gap-20 lg:gap-42 planMyTrip p-10">
                <div className="flex flex-col gap-5">
                  <div className="">Let’s Travel</div>
                  <h2 className="">Explore, Book, Soar: Your Journey Awaits!</h2>
                </div>
                <div className="flex items-center gap-5">Plan My Trip <figure><Image src={arrow} alt='img' /></figure></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="basis-1/2 flex justify-center items-center px-10 md:px-16 lg:px-20 py-18 md:py-22  lg:py-28 premiumGroup text-[20px] md:text-[28px] lg:text-[32px] font-marcellus textColor2">Explore Premium Group Tours</div>
              <div className="basis-1/2 flex justify-center items-center px-10 md:px-16 lg:px-20 py-18 md:py-22  lg:py-28 privateDroup text-[20px] md:text-[28px] lg:text-[32px] font-marcellus textColor2">Explore Private Group Tours</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A4 mt-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row px-5">
              <div className="basis-1/2 lg:basis-1/3 flex justify-center items-center">
                <div className="flex flex-col gap-4 lg:gap-20">
                  <div className="flex items-start gap-5">
                    <div className='flex justify-center items-start p-3 lg:p-5 rounded-xl shadow-[0px_6px_22px_0px_#00000017]'>
                      <figure className='w-full h-auto'>
                        <GoShieldCheck size={20} />
                      </figure>
                    </div>
                    <span className='pe-0 md:pe-10 lg:me-0'>
                      <h3>Security Assurance</h3>
                      <p>Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    </span>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className='flex justify-center items-start p-3 lg:p-5 rounded-xl shadow-[0px_6px_22px_0px_#00000017]'>
                      <figure className='w-full h-auto'>
                        <GoShieldCheck size={20} />
                      </figure>
                    </div>
                    <span className='pe-0 md:pe-10 lg:me-0'>
                      <h3>Security Assurance</h3>
                      <p>Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 flex justify-center items-center">
                <figure><Image src={aboutParisimg} alt='img' /></figure>
              </div>
              <div className="basis-1/2 lg:basis-1/3 flex justify-center items-center">
                <div className="flex flex-col gap-4 lg:gap-20">
                  <div className="flex items-start gap-5">
                    <div className='flex justify-center items-start p-3 lg:p-5 rounded-xl shadow-[0px_6px_22px_0px_#00000017]'>
                      <figure className='w-full h-auto'>
                        <GoShieldCheck size={20} />
                      </figure>
                    </div>
                    <span className='pe-0 md:pe-10 lg:me-0'>
                      <h3>Security Assurance</h3>
                      <p>Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    </span>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className='flex justify-center items-start p-3 lg:p-5 rounded-xl shadow-[0px_6px_22px_0px_#00000017]'>
                      <figure className='w-full h-auto'>
                        <GoShieldCheck size={20} />
                      </figure>
                    </div>
                    <span className='pe-0 md:pe-10 lg:me-0'>
                      <h3>Security Assurance</h3>
                      <p>Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A5 pt-20">
          <div className="container">
            <h2 className='text-center pb-12 textColor2'>What Our Clients Say</h2>
            <Slider data={sliderData1} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A6 my-20">
          <div className="container">
            <NewsAndTips />
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default index