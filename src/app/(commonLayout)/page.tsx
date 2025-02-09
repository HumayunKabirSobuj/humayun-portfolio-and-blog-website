import AboutMe from "@/components/views/AboutMe";
import Banner from "@/components/views/Banner";
import MyEducation from "@/components/views/MyEducation";
import MySkills from "@/components/views/MySkills";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutMe/>
      <MySkills/>
      <MyEducation/>
      
    </div>
  );
}
