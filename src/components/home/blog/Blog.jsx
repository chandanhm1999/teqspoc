import React from "react";
import Image from "next/image";
import TextLight from "./TextLight"

const Blog = () => {
  const cardData = [
    {
      title: "Interactive Workshops",
      description:
        "Engage in interactive workshops that offer deep insights into current technologies, providing practical exercises and expert guidance.",
      imgSrc: "/assets/training/weekendlearning.jpg", 
      link: "/workshops",
    },
    {
      title: "Weekend Learning Programs",
      description:
        "Boost your skills with our weekend learning programs, offering flexible, hands-on training that fits seamlessly into your busy schedule.",
      imgSrc: "/assets/training/int.svg", 
      link: "/weekend-learning",
    },
    {
      title: "Hands-On Projects",
      description:
        "Dive into hands-on projects that mirror real-world IT challenges, providing you with practical experience and enhancing your skill set.",
      imgSrc: "/assets/training/handsonprojects.jpg", 
      link: "/hands-on-projects",
    },
    {
      title: "Professional Internships",
      description:
        "Gain valuable experience through professional internships, working with experts to solve real-world problems and advance your career.",
      imgSrc: "/assets/training/professionalinternships.jpg", 
      link: "/professional-internships",
    },
  ];

  return (
    <section className="mx-auto p-6 md:p-12 antialiased bg-white">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-[#1F2937] lg:text-3xl xl:lg:text-3xl dark:text-white mb-4">
          Comprehensive  
          <TextLight text={"Training "} />Solutions
        </h3>
        <p className="text-sm text-[#4B5563] max-w-4xl mx-auto">
          From Beginner to Expert, we deliver tailored learning experiences
          through multiple formats, including Classroom, Virtual, Weekend, and
          Corporate sessions. Our extensive course catalog covers the latest
          in-demand software and technology skills to help you stay ahead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row items-center shadow-lg group cursor-pointer transform duration-500 hover:-translate-y-1"
          >
            <div className="relative w-full md:w-1/2 h-48">
              <Image
                className="group-hover:scale-105 transition-transform duration-500"
                src={card.imgSrc}
                alt={card.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 md:w-1/2">
              <h1 className="text-lg font-semibold text-[#4B5563] mt-4 md:mt-0">
                {card.title}
              </h1>
              <p className="text-base text-[#a3aebc] mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
