import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-[#f8fafc] to-white text-center">
    <h1 className="text-9xl font-black text-[#233D4C] opacity-10 select-none">404</h1>
    <div className="-mt-16">
      <h2 className="text-4xl font-extrabold text-[#233D4C] mb-4">Page Not Found</h2>
      <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#233D4C] text-white rounded-full font-bold shadow-lg hover:bg-[#c8a165] transition-all"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default ErrorPage;
