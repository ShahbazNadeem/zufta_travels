'use client';

import {useEffect} from "react";
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Banner from '@/components/Banner'
import NewsAndTips from '@/components/NewsAndTips';
import { newsandtips } from "@/jsonData/Data";
import { byAirTourPickup } from '@/jsonData/Data'
import TourCards from "@/components/TourCards";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirTours } from '@/redux/tours/toursSlice';

const index = () => {
  const dispatch = useDispatch();
    const { tours, status, error } = useSelector((state) => state.tours);
    console.log(tours,"by Air")
  
    useEffect(() => {
        dispatch(fetchAirTours());
      }, [dispatch]);

  return (
    <Layout>
      <Head>
        <title>By Air</title>
      </Head>

      <section>
        <div className="wrapper-BA1">
          <Banner title='By Air' />
        </div>
      </section>

      <section>
        <div className='wrapper-BA2 py-10 md:py-20'>
          <div className='container'>
            <div className="flex flex-col gap-4 md:gap-8 ">
              <div className='flex flex-col gap-4 md:gap-8 px-5'>
                <div className='flex items-center'>
                  <h2 className='min-w-fit'>By Air Tours</h2>
                  <div className="ml-5 h-[2px] bg-gray-300 w-4/5"></div>
                </div>
                <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.</p>
              </div>

              <TourCards data={tours} />
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-BA3 pt-10 md:pt-20 bg-white">
          <div className="container">
            <div className="">
              <NewsAndTips newsandtips={newsandtips} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
