import React from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";

const index = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ps-6">
        <div className="container">
          <DashboardTopBar />
          History Your main content goes here
        </div>
      </div>
    </div>
  )
}

export default index