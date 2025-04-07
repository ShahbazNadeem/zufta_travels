import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'
import Head from 'next/head'
import Banner from '@/components/Banner'
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link';
import contentImg1 from '@/images/psy/contentImg1.jpeg'
import contentImg2 from '@/images/psy/contentImg2.jpeg'
import arrow from '@/images/arrow.png'
import './psy.css'
import Parallax from '@/components/Parallax';

const index = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti.`;

  const shortText = fullText.slice(0, 300) + '...';
    return (
        <Layout>
            <Head>
                <title>Pakistan Sikh Yatra</title>
            </Head>

            <section>
                <div className="wrapper-PS1">
                    <Banner title='Sikh Yatra' backgroundImg='images/psy/bannerImg.jpeg' />
                    {/* <Banner title='Sikh Yatra' backgroundImg={bannerImg.src} /> */}
                </div>
            </section>

            <section>
                <div className="wrapper-PS2 mt-10 md:mt-20 px-5 max-w-[1440px] mx-auto">
                    <div className="container">
                        <div className='flex flex-col md:flex-row gap-8 md:gap-0'>
                            <div className='w-[100%] md:w-[40%] text-center md:text-left'>
                                <h1>Heading</h1>
                            </div>
                            <div className='w-[100%] md:w-[60%] flex flex-col items-center md:items-start gap-6 md:gap-10 lg:gap-12'>
                                <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati possimus. Eligendi veritatis ex culpa, error, soluta odit modi asperiores voluptate laudantium itaque repellendus, dolore porro iste reprehenderit? Ipsa, totam.</p>
                                <div className="w-fit cursor-pointer">
                                    <Link href='/contactus'>
                                        <button className='flex gap-4 items-center w-fit'>
                                            Contact Us <FiArrowRight size={20} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-PS3 mt-10 md:mt-20 px-5 max-w-[1440px] mx-auto">
                    <div className="container">
                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex gap-3 md:gap-6">
                                <div className="basis-1/2"><figure><Image src={contentImg1} /></figure></div>
                                <div className="basis-1/2"><figure><Image src={contentImg2} /></figure></div>
                            </div>

                            <div className="text-gray-800">
                                <p>{isExpanded ? fullText : shortText}<span
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-blue-600 mt-2 underline"
                                >
                                    {isExpanded ? "Read Less" : "Read More"}
                                </span></p>
                                
                            </div>

                            <div className="flex gap-3 md:gap-6">
                                <div className="basis-1/3"><figure><Image src={contentImg1} /></figure></div>
                                <div className="basis-1/3"><figure><Image src={contentImg2} /></figure></div>
                                <div className="basis-1/3"><figure><Image src={contentImg1} /></figure></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-PS4 mt-10 md:mt-20 px-5 max-w-[1440px] mx-auto">
                    <div className="container">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-18 lg:gap-36">
                            <div className="basis-1/2">
                                <h1 className='text-center md:text-left'>If we can find the right way to teach people about wildlife, they will be touched.</h1>
                            </div>
                            <div className="basis-1/2">
                                <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto iure doloremque natus. Quae, obcaecati repudiandae magni a repellendus dicta cum ullam porro corrupti nobis, libero officia dolore accusamus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-PS5 mt-10 md:mt-20 px-5 ">
                    <div className="container">
                        <div className="border">
                            <Parallax/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-PS6 mt-10 md:mt-20 px-5 max-w-[1440px] mx-auto">
                    <div className="container">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:basis-1/2">
                                <figure><Image src={contentImg1} /></figure>
                            </div>
                            <div className="md:basis-1/2 flex flex-col gap-8">
                                <h1 className='text-center md:text-left'>A comprehensive suite of payment products fully integrated.</h1>
                                <p className='text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque delectus dignissimos at enim! Corporis aspernatur, doloribus necessitatibus numquam quam repudiandae officiis! Temporibus nulla pariatur laborum tenetur quibusdam amet magnam aperiam.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-PS6 mt-10 md:mt-20 max-w-[1440px] mx-auto">
                    <div class="designYurTrip">
                        <div className="container">
                            <div class="content py-24 md:py-48 lg:py-72">
                                <div className="flex flex-col gap-4 md:gap-8 lg:gap-18">
                                    <h1 className="text-center">Let us design your trip of a lifetime</h1>
                                    <span className="flex justify-center items-center gap-5 cursor-pointer">Plan My Trip <Image src={arrow} alt="arrow" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-PS7 my-10 md:my-20 px-5 max-w-[1440px] mx-auto">
                    <div className="container">
                        <div className="flex flex-col gap-8 md:gap-12">
                            <div className="flex flex-col gap-8">
                                <h1 className='text-center'>Transforming Dreams into Reality</h1>
                                <p className='text-center max-w-[656] mx-auto'>This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs. It encompasses a range of services and features designed to streamline payment processes and enhance efficiency.</p>
                            </div>

                            <div className="flex gap-3 md:gap-6">
                                <div className="basis-1/2"><figure><Image src={contentImg1} /></figure></div>
                                <div className="basis-1/2"><figure><Image src={contentImg2} /></figure></div>
                            </div>

                            <div className="text-center">
                                <p className='text-center max-w-[956px] mx-auto'>
                                This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs. It encompasses a range of services and features designed to streamline payment processes and enhance efficiency.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </Layout>
    )
}

export default index