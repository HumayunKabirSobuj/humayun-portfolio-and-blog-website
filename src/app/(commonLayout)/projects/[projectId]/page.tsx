import { getAllProject } from "@/app/utils/actions/projectManagement";
import { TProject } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
export const metadata: Metadata = {
  title: "Project Details",
};

interface IProps {
  params: Promise<{
    projectId: string;
  }>;
}
const ProjectDetailsPage = async ({ params }:IProps) => {
  const projects = await getAllProject();

  const projectId = (await params).projectId

  const matchProjects: TProject | undefined = projects?.data.find(
    (project: TProject) => project._id === projectId
  );

  if (!matchProjects) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-800 shadow-2xl text-white p-6 rounded-xl w-5/6 mx-auto flex flex-col gap-6 my-5">
      <div className=" flex items-center justify-end">
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
              Project <span className="text-[#64B5F6]">Details</span>
            </h1>
          </div>
        </div>
        <div>
          <Link href={"/projects"}>
            <button className="text-2xl border-2 rounded-full">
              <div className="p-2">
                <ImCross />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:flex hidden text-blue-200 lg:gap-7 gap-1 lg:ml-7">
        <Link href={matchProjects?.live_link}>
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Live Site
            <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
          </p>
        </Link>

        <Link href={matchProjects.client_link} target="_blank">
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Client Code <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
          </p>
        </Link>
        <Link href={matchProjects.server_link} target="_blank">
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Server Code <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
          </p>
        </Link>
      </div>
      {/* mobile */}
      <div className="flex lg:hidden text-blue-200 justify-evenly w-full ">
        <Link href={`/projects/${matchProjects?._id}`}>
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Details
            <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
          </p>
        </Link>
        <Link href={matchProjects?.live_link} target="_blank">
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Live
            <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
          </p>
        </Link>
        <Link href={matchProjects.client_link} target="_blank">
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Client
            <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
          </p>
        </Link>
        <Link href={matchProjects.server_link} target="_blank">
          <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
            Server
            <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
          </p>
        </Link>
      </div>

      {/* Blog Image */}
      <div className="w-full h-[300px] relative">
        {matchProjects.image ? (
          <Image
            className="object-cover rounded-lg"
            src={matchProjects.image}
            alt="Blog Image"
            fill
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
            No Image Available
          </div>
        )}
      </div>

      {/* Blog Details */}
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-3xl font-bold">{matchProjects.title}</h2>
        <p className="text-sm text-gray-300 pt-2">
          {matchProjects.long_description}
        </p>
        <p className="pt-2 font-semibold text-white">
          Technology Used : {matchProjects?.technology}
        </p>
        <p className="text-lg font-semibold text-green-400 pt-3">
          Author: {matchProjects.author?.name || "Unknown"}
        </p>
        <p className="text-lg font-semibold text-green-400 pt-1">
          Email: {matchProjects.author?.email || "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
