'use client'
import React, { useState } from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const index = () => {
    const [add, setAdd] = useState('');
    const handleAdded = (e)=>{
    setAdd(e.target.value);
    }
    const handleClick = ()=>{
        console.log(add, 'added')
    }
 
    return (
        <ProtectedRoute>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <div className="container">
                        <div className="px-5 lg:ps-10 flex flex-col gap-1">
                            <DashboardTopBar />
                            <div>
                                <h2 className='text-center'>Admin</h2>

                                <div>
                                    <input type="text" value={add} onChange={handleAdded} className='border-2 border-black p-2 rounded-2xl w-[90%]' />
                                    <button className='mx-2' onClick={handleClick}>Add</button>
                                </div>
                                <div>
                                    <ul>
                                    {/* {add?.map((items)=>{
                                        return(
                                            <li>{items.title}</li>
                                        )
                                    })} */}
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default index