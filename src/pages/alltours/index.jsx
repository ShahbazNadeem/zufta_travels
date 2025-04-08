'use client';

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Banner from '@/components/Banner'
import NewsAndTips from '@/components/NewsAndTips'
import { byAirTourPickup } from '@/jsonData/Data'
import TourCards from "@/components/TourCards";
import { FiChevronDown } from "react-icons/fi";
import Image from 'next/image';
import Vector from '@/images/Vector.png'
// import FilterBar from '@/components/FilterBar';
const index = () => {
    const priceOptions = ['Low to High', 'High to Low'];
    const categoryOptions = ['Private', 'Corporate', 'By Air'];
    const reviewOptions = ['Top Rated', 'Most Reviewed'];
    const placeOptions = ['Naran', 'Hunza', 'Swat', 'Neelam'];

    return (
        <Layout>
            <Head>
                <title>All Tours</title>
            </Head>

            <section>
                <div className="wrapper-All1">
                    <Banner title='All Tours' />
                </div>
            </section>

            <section>
                <div className="wrapper-All2 px-5">
                    <div className="container">

                        <div className="flex justify-between items-center py-3 border">

                            <ul className='flex gap-8 flex-wrap'>
                                <li className='flex gap-5 items-center'><span>sort by price</span> <FiChevronDown /></li>
                                <li className='flex gap-5 items-center'><span>sort by categories</span> <FiChevronDown /></li>
                                <li className='flex gap-5 items-center'><span>sort by reviews</span> <FiChevronDown /></li>
                                <li className='flex gap-5 items-center'><span>sort by places</span> <FiChevronDown /></li>
                            </ul>
                            <figure className='hidden lg:block'><Image src={Vector} /></figure>
                        </div>
                    </div>

                </div>

                {/* <FilterBar /> */}
                {/* <div className=""></div>
                <div className=""></div> */}
            </section>

            <section>
                <div className='wrapper-All3 pt-10 md:pt-20 px-5'>
                    <div className='container'>
                        <div className="flex flex-col gap-4 md:gap-8 ">
                            <div className='flex flex-col gap-4 md:gap-8 '>
                                <div className='flex items-center'>
                                    <h2 className='min-w-fit'>Private Tours</h2>
                                    <div className="ml-5 h-[2px] bg-gray-300 w-4/5"></div>
                                </div>
                                <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.</p>
                            </div>

                            <TourCards data={byAirTourPickup} />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='wrapper-All4 pt-10 md:pt-20'>
                    <div className='container'>
                        <div className="flex flex-col gap-4 md:gap-8 ">
                            <div className='flex flex-col gap-4 md:gap-8 px-5'>
                                <div className='flex items-center'>
                                    <h2 className='min-w-fit'>Corporate Tours</h2>
                                    <div className="ml-5 h-[2px] bg-gray-300 w-4/5"></div>
                                </div>
                                <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.</p>
                            </div>

                            <TourCards data={byAirTourPickup} />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='wrapper-All5 py-10 md:py-20'>
                    <div className='container'>
                        <div className="flex flex-col gap-4 md:gap-8 ">
                            <div className='flex flex-col gap-4 md:gap-8 px-5'>
                                <div className='flex items-center'>
                                    <h2 className='min-w-fit'>By Air Tours</h2>
                                    <div className="ml-5 h-[2px] bg-gray-300 w-4/5"></div>
                                </div>
                                <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.</p>
                            </div>

                            <TourCards data={byAirTourPickup} />
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default index