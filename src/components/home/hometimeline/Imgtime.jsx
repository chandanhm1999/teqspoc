import React from "react";

const TimeLine = [
    {
      Logo: "/assets/TimeLineLogo/Logo1.svg",
      Heading: "Leadership",
      Description: "Committed to ensuring the company's success.",
    },
    {
      Logo: "/assets/TimeLineLogo/Logo2.svg",
      Heading: "Responsibility",
      Description: "Our students' success is our foremost concern.",
    },
    {
      Logo: "/assets/TimeLineLogo/Logo3.svg",
      Heading: "Flexibility",
      Description: "The skill to adapt quickly is key.",
    },
    {
      Logo: "/assets/TimeLineLogo/Logo4.svg",
      Heading: "Solve the problem",
      Description: "Develop solutions through coding.",
    },
  ];


const Imgtime = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-black bg-blue-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-black shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-yellow-600 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-richblue-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10+</h1>
              <h1 className="text-white text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">6+</h1>
              <h1 className="text-white text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src="/assets/s/TimelineImage.jpg"
            alt="timelineImage"
            className="shadow-black shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Imgtime;
