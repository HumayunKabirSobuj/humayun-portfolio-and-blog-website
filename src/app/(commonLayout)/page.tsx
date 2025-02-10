import AboutMe from "@/components/views/AboutMe";
import Banner from "@/components/views/Banner";
import ContactMe from "@/components/views/ContactMe";
import MyEducation from "@/components/views/MyEducation";
import MyProjects from "@/components/views/MyProjects";
import MySkills from "@/components/views/MySkills";
import RobotAnimation from "@/components/views/RobotAnimation";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutMe/>
      <RobotAnimation/>
      <MySkills/>
      <MyEducation/>
      <MyProjects/>
      <ContactMe/>
      
    </div>
  );
}
