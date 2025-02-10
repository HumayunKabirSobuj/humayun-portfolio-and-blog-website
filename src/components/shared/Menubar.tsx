"use client";
import { useState } from "react";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Menubar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // console.log(pathname);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HUMAYUN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 md:items-center">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-green-500 underline"
                : "hover:text-gray-500 font-bold"
            }
          >
            Home
          </Link>
          <Link href="/projects" className={
              pathname === "/projects"
                ? "text-green-500 underline"
                : "hover:text-gray-500 font-bold"
            }>
            Projects
          </Link>
          <Link href="/blog" className={
              pathname === "/blog"
                ? "text-green-500 underline"
                : "hover:text-gray-500 font-bold"
            }>
            Blog
          </Link>
          <Link href="/contact" className={
              pathname === "/contact"
                ? "text-green-500 underline"
                : "hover:text-gray-500 font-bold"
            }>
            Contact
          </Link>
          <button
            className="hidden text-md font-bold lg:inline-block bg-gradient-to-r from-black to-gray-500 
          text-white px-4 py-1 rounded-md hover:opacity-90 transition bg-opacity-30"
          >
            <span className="flex justify-center items-center gap-1 text-dm">
              Resume <HiDownload className="text-md" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-green-500 underline"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-green-500 underline"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "text-green-500 underline"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-green-500 underline"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
