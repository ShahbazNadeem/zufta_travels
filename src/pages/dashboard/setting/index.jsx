import React from 'react'
import Sidebar from "@/components/Sidebar";

const index = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">Your settings content goes here</div>
    </div>
  )
}

export default index