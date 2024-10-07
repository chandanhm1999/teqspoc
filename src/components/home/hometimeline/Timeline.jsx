import React from "react";
import Button from "./Button";
import TextLight from "./TextLight";
import Imgtime from "./Imgtime";

const Timeline = () => {
  return (
    <div className="mx-auto mt-2 sm:mt-10 md:mt-2 lg:mt-2 xl:mt-2 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
      {/* Job that is in Demand - Section 1 */}
      <div className=" flex flex-col justify-between gap-4 lg:mt-6 lg:flex-row lg:gap-0">
        <div className="text-2xl font-bold text-[#1F2937] lg:text-3xl xl:lg:text-3xl dark:text-white lg:w-[45%] ">
          Gain the skills you need{" "}
          <TextLight text={"for todays in-demand Jobs."} />
        </div>
        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
          <div className="text-[14px]">
            In the modern world, teQspoc sets its own standards. To stay
            competitive, you need more than just professional expertise.
          </div>
          <Button active={false} linkto={"/resources"}>
            <div className="">Learn More</div>
          </Button>
        </div>
      </div>

      {/* Timeline Section - Section 2 */}
      <Imgtime />
    </div>
  );
};

export default Timeline;
