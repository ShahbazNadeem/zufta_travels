"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const ProtectedRoute = ({ children }) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="h-screen flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <Link href="/login" className="text-xl font-bold text-blue-600">
          Go to login page
        </Link>
        <Link href="/" className="text-xl font-bold text-blue-600">
          Go to Home
        </Link>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
