import { authOptions } from "@/app/utils/authOptions";
import SingOutButton from "@/components/shared/SingOutButton";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const salesData = [60, 80, 45, 90, 75]; // চার্টের উচ্চতা

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Left Side - Profile Card */}
        <div className="w-full lg:w-1/4">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg lg:min-h-screen">
            <div className="flex flex-col items-center">
              <Image
                src={user?.image as string}
                alt="profile image"
                height={120}
                width={120}
                className="rounded-full"
              />

              <h2 className="text-white text-xl font-bold mb-2">
                {user?.name}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{user?.email}</p>

              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                  <span className="text-gray-300 text-sm">Blog Posts</span>
                  <span className="text-white font-bold">12</span>
                </div>
                <div className=" flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                  <span className="text-gray-300 text-sm">Projects</span>
                  <span className="text-white font-bold">8</span>
                </div>

                <div className="flex  justify-between items-center gap-5">
                  <Link href={"/"} className="w-full">
                    <div className=" bg-gray-700 px-4 py-2 rounded-lg cursor-pointer ">
                      <span className="text-gray-300 text-sm">Home</span>
                    </div>
                  </Link>
                  <SingOutButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="w-full lg:w-3/4 space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Total Revenue",
                value: "$12,345",
                color: "text-green-400",
                subtitle: "Last 30 days",
              },
              {
                title: "New Users",
                value: "1,234",
                color: "text-blue-400",
                subtitle: "Last 30 days",
              },
              {
                title: "Active Projects",
                value: "45",
                color: "text-purple-400",
                subtitle: "Currently Active",
              },
            ].map((card, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {card.title}
                </h3>
                <p className={`text-2xl font-bold ${card.color}`}>
                  {card.value}
                </p>
                <p className="text-gray-400 text-sm">{card.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-4">
              Monthly Performance
            </h3>
            <div className="h-64 w-full bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="bg-bg-gray-700 p-4 rounded-lg h-full w-full">
                {/* সিম্পল বার চার্ট */}
                <div className="h-full bg-gray-900  rounded-lg p-4">
                  <div className="flex h-full items-end justify-between">
                    {salesData.map((height, index) => (
                      <div
                        key={index}
                        className="w-12 bg-gray-700 mx-1 rounded-t-lg"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities Table */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-4">
              Recent Activities
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {[
                    {
                      activity: "Project Alpha Launch",
                      date: "2023-10-01",
                      status: "Completed",
                      color: "text-green-400",
                    },
                    {
                      activity: "Blog Post Published",
                      date: "2023-10-05",
                      status: "In Progress",
                      color: "text-yellow-400",
                    },
                    {
                      activity: "User Feedback Collected",
                      date: "2023-10-10",
                      status: "Pending",
                      color: "text-red-400",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {row.activity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {row.date}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${row.color}`}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
