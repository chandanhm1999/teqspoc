import Abc from "@/components/home/aboutcompany/Abc";
import Course from "@/components/home/course/Course";
import HeroBanner from "@/components/home/heroSlide/HeroBanner";
import Timeline from "@/components/home/hometimeline/Timeline";
import Instruct from "@/components/home/instruct/Instruct";
import SectionTwo from "@/components/home/sectwo/SectionTwo";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <SectionTwo />
      <Abc />
      <Course />
      <Timeline />
      <Instruct />
    </main>
  );
}
