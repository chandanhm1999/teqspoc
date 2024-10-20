"use client";

import Abc from "@/components/home/aboutcompany/Abc";
import Batchess from "@/components/home/batchess/Batchess";
import Blog from "@/components/home/blog/Blog";
import Demo from "@/components/home/demo/Demo";
import HeroBanner from "@/components/home/heroSlide/HeroBanner";
import Timeline from "@/components/home/hometimeline/Timeline";
import Instruct from "@/components/home/instruct/Instruct";
import RenderCourse from "@/components/home/renderCourse/RenderCourse";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <RenderCourse />
      <Batchess />
      <Abc />
      <Timeline />
      <Blog />
      <Instruct />
      <Demo />
    </main>
  );
}
