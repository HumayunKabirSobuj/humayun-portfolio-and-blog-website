import Footer from "@/components/shared/Footer";
import Menubar from "@/components/shared/Menubar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Menubar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
