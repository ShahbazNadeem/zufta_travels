import React, { useState,useEffect } from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from "next/link";

const index = () => {
  const { user } = useSelector(state => state.auth);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    // if (!user) router.push('/login');
  }, [user]);

  if (!user) {
    return (
      <div className="h-screen flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <Link href='/login' className="text-xl font-bold text-blue-600">go to login page</Link>
        <Link href='/' className="text-xl font-bold text-blue-600">go to Home</Link>
      </div>
    );
  }

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className='container'>
          <div className="px-5 lg:ps-10 flex flex-col gap-1">
            <DashboardTopBar />
            <div className='bg-white p-10'>
              <div className='flex justify-between flex-wrap gap-8'>
                <h2>Change Password</h2>
                <button>Save</button>
              </div>
              <div className='flex flex-wrap gap-8 mt-10'>
                <div className="w-full md:w-[47%]">
                  <label className="block text-gray-800 font-medium mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter Current Password"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full md:w-[47%]">
                  <label className="block text-gray-800 font-medium mb-2">Re-Enter Password</label>
                  <input
                    type="password"
                    placeholder="Enter Current Password"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full md:w-[47%]">
                  <label className="block text-gray-800 font-medium mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter Current Password"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center bg-white p-10'>
              <h3>Notification</h3>
              <span onClick={handleToggle}
                className={`w-16 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${isToggled ? "bg-blue-400" : "bg-gray-300"
                  }`}>
                <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isToggled ? "translate-x-8" : ""
                  }`} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index