'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector(state => state.auth);

  // useEffect(() => {
  //   if (!user) router.push('/login');
  // }, [user]);

  if (!user) {
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
