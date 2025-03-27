import { useState } from "react";
import Layout from '@/components/layout/Layout'
import Banner from '@/components/Banner'
import Image from 'next/image'
import CountUp from 'react-countup';
import payment1 from '@/images/aboutus/payment1.png'
import payment2 from '@/images/aboutus/payment2.png'
import payment3 from '@/images/aboutus/payment3.png'
import payment4 from '@/images/aboutus/payment4.png'
import payment5 from '@/images/aboutus/payment5.png'
import './planmytrip.css'
import NewsAndTips from '@/components/NewsAndTips';
import Accordian from '@/components/Accordian';
import { accordianData } from '@/jsonData/Data';
import img from '@/images/planMyTrip/img.png'
import Frame68 from '@/images/Frame68.png'
import naran from '@/images/naran.jpeg'
import AccordianWithSelection from "@/components/AccordianWithSelection";

const index = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const images = [img, Frame68, naran];
    return (
        <Layout>
            <section>
                <div className="wrapper-P1">
                    <Banner title='Plan My Trip' link='Plan my trip' />
                </div>
            </section>

            <section>
                <div className="warpper-P2 mt-10 lg:mt-20">
                    <div className="container flex flex-col gap-5 px-5">
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
                            <div className="basis-1/2 flex justify-center items-center px-10 md:px-16 lg:px-20 py-18 md:py-22  lg:py-28 premiumGroup text-[20px] md:text-[28px] lg:text-[32px] font-marcellus textColor2">Explore Premium Group Tours</div>
                            <div className="basis-1/2 flex justify-center items-center px-10 md:px-16 lg:px-20 py-18 md:py-22  lg:py-28 privateDroup text-[20px] md:text-[28px] lg:text-[32px] font-marcellus textColor2">Explore Private Group Tours</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-P3 mt-10 lg:mt-20">
                    <div className="container">
                        <div className="flex flex-col gap-3 sm:gap-8 px-5">
                        <h1>Frequently Asked Questions</h1>
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

            <section>
                <div className="wrapper-P4 my-10 lg:my-20">
                    <div className="container">
                        <NewsAndTips />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default index
