"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Correct import for Navigation
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaUserGraduate, FaShareSquare } from "react-icons/fa";
import ShareModal from "./ShareModel";
import TextLight from "./TextLight";
import EnrollmentModal from "../../coursespage/EnrollModal";
import { FaShareAlt } from "react-icons/fa";
import "./styles.css"; // Import the custom CSS file

/// CAROUSEL DATA
const postData = [
  {
    heading: "scrummaster",
    mainheading: "Scrum Master",
    imgSrc: "/assets/courses/scrumm.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/scrummastersyllabus",
    students: "**",
    classes: "**",
    discount: 50000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "hrrecruiter",
    mainheading: "HR Recuiter",
    imgSrc: "/assets/courses/hrrecuiter.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/hrrecuitersyllabus",
    students: "**",
    classes: "**",
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "pythonsmain",
    mainheading: "Python",
    imgSrc: "/assets/courses/python.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/pythonsyllabus",
    students: "**",
    classes: "**",
    discount: 40000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "testingres",
    mainheading: "Software Testing",
    imgSrc: "/assets/courses/testing.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/testingsyllabus",
    students: "**",
    classes: "**",
    discount: 40000,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "aiml",
    mainheading: "AI/MI",
    imgSrc: "/assets/courses/aiml.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/aimlsyllabus",
    students: "**",
    classes: "**",
    discount: 50000,
    price: "*****",
    rating: 4.7,
  },
  {
    heading: "dotnet",
    mainheading: "Dotnet",
    imgSrc: "/assets/courses/dotnet.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/dotnetsyllabus",
    students: "**",
    classes: "**",
    discount: 40000,
    price: "*****",
    rating: 4.7,
  },
  {
    heading: "javaresource",
    mainheading: "Java",
    imgSrc: "/assets/courses/javaaa.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/javasyllabus",
    students: "**",
    classes: "**",
    discount: 40000,
    price: "*****",
    rating: 4.7,
  },
  {
    heading: "dataengineer",
    mainheading: "Data Engineer",
    imgSrc: "/assets/courses/data.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/dataengineersyllabus",
    students: "**",
    classes: "**",
    discount: 40000,
    price: "*****",
    rating: 4.7,
  },
  {
    heading: "devops",
    mainheading: "Devops",
    imgSrc: "/assets/courses/devops.svg",
    name: "Industry-Experts",
    syllabus: "https://www.teqspoc.com/syllabus/devopssyllabus",
    students: "**",
    classes: "**",
    discount: 30000,
    price: "*****",
    rating: 4.7,
  },
];

const Course = () => {
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
    <div id="courses" className="py-5 sm:py-5 md:py-12 lg:py-12 xl:py-12 bg-gray-50">
      <div className="container mx-auto px-5 sm:px-5 md:px-2 lg:px-2 xl:px-2">
        <div className="flex justify-between items-center mb-2 sm:mb-2 md:mb-4 lg:mb-4 xl:mb-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold leading-tight text-black/80">
            Popular
            <TextLight text={"Courses"} />
          </h3>
          <Link
            href="/courses"
            className="text-blue-500 text-sm md:text-sm lg:text-lg xl:text-lg font-medium hover:underline"
          >
            Explore &nbsp;&gt;&nbsp;
          </Link>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            486: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1480: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {postData.map((item, i) => (
            <SwiperSlide key={i} className="px-2 py-2">
              <div className="bg-white shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.imgSrc}
                    alt={item.mainheading}
                    width={389}
                    height={262}
                    className="m-auto object-cover h-auto w-full rounded-t-2xl"
                  />
                </div>

                <div className="px-4 py-4">
                  <h4 className="text-sm md:text-lg lg:text-lg xl:text-xl font-bold text-gray-800">
                    {item.mainheading}
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm xl:text-lg text-gray-500 mb-2">
                    By: {item.name}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <h3 className="text-green-500 text-xs md:text-sm lg:text-sm xl:text-lg font-medium">
                        {item.rating}
                      </h3>
                      <div className="ml-2 flex">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} className="h-2 w-2 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-green-500 text-xs font-semibold">
                        <del className="text-red-500">₹{item.discount}</del>
                      </h3>
                      <h3 className="text-xl font-bold text-gray-900">₹{item.price}</h3>
                    </div>
                  </div>

                  <p className="flex items-center text-gray-600 text-sm md:text-sm lg:text-sm xl:text-lg cursor-pointer hover:text-black transition-colors duration-300">
                    {item.syllabus ? (
                      <Link
                        href={item.syllabus}
                        className=" text-blue-600 hover:text-black flex items-center"
                      >
                        View syllabus
                        <FaShareSquare className="ml-1 mt-1" />
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
                          `https://www.teqspoc.com/resources/${item.heading.toLowerCase().replace(/ /g, "-")}`
                        )
                      }
                      className="text-black border border-gray-400 mt-4 hover:bg-gray-400 hover:text-white font-semibold rounded-sm px-6 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ease-in-out flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <FaShareAlt className="mr-2" /> Share
                    </button>
                  </div>

                  <hr className="border-gray-200 mt-4" />

                  <div className="flex justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/courses/book-open.svg"
                        alt="classes"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <p className="text-sm text-gray-700 font-medium">{item.classes} classes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/courses/users.svg"
                        alt="students"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <p className="text-sm text-gray-700 font-medium">{item.students} students</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Render the ShareModal component */}
      <ShareModal isOpen={isModalOpen} onClose={closeModal} shareUrl={currentShareUrl} />
      <EnrollmentModal isOpen={isEnrollModalOpen} onClose={closeEnrollModal} course={currentCourse} />
    </div>
  );
};

export default Course;
