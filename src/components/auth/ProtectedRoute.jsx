'use client';

import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
import Link from 'next/link';

const ProtectedRoute = ({ children }) => {
  // const { user } = useSelector(state => state.auth);
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setLocalUser(JSON.parse(userData));
      }
    }, []);

  if (!localUser) {
    return (
      <div className="h-screen flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <Link href='/login' className="text-xl font-bold text-blue-600">Go to login page</Link>
        <Link href='/' className="text-xl font-bold text-blue-600">Go to Home</Link>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
