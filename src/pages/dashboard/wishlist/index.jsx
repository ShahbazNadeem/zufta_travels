import React from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import { premiumTourPickup } from '@/jsonData/Data'
import TourCards from '@/components/TourCards';

const index = () => {
  return (
    <div className="container">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <DashboardTopBar />
          <TourCards data={premiumTourPickup} />
        </div>
      </div>
    </div>
  )
}

export default index