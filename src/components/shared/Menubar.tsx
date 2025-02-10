"use client";
import { useState } from "react";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};
const Menubar = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition-colors"
        >
          HUMAYUN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {["/", "/projects", "/blog", "/contact"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`font-bold hover:text-gray-300 transition-colors ${
                pathname === path ? "text-green-500 underline" : ""
              }`}
            >
              {path.replace("/", "") || "Home"}
            </Link>
          ))}

          {
            session?.user ? <Link
            href="/dashboard"
            className={`font-bold hover:text-gray-300 transition-colors ${
              pathname === "/dashboard" ? "text-green-500 underline" : ""
            }`}
          >
            Dashboard
          </Link> :<Link
              href="/login"
              className={`font-bold hover:text-gray-300 transition-colors ${
                pathname === "/login" ? "text-green-500 underline" : ""
              }`}
            >
              Login
            </Link>
          }

          {
            session?.user && <button
            onClick={() => signOut()}
            className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200"
          >
            Logout
          </button>
          }
        
          <button className="bg-gradient-to-r from-black to-gray-500 text-white px-4 py-1 rounded-md hover:opacity-90 transition-opacity">
            <span className="flex items-center gap-1">
              Resume <HiDownload className="text-md" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button - শুরু থেকেই দৃশ্যমান */}
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors z-50"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["/", "/projects", "/blog", "/contact"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`text-2xl font-bold ${
                pathname === path
                  ? "text-green-500"
                  : "text-white hover:text-gray-400"
              }`}
              onClick={toggleMenu}
            >
              {path.replace("/", "") || "Home"}
            </Link>
          ))}

          <button className="mt-8 bg-gradient-to-r from-black to-gray-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
            <span className="flex items-center gap-1">
              Resume <HiDownload className="text-lg" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
