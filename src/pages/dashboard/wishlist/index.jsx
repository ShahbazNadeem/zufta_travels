import React from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";

const index = () => {
  return (
    <div className="container">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <DashboardTopBar />
          Your wishlist content goes here
        </div>
      </div>
    </div>
  )
}

export default index