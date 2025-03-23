import Banner from '@/components/Banner'
import Layout from '@/components/layout/Layout'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <section>
        <div className="wrapper-C1">
          <Banner title='Contact' link='contact/cj' />
        </div>
      </section>

      <section>
        <div className="wrapper-C2">
          <div className="container">
            <div className="flex flex-row">
              <div className="basis-1/2 border ">
                <span className='font-marcellus'>Helo!</span> <span className='text-2xl'>😀</span> ✋🏻🤚🏻
                <p>You need to come at least once in your life</p>
                <form className='flex flex-col gap-4'>
                  <div className="flex flex-row gap-4">
                    <div class="relative">
                      <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="firstName" name="firstName" required />
                      <label for="firstName" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        First Name *
                      </label>
                    </div>
                    <div class="relative">
                      <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="lastName" name="lastName" required />
                      <label for="lastName" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Last Name *
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div class="relative">
                      <input type="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="email" name="email" required />
                      <label for="email" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Email address *
                      </label>
                    </div>
                    <div class="relative">
                      <input type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]" placeholder=" " id="subject" name="subject" required />
                      <label for="subject" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Subject *
                      </label>
                    </div>
                  </div>

                  <div class="relative">
                    <textarea
                      class="block px-2.5 pb-2.5 pt-4 w-full h-[150px] text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48]" placeholder=" " id="plan" name="plan" required>
                    </textarea>
                    <label
                      for="plan" class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Tell us more about what you’re planning*
                    </label>
                  </div>

                  <button className='font-marcellus text-[16px] text-white w-full h-[46px] rounded-[30px] flex justify-center items-center px-[120px] py-[13px]'>Login</button>

                </form>
              </div>
              <div className="basis-1/2">form</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index