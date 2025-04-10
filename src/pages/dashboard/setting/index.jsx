import React from 'react'
import Sidebar from "@/components/dashboard/Sidebar";

const index = () => {
  return (
    <div className='container'>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">
          <div className='bg-white p-10 border'>
            <h2>Change Password</h2>
            <div className='flex flex-wrap gap-8'>
              <div className="w-[47%]">
                <label className="block text-gray-800 font-medium mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-[47%] ">
                <label className="block text-gray-800 font-medium mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-[47%]">
                <label className="block text-gray-800 font-medium mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            Notification
            <span>toogle</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index