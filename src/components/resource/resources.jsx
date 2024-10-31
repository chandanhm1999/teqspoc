"use client";

import React, { useState } from "react";
import { FaBook, FaShareSquare } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link
import ShareModal from "./ShareModelResourse"; // Import the ShareModal component
import Image from "next/image"; // Import Image from next/image

const postData = [
  {
    heading: "scrummaster",
    heading2: "Scrummaster Interview Questions & Answers",
    des: "Master the art of Scrum with insights from industry experts. Learn key techniques to lead teams effectively and deliver projects on time.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/scrummaster.jpg",
    path: "/resources/scrummaster",
  },
  {
    heading: "hrrecruiter",
    heading2: "HR Recruiter Interview Questions & Answers",
    des: "Master the art of recruitment with our in-depth HR recruiter guides, covering essential skills, strategies, and best practices for hiring top talent.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/hr-recruiter.jpg",
    path: "/resources/hrrecruiter",
  },
  {
    heading: "pythonsmain",
    heading2: "Python Interview Questions & Answers",
    des: "Enhance your Python programming expertise with detailed tutorials and problem-solving techniques to help you excel in coding interviews and projects.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/python.jpg",
    path: "/resources/pythonsmain",
  },
  {
    heading: "aiml",
    heading2: "AI/ML Interview Questions & Answers",
    des: "Explore the exciting field of AI and Machine Learning with comprehensive examples, interview questions, and key concepts to boost your career in tech.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/ai-ml.jpg",
    path: "/resources/aiml",
  },
  {
    heading: "Software Testing",
    heading2: "Testing Interview Questions & Answers",
    des: "Become a software testing guru with our in-depth course. Learn essential testing strategies and tools to ensure your software is bug-free and reliable.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/test.jpg",
    path: "/resources/testingres",
  },
  {
    heading: "dotnet",
    heading2: "DotNet Interview Questions & Answers",
    des: "Dive into the world of .NET and elevate your coding skills with comprehensive tutorials and practical examples. Perfect for advancing your career in software development.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/dotnet.jpg",
    path: "/resources/dotnet",
  },
  {
    heading: "javaresource",
    heading2: "Java Interview Questions & Answers",
    des: "Unlock the power of Java with a full-stack development course that covers everything from backend to frontend. Gain the skills needed to build robust and scalable applications.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/java.jpg",
    path: "/resources/javaresource",
  },
  {
    heading: "dataengineer",
    heading2: "Data Engineer Interview Questions & Answers",
    des: "Transform raw data into actionable insights with our Data Engineering course. Master the tools and techniques needed to handle big data and drive data-driven decisions.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/data.jpg",
    path: "/resources/dataengineer",
  },
  {
    heading: "devops",
    heading2: "Devops Interview Questions & Answers",
    des: "Streamline your development and operations with our DevOps course. Learn how to integrate development and operations to deliver software faster and more efficiently.",
    author: "Industry-Experts",
    imgSrc: "/assets/resourse/devops.jpg",
    path: "/resources/devops",
  },
];

const Card = ({
  heading,
  heading2,
  des,
  imgSrc,
  author,
  path, // Include path as a prop
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentShareUrl, setCurrentShareUrl] = useState("");

  const openModal = (courseUrl) => {
    setCurrentShareUrl(courseUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-300">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src={imgSrc}
          alt={heading}
          width={400} // Set the desired width
          height={300} // Set the desired height
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black/80 dark:text-white">
            {heading2}
          </h5>
        </a>
        <p className="mb-3 font-normal text-black/60 dark:text-gray-400">
          {`Description: ${des}`}
        </p>

        {/* Author Section */}
        <p className="mb-3 font-normal text-black/60 dark:text-gray-400">
          {`Author: ${author}`}
        </p>
        {/* Buttons Section */}
        <div className="flex justify-between pt-3 sm:pt-3">
          <Link href={path}>
            <button className="text-black border border-gray-400 mt-4 hover:bg-black hover:text-white font-bold rounded-sm px-8 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ease-in-out flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <FaBook className="mr-2" />
              Learn More
            </button>
          </Link>
          <button
            onClick={() =>
              openModal(
                `https://www.teqspoc.com/resources/${heading
                  .toLowerCase()
                  .replace(/ /g, "-")}`
              )
            }
            className="text-white mt-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-sm px-8 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-200 ease-in-out flex items-center"
          >
            <FaShareSquare className="mr-2" />
            Share
          </button>
        </div>
      </div>
      {/* Render the ShareModal component */}
      <ShareModal
        isOpen={isModalOpen}
        onClose={closeModal}
        shareUrl={currentShareUrl}
      />
    </div>
  );
};

const Resource = () => {
  return (
    <div className="container mx-auto my-8 p-2">
      <h3 className="text-xl text-black/80 md:text-2xl lg:text-3xl font-bold mb-6">
        Top Interview Questions & Answers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postData.map((post, index) => (
          <Card
            key={index}
            heading={post.heading}
            heading2={post.heading2}
            name={post.name}
            imgSrc={post.imgSrc}
            path={post.path} // Pass the path to the Card component
            author={post.author}
            des={post.des}
          />
        ))}
      </div>
    </div>
  );
};

export default Resource;
