import React from 'react'
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const index = () => {
    return (
        <ProtectedRoute>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <div className="container">
                        <div className="px-5 lg:ps-10 flex flex-col gap-1">
                            <DashboardTopBar />
                            <div classname='flex'>
                            <div classname=''>Create User</div>
                            <div classname=''></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div classname=''></div>
            <div classname=''></div>
        </ProtectedRoute>
    )
}

export default index