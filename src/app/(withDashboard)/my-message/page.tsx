import { TMessage } from "@/types/types";
import axios from "axios";
import { getServerSession } from "next-auth";

const MyMessagePage = async () => {

  const res = await axios.get("http://localhost:8080/api/message");
  const allMessage = await res.data;
  //   console.log(allMessage);

  const session = await getServerSession();
  //   console.log(session);

  const myMessages = allMessage?.data.filter(
    (message: TMessage) => message?.email === session?.user?.email
  );

  //   console.log('My Messages =>', myMessages);

  return (
    <div>
      <div className="flex items-center justify-center pb-5 mb-10 pt-5">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block ">
          My <span className="text-[#64B5F6]">sending message</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-10 px-5">
        {myMessages?.map((message: TMessage) => (
          <div
            key={message?._id}
            className=" w-full bg-white bg-opacity-75 rounded-lg shadow-md overflow-hidden h-[250px]"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
               Your Name : {message?.name}
              </h3>
              <p className="text-gray-600">Subject : {message?.subject}</p>
              <div className="mt-4 text-gray-500">
                <p>
                  <strong>Your Email : </strong> {message?.email}
                </p>
                <p>
                  <strong>Your Phone : </strong> {message?.phone}
                </p>
              </div>
              <div className="mt-4 text-gray-700">
                <p>
                  <strong>Message:</strong>
                </p>
                <p>{message?.message.slice(0,250)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMessagePage;
