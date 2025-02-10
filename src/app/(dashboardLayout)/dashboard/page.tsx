"use client"
import React, { useState } from 'react';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out md:translate-x-0`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="block">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="block">Analytics</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="block">Settings</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#" className="block">Profile</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Navbar */}
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <h2 className="text-xl font-semibold">Welcome to Dashboard</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">John Doe</span>
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet libero vel arcu tincidunt tincidunt. Nulla facilisi.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;