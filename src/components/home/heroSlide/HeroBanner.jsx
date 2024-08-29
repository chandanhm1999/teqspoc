"use client";
import Carousel from "react-multi-carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link"; 
import { useState, useEffect } from "react";

const slidesContent = [
  {
    id: 1,
    img: "/assets/herohome/homeOne.jpg",
    alt: "teQspoc",
    title: "Unlock Your Tech Potential",
    description: [
      "Learn the basics: Courses in Scrum Master, Full Stack Development, Java, and Testing.",
      "Hands-on projects: Apply your skills with real-world challenges.",
      "Expert instructors: Learn from experienced professionals.",
    ],
    link: "/courses/technology",
  },
  {
    id: 2,
    img: "/assets/herohome/hometwo.jpg",
    alt: "teQspoc",
    title: "Master Cutting-Edge Tech",
    description: [
      "Stay current: Specialize in AWS, ASP.NET C#, and Microsoft.",
      "AI-powered learning: Courses with Generative AI components.",
      "Global certificates: Earn credentials recognized by employers.",
    ],
    link: "/courses/ai-technologies",
  },
  {
    id: 3,
    img: "/assets/herohome/homethree.jpg",
    alt: "teQspoc",
    title: "Transform Your Career",
    description: [
      "Build expertise: Comprehensive programs from basics to advanced.",
      "Career advancement: Join over 5 million learners.",
      "Live classes: 1,500+ monthly sessions with instructors.",
    ],
    link: "/about/career-transformation",
  },
  {
    id: 4,
    img: "/assets/herohome/homefour.jpg",
    alt: "teQspoc",
    title: "Lead in Your Industry",
    description: [
      "Become indispensable: Gain leadership skills.",
      "Adapt to change: Stay ahead with the latest tools.",
      "Join a global community: Access lifelong learning resources.",
    ],
    link: "/leadership",
  },
];

const responsive = {
  largedesktop: {
    breakpoint: { max: 3500, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-gradient-to-br from-white to-darkblue rounded-full z-10 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
    >
      <FaAngleLeft className="text-white text-sm md:text-lg" />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-gradient-to-br from-white to-darkblue rounded-full z-10 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
    >
      <FaAngleRight className="text-white text-sm md:text-lg" />
    </div>
  );
};

const HeroBanner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative text-white w-full h-screen mx-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        arrows={true}
        autoPlay={true}
        customTransition="transform 0.8s ease-in-out"
        transitionDuration={800}
        className="group"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        showDots={true}
        renderDotsOutside={true}
        dotListClass="absolute bottom-4 md:bottom-6 lg:bottom-10 w-full flex justify-center space-x-2 z-10"
      >
        {slidesContent.map((item, index) => (
          <div key={item.id} className="relative h-full">
            <Image
              src={item.img}
              alt={item.alt}
              width={3840}
              height={2160}
              className={`w-full h-screen object-cover ${loaded ? 'animate-fade-in' : ''}`}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-center p-4 md:p-8 md:pl-16 lg:pl-24">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 animate-slide-up">
                  {item.title}
                </h2>
                {item.description.map((line, idx) => (
                  <p key={idx} className="text-sm md:text-lg lg:text-xl font-medium text-white animate-slide-in mb-2 md:mb-4">
                    {line}
                  </p>
                ))}
                <Link href={item.link} passHref>
                  <button className="mt-4 md:mt-8 px-6 py-2 md:px-10 md:py-2 bg-white text-black font-semibold text-sm md:text-lg rounded-lg shadow-lg hover:bg-eucalyptus-dark hover:text-white transition-all duration-300 ease-in-out animate-fade-in">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
