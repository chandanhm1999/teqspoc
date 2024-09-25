"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaUserGraduate, FaShareSquare } from "react-icons/fa";
import ShareModal from "./ShareModel";
import EnrollmentModal from "./EnrollModal";
import Link from "next/link";
import { FaShare } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

// CAROUSEL DATA
const postData = [
  {
    heading: "Scrum Master",
    imgSrc: "/assets/courses/scrumm.svg",
    name: "Industry-Experts",
    syllabus: "/syllabus/scrummastersyllabus",
    students: 150,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "DotNet FullStack",
    imgSrc: "/assets/courses/dotnet.svg",
    name: "Industry-Experts",
    syllabus: "/syllabus/dotnetsyllabus",
    students: 130,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "Java FullStack",
    imgSrc: "/assets/courses/javaaa.svg",
    name: "Industry-Experts",
    syllabus: "/syllabus/javasyllabus",
    students: 120,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "Software Testing",
    imgSrc: "/assets/courses/testing.svg",
    name: "Industry-Experts",
    syllabus: "/syllabus/testingsyllabus",
    students: 150,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "Data Engineer",
    imgSrc: "/assets/courses/data.svg",
    name: "Industry-Experts",
    syllabus: "/syllabus/dataengineersyllabus",
    students: 150,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "DevOps",
    imgSrc: "/assets/courses/devops.svg",
    name: "Industry-Experts",
    syllabus: "/syllabus/devopssyllabus",
    students: 150,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
];

const Coursess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentShareUrl, setCurrentShareUrl] = useState("");
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const openModal = (courseUrl) => {
    setCurrentShareUrl(courseUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEnrollModal = (course) => {
    setCurrentCourse(course);
    setIsEnrollModalOpen(true);
  };

  const closeEnrollModal = () => {
    setIsEnrollModalOpen(false);
  };

  return (
    <div id="courses" className="py-8">
      <div className="mx-auto px-4 lg:px-8">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Popular courses.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {postData.map((item, i) => (
            <div key={i} className="bg-white shadow-lg rounded-2xl course-card">
              <div className="relative rounded-t-2xl overflow-hidden">
                <Image
                  src={item.imgSrc}
                  alt="course"
                  width={389}
                  height={262}
                  className="object-cover w-full"
                />
              </div>

              <div className="px-4 py-2">
                <h4 className="course-heading">{item.heading}</h4>
                <h3 className="text-xs opacity-75">{item.name}</h3>

                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <h3 className="text-green-500 text-lg">{item.rating}</h3>
                    <div className="ml-2 flex">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="h-2 w-2 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-red-500 text-xs font-semibold">
                      <del className="text-red-500">₹{item.discount}</del>
                    </h3>
                    <h3 className="text-xl font-bold text-[#1F2937]">
                      ₹{item.price}
                    </h3>
                  </div>
                </div>
                <p className="flex items-center text-[#354458] text-sm md:text-sm lg:text-sm xl:text-lg cursor-pointer hover:text-black transition-colors duration-300">
                  {item.syllabus ? (
                    <Link
                      href={item.syllabus}
                      className=" text-gray-600 hover:text-black flex items-center"
                    >
                      View syllabus
                      <FaShare className="ml-1 mt-1" />
                    </Link>
                  ) : (
                    <span>No syllabus available</span>
                  )}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => openEnrollModal(item)}
                    className="text-cyan-600 border border-cyan-400 mt-4 hover:bg-cyan-600 hover:text-white font-semibold rounded-sm px-6 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ease-in-out flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaUserGraduate className="mr-2" /> Enroll
                  </button>
                  <button
                    onClick={() =>
                      openModal(
                        `https://localhost:3000/courses/${item.heading
                          .toLowerCase()
                          .replace(/ /g, "-")}`
                      )
                    }
                    className="text-black border border-gray-400 mt-4 hover:bg-gray-400 hover:text-white font-semibold rounded-sm px-6 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ease-in-out flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaShareAlt className="mr-2" /> Share
                  </button>
                </div>

                <hr className="border-gray-300 my-4" />

                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Image
                      src={"/assets/courses/book-open.svg"}
                      alt="classes"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-sm opacity-75 ml-2">
                      {item.classes} classes
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/assets/courses/users.svg"}
                      alt="students"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-sm opacity-75 ml-2">
                      {item.students} students
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ShareModal
        isOpen={isModalOpen}
        onClose={closeModal}
        shareUrl={currentShareUrl}
      />
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={closeEnrollModal}
        course={currentCourse}
      />
    </div>
  );
};

export default Coursess;
