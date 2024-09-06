"use client";

import React, { useState } from "react";
import { FaBook, FaShareSquare } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link
import ShareModal from "./ShareModelResourse"; // Import the ShareModal component

const postData = [
    {
      heading: "Scrum Master",
      heading2: "Scrum Master",
      des: "Master the art of Scrum with insights from industry experts. Learn key techniques to lead teams effectively and deliver projects on time.",
      author: "Gopi",
      imgSrc: "/assets/resourse/scrummaster.jpg",
      path: "/resource/scrummaster",
    },
    {
      heading: "DotNet",
      heading2: "DotNet",
      des: "Dive into the world of .NET and elevate your coding skills with comprehensive tutorials and practical examples. Perfect for advancing your career in software development.",
      author: "Gopi",
      imgSrc: "/assets/resourse/dotnet.jpg",
      path: "/resource/dotnetcertification",
    },
    {
      heading: "Java",
      heading2: "Java FullStack Development",
      des: "Unlock the power of Java with a full-stack development course that covers everything from backend to frontend. Gain the skills needed to build robust and scalable applications.",
      author: "Gopi",
      imgSrc: "/assets/resourse/java.jpg",
      path: "/resource/javacertification",
    },
    {
      heading: "Software Testing",
      heading2: "Software Testing",
      des: "Become a software testing guru with our in-depth course. Learn essential testing strategies and tools to ensure your software is bug-free and reliable.",
      author: "Gopi",
      imgSrc: "/assets/resourse/test.jpg",
      path: "/resource/testing",
    },
    {
      heading: "Data Engineer",
      heading2: "Data Engineer",
      des: "Transform raw data into actionable insights with our Data Engineering course. Master the tools and techniques needed to handle big data and drive data-driven decisions.",
      author: "Gopi",
      imgSrc: "/assets/resourse/data.jpg",
      path: "/resource/dataengineer",
    },
    {
      heading: "DevOps",
      heading2: "DevOps",
      des: "Streamline your development and operations with our DevOps course. Learn how to integrate development and operations to deliver software faster and more efficiently.",
      author: "Gopi",
      imgSrc: "/assets/resourse/devops.jpg",
      path: "/resource/devops",
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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imgSrc} alt={heading} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading2}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`Description: ${des}`}
        </p>
        
        {/* Author Section */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
                `https://localhost:3000/resources/${heading
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
