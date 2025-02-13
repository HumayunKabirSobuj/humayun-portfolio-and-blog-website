import { getAllBlog } from "@/app/utils/actions/blogManagement";
import { TBlog } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "HUMAYUN | Blog",
 
};

const BlogPage = async () => {
  const blogs = await getAllBlog();
  //   console.log(blogs.data);
  return (
    <div>
      <div className="flex items-center justify-center lg:pb-16 pb-5">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
          All <span className="text-[#64B5F6]">Blogs</span>
        </h1>
      </div>
      <div className="space-y-5 lg:space-y-8">
        {blogs?.data?.map((blog: TBlog) => (
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
                <div className="flex text-blue-200 lg:gap-7 gap-4 lg:mr-7 ">
                  <Link
                    href={`/blog/${blog?._id}`}
                  >
                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                      Details{" "}
                      <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
              <p className="text-justify pt-5 text-white">
                {blog?.short_description}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
