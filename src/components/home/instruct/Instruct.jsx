import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import TextLight from "./TextLight";
import Image from "next/image";

const Instruct = () => {
  return (
    <div className="relative mx-auto my-8 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-6 bg-richblack-900 text-black">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[50%]">
          <Image
            src="/assets/instruct/Instructor.jpg"
            alt="Instructor"
            width={610}
            height={503}
            className="shadow-black shadow-[-20px_-20px_0_0]"
          />
        </div>
        <div className="lg:w-[50%] flex gap-8 flex-col">
          <h1 className="lg:w-[50%] text-4xl font-semibold">
            Join Our Team of
            <TextLight text={"Instructors"} />
          </h1>
          <p className="font-medium text-[16px] text-justify text-richblack-300 w-[90%]">
            Inspire and educate millions of students worldwide with TeqSpoc.
            Share your passion and expertise, and we&apos;ll equip you with the
            resources to make an impact.
          </p>
          <div className="w-fit">
            <Button linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Begin Your Teaching Journey Today
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruct;
