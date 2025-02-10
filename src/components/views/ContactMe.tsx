"use client";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import SocialIcons from "../SocialIcons/SocialIcons";

const ContactMe = () => {
 
  return (
    <div>
      <div className="flex items-center justify-center  ">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block lg:pt-16 pt-8">
          Contact <span className="text-[#64B5F6]">Me</span>
        </h1>
      </div>
      <div className=" mx-auto  text-white min-h-screen  px-5 py-5 flex justify-center items-center">
        <div className="flex flex-col gap-10 md:flex-row w-full item-center h-auto justify-center ">
          <div className="flex gap-7 flex-col w-full">
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <IoLogoWhatsapp className="mt-1" />
              <p>+8801747477746</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <FaEnvelope className="mt-1" />
              <p>humayunkabir506034@gmail.com</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <IoCall className="mt-1" />
              <p>+8801747477746</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <FaLocationDot className="mt-1" />
              <p>Zirabo, Ashulia, Savar, Dhaka</p>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex gap-2 item-center"
            >
              <SocialIcons />
            </div>
          </div>
          <div className="w-full">
            <form className="grid grid-cols-2 gap-5">
              <input
                data-aos-duration="1000"
                data-aos="fade-up"
                className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2"
                required
                type="text"
                name="firstName"
                placeholder="Name"
              />

              <input
                data-aos-duration="1000"
                data-aos="fade-up"
                className="block px-3 py-2 w-full rounded-lg bg-gray-800"
                required
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
              <input
                data-aos-duration="1000"
                data-aos="fade-up"
                className="block px-3 py-2 w-full rounded-lg bg-gray-800"
                required
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <input
                data-aos-duration="1000"
                data-aos="fade-up"
                className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2"
                required
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <textarea
                data-aos-duration="1000"
                data-aos="fade-up"
                className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800"
                required
                name="message"
                placeholder="Your Message"
              />
              <div
                data-aos-duration="1000"
                data-aos="fade-up"
                className="flex col-span-2 justify-center item-center "
              >
                <button
                  type="submit"
                  className="bg-gradient-to-r from-black to-gray-500 text-white px-7 py-2 rounded-md hover:opacity-90 transition-opacity text-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
