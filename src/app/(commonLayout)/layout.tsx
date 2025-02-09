import Menubar from "@/components/shared/Menubar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <Menubar/>
    {children}</div>;
};

export default CommonLayout;
