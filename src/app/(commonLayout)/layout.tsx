import Footer from "@/components/shared/Footer";
import Menubar from "@/components/shared/Menubar";
import { authOptions } from "../utils/authOptions";
import { getServerSession } from "next-auth";
import { Toaster } from "sonner";

const CommonLayout = async({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full">
      <Menubar session={session}/>
      <div className="min-h-screen mt-20 ">{children}<Toaster /></div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
