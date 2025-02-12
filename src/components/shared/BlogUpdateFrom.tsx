"use client";

import { TBlog } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface BlogFromData {
  title: string;
  short_description: string;
  long_description: string;
}

export default function BlogUpdateFrom(blogData: Record<string, unknown>) {
  const blog = blogData?.blogData as TBlog;

  const { register, handleSubmit } = useForm<BlogFromData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<BlogFromData> = async (data) => {
    // console.log(data);

    const { short_description, long_description, title } = data;

    try {
      setLoading(true);

      const blogData = {
        blogId: blog._id,
        blogInfo: { title, short_description, long_description },
      };

      // console.log(blogData);

      const res = await axios.put(
        "http://localhost:8080/api/blogs/update-blog",
        blogData
      );
      console.log(res.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="w-[90%] mx-auto">
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          width={500}
          height={500}
          alt="loading"
          className="w-96 mx-auto"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col lg:flex-row p-4 gap-4 h-screen">
        {/* Left Side - Profile Card */}

        {/* Right Side - Content */}
        <div className="w-full mx-auto space-y-6  bg-gray-800 rounded-3xl">
          {/* Add Blog Post Section */}
          <div className=" rounded-lg shadow-lg  h-screen">
            <h3 className="text-white text-lg font-semibold mb-4 lg:px-8 px-3 pt-4">
              Update Your Blog
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  bg-gray-800 lg:px-8 px-3 rounded-3xl"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 ">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter blog title"
                    defaultValue={blog?.title}
                    {...register("title", { required: true })}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Short Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your blog description..."
                    {...register("short_description", { required: true })}
                    defaultValue={blog?.short_description}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Long Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your blog description..."
                    {...register("long_description", { required: true })}
                    defaultValue={blog?.long_description}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8  mb-2 text-center ">
                <button
                  type="submit"
                  className="lg:w-1/3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2  rounded-lg transition-colors"
                >
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
