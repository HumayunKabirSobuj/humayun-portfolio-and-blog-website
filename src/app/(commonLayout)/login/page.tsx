"use client"
import React from 'react';

const LoginComponent: React.FC = () => {
  return (
    <div className=" bg-gray-900 flex items-center  flex-col justify-start p-4">
        <div className=" pb-5 ">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block lg:pt-16 pt-8">
          Welcome <span className="text-[#64B5F6]">Back</span>
        </h1>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg md:w-[60%] w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login Here</h2>
        <div className="space-y-4">
        <button
            className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            onClick={() => {
              // Handle Google login
              console.log('Login with Google');
            }}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
              />
            </svg>
            Login with Google
          </button>
          <button
            className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            onClick={() => {
              // Handle GitHub login
              console.log('Login with GitHub');
            }}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.024 2.87.782.092-.608.357-1.024.649-1.258-2.27-.258-4.655-1.14-4.655-5.07 0-1.12.4-2.037 1.07-2.754-.107-.26-.465-1.307.1-2.72 0 0 .872-.277 2.85 1.052.83-.23 1.706-.346 2.584-.346.877 0 1.796.116 2.584.346 1.977-1.329 2.85-1.052 2.85-1.052.567 1.413.208 2.46.1 2.72.67.717 1.07 1.635 1.07 2.754 0 3.94-2.395 4.807-4.68 5.06.368.316.69.948.69 1.914 0 1.383-.012 2.498-.012 2.837 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Login with GitHub
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;