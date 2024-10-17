import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import TextLight from "./TextLight";
import Image from "next/image";

const VideoInstruct = () => {
  return (
    <div className="relative mx-auto my-8 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-12 bg-richblack-900 p-8 rounded-lg shadow-lg text-black">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-[50%] flex gap-6 flex-col">
          <h1 className="text-3xl font-bold leading-tight text-black/80">
            Elevate Your Coding Skills with
            <TextLight text={"Our Online Courses"} />
          </h1>
          <p className="font-medium text-[16px] text-black/60 leading-relaxed">
            Whether you&apos;re a beginner or an experienced developer, our courses 
            are designed to help you advance your skills. Our industry experts 
            bring years of knowledge and a passion for teaching to each course, 
            ensuring you get the most out of every lesson.
          </p>
          <ul className="list-disc pl-6 text-black/60 text-[16px]">
            <li>Comprehensive, up-to-date content</li>
            <li>Real-world projects and coding challenges</li>
            <li>Interactive lessons with instant feedback</li>
            <li>Supportive community and mentoring</li>
          </ul>
        </div>
        
        <div className="lg:w-[50%]">
          <Image
            src="/assets/VideoInstruct/codeingVideo.gif"
            alt="Instructor"
            width={610}
            height={503}
            className=""
          />
        </div>

      </div>
    </div>
  );
};

export default VideoInstruct;
