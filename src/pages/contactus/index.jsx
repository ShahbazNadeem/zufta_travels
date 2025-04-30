import Accordian from '@/components/Accordian'
import Banner from '@/components/Banner'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React, { useState } from 'react'
import hands from '@/images/hands.png'
import happyFace from '@/images/happyFace.png'
import { accordianData } from '@/jsonData/Data'
import Head from "next/head";

const index = () => {
  const [formdata, setFormData] = useState({
    FirstName: '',
    lastname: '',
    email: '',
    message: '',
    subject:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  const handleForm = async (e) => {
    e.preventDefault()
    console.log(formdata, 'res')
    try {
      const response = await axios.post('https://192.168.100.177:45455/api/Tours/Contact', formdata)
      console.log(response.data, 'res');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>

      <section>
        <div className="wrapper-C1">
          <Banner title='Contact' />
        </div>
      </section>

      <section>
        <div className="wrapper-C2 max-w-[1440px] mx-auto">
          <div className="container">
            <div className="flex lg:flex-row flex-col py-10 lg:py-16">
              <div className="basis-1/2 px-5 lg:px-10">
                <span className='flex items-center'>
                  <h2 className='font-marcellus me-3 lg:me-6'>Hello!</h2>
                  <figure><Image src={happyFace} /></figure>
                  <figure><Image src={hands} /></figure>
                </span>
                <p className='mt-2 lg:mt-5'>You need to come at least once in your life</p>
                <form onSubmit={handleForm} className='flex flex-col gap-2 lg:gap-4 mt-8 lg:mt-14'>
                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="FirstName"
                      name="FirstName" required value={formdata.FirstName} onChange={handleChange} />
                      <label for="FirstName" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        First Name *
                      </label>
                    </div>
                    <div class="relative basis-1/2">
                      <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="lastname"
                        name="lastname" value={formdata.lastname} onChange={handleChange} required />
                      <label for="lastname" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Last Name *
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input type="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="email"
                        name="email" value={formdata.email} onChange={handleChange} required />
                      <label for="email" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Email address *
                      </label>
                    </div>
                    <div class="relative basis-1/2">
                      <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="subject"
                    name="subject" value={formdata.subject} onChange={handleChange} required />
                      <label for="subject" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Subject *
                      </label>
                    </div>
                  </div>

                  <div class="relative">
                    <textarea
                      class="block px-2.5 pb-2.5 pt-4 w-full h-[150px] text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48] placeholder-[#1A2B48]" placeholder="Tell us more about what you’re planning*" id="message" name="message" value={formdata.message} onChange={handleChange} required>
                    </textarea>
                  </div>

                  <button className='font-marcellus text-[16px] text-white w-full h-[46px] rounded-[30px] flex justify-center items-center px-[120px] py-[13px]'>Login</button>

                </form>
              </div>

              <div className="basis-1/2 px-10 mt-10 lg:mt-0 flex justify-center items-center">
                <Accordian data={accordianData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index