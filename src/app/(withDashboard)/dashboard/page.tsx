import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log("session =>", session);
  const user = session?.user;
  console.log(user);
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Left Side - Profile Card */}
        <div className="w-full lg:w-1/4">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg lg:min-h-screen">
            <div className="flex flex-col items-center">
              {/* Profile Image */}

              <Image
                src={user?.image as string}
                alt="profile image"
                height={120}
                width={120}
                className="rounded-full"
              />

              {/* User Info */}
              <h2 className="text-white text-xl font-bold mb-2 ">{user?.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{user?.email}</p>

              {/* Stats */}
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-gray-300 text-sm">Blog Posts</span>
                  <span className="text-white font-bold">12</span>
                </div>
                <div className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-gray-300 text-sm">Projects</span>
                  <span className="text-white font-bold">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-3/4 space-y-6">
          {/* Add Blog Post Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-4">
              Add New Blog Post
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Content
                </label>
                <textarea
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Write your post content..."
                ></textarea>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Publish Post
              </button>
            </form>
          </div>

          {/* Add Project Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-4">
              Add New Project
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Project Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      className="opacity-0 absolute w-full h-full cursor-pointer"
                    />
                    <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors">
                      Choose File
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Description
                </label>
                <textarea
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Add Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
