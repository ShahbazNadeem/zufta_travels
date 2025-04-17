import React, { useEffect } from 'react'
import Image from 'next/image';
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import dashboardUserImg from "@/images/dashboard/dashboardUserImg.png"
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const index = () => {

  return (
    <ProtectedRoute ProtectedRoute >
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="container">
            <div className="px-5 lg:ps-10 flex flex-col gap-1">
              <DashboardTopBar />
              <div className='bg-white p-10'>
                <form className='flex flex-col gap-4 md:gap-8'>
                  <div className='flex justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-5'>
                      <div className='rounded-xl w-[100px] h-[100px]'><fiqure><Image src={dashboardUserImg} className='w-full h-auto rounded-full' /></fiqure></div>
                      <div className='flex flex-col gap-3'>
                        <span className='font-marcellus text-[20px]'>Alexa Rawles</span>
                        <span className='text-gray-400'>alexarwales@gmail.com</span>
                      </div>
                    </div>

                    <div className='flex justify-end h-fit w-[100%] sm:w-fit'><button>Save</button></div>
                  </div>
                  <div className='flex flex-wrap gap-4 md:gap-8'>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">User Name</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Mobile Number</label>
                      <input
                        type="number"
                        placeholder="Enter Your Mobile Number"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Paypal Email</label>
                      <input
                        type="email"
                        placeholder="Enter Paypal Email"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Language</label>
                      <input
                        type="text"
                        placeholder="Select Language"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Address</label>
                      <input
                        type="text"
                        placeholder="Enter Your Address"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">City</label>
                      <input
                        type="text"
                        placeholder="Enter Your City"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Country</label>
                      <input
                        type="text"
                        placeholder="Enter Country"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">Zip code/Postal code</label>
                      <input
                        type="number"
                        placeholder="Enter Your Zip code/Postal code"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full md:w-[47%]">
                      <label className="block text-gray-800 font-medium mb-2">State/Province/Region</label>
                      <input
                        type="text"
                        placeholder="Enter Your State/Province/Region"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-[99%]">
                      <label className="block text-gray-800 font-medium mb-2">About Yourself</label>
                      <textarea
                        class="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none" placeholder="Write About Yourself" id="plan" name="plan" required>
                      </textarea>
                    </div>
                  </div>
                  <div className=''></div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default index