import { getAllBlog } from "@/app/utils/actions/blogManagement";
import { TBlog } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
export const metadata: Metadata = {
  title: "Blog Details",
};
const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  const blogs = await getAllBlog();

  const matchBlog: TBlog | undefined = blogs?.data.find(
    (blog: TBlog) => blog._id === params.blogId
  );

  if (!matchBlog) {
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
              Blog <span className="text-[#64B5F6]">Details</span>
            </h1>
          </div>
        </div>
        <div>
          <Link href={"/blog"}>
            <button className="text-2xl border-2 rounded-full">
              <div className="p-2">
                <ImCross />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Blog Image */}
      <div className="w-full h-[300px] relative">
        {matchBlog.image ? (
          <Image
            className="object-cover rounded-lg"
            src={matchBlog.image}
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
        <h2 className="text-3xl font-bold">{matchBlog.title}</h2>
        <p className="text-sm text-gray-300 pt-2">
          {matchBlog.long_description}
        </p>
        <p className="text-lg font-semibold text-green-400 pt-3">
          Author: {matchBlog.author?.name || "Unknown"}
        </p>
        <p className="text-lg font-semibold text-green-400 pt-1">
          Email: {matchBlog.author?.email || "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
