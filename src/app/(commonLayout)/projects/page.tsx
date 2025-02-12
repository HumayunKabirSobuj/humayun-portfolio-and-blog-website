import { getAllProject } from "@/app/utils/actions/projectManagement";
import { TProject } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const ProjectsPage = async () => {
  const projects = await getAllProject();

//   console.log(projects?.data);
  return (
    <div>
      <div className="flex items-center justify-center lg:pb-16 pb-5">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
          All <span className="text-[#64B5F6]">Projects</span>
        </h1>
      </div>
      <div className="space-y-5 lg:space-y-8 mb-10">
        {projects?.data?.map((blog: TProject) => (
          <div
            key={blog._id}
            className="flex gap-4 flex-col lg:flex-row lg:px-10 px-3 h-[220px]"
          >
            <div className="w-full lg:w-[30%] overflow-hidden rounded-xl flex items-center justify-center  ">
              <Image
                className="object-cover rounded-xl h-full "
                src={blog?.image}
                alt="Medcamp Image"
                height={800}
                width={500}
              />
            </div>
            <div className="w-full lg:w-[70%]">
              <div className="flex  items-center lg:justify-between gap-4 flex-col md:flex-row ">
                <div className="flex items-center  gap-5">
                  <h2 className="text-2xl text-center md:text-left font-semibold text-white">
                    {blog?.title}
                  </h2>
                </div>
                <div className="lg:flex hidden text-blue-200 lg:gap-7 gap-1 lg:ml-7">
                  <Link
                    href={`/projects/${blog?._id}`}
                   
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Details
                      <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
                    </p>
                  </Link>
                  <Link
                    href={blog?.live_link}
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Live Site{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
                    </p>
                  </Link>
                  <Link
                    href={blog.client_link}
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Client Code{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
                    </p>
                  </Link>
                  <Link
                    href={blog.server_link}
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Server Code{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
                    </p>
                  </Link>
                </div>
                {/* mobile */}
                <div className="flex lg:hidden text-blue-200 justify-evenly w-full ">
                  <Link
                    href={`/projects/${blog?._id}`}
                    
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Details 
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                  <Link
                     href={blog?.live_link}
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Live 
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                  <Link
                    href={blog.client_link}
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Client 
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                  <Link
                   href={blog.server_link}
                    target="_blank"
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Server 
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
              <p className="text-justify pt-5 text-white">
                {blog?.short_description}
              </p>

               <p className="pt-2 font-semibold text-white">
                Technology Used : {blog?.technology}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
