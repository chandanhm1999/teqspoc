"use client";
import Carousel from "react-multi-carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link"; 
import { useState, useEffect } from "react";

const slidesContent = [
  {
    id: 1,
    img: "/assets/herosec/2.jpg",
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
    img: "/assets/herosec/3.jpg",
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
    img: "/assets/herosec/4.jpg",
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
    img: "/assets/herosec/5.jpg",
    alt: "teQspoc",
    title: "Lead in Your Industry",
    description: [
      "Become indispensable: Gain leadership skills.",
      "Adapt to change: Stay ahead with the latest tools.",
      "Join a global community: Access lifelong learning resources.",
    ],
    link: "/leadership",
  },
  {
    id: 4,
    img: "/assets/herosec/6.jpg",
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
    <div className="relative text-white w-full mx-auto">
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
          <div
            key={item.id}
            className="relative h-[25vh] mt-12 sm:mt-12 md:lg:mt-12 lg:mt-2 xl:lg:mt-2 md:h-screen" // Adjusts height: 70% for mobile, full screen for larger screens
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={3840}
              height={2160}
              className={`w-full h-full object-cover ${loaded ? 'animate-fade-in' : ''}`}
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
