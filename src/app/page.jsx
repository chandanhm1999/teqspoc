import Abc from "@/components/home/aboutcompany/Abc";
import Batchess from "@/components/home/batchess/Batchess";
import Blog from "@/components/home/blog/Blog";
import Course from "@/components/home/course/Course";
import Demo from "@/components/home/demo/Demo";
import HeroBanner from "@/components/home/heroSlide/HeroBanner";
import Timeline from "@/components/home/hometimeline/Timeline";
import Instruct from "@/components/home/instruct/Instruct";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <Course />
      <Batchess />
      <Abc />
      <Timeline />
      <Blog />
      <Instruct />
      <Demo />
    </main>
  );
}
