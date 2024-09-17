"use client";

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaUserGraduate, FaShareSquare } from "react-icons/fa";
import ShareModal from "./ShareModel"; // Import the ShareModal component
import TextLight from "./TextLight";
import EnrollmentModal from "../../coursespage/EnrollModal";

// CAROUSEL DATA
const postData = [
  {
    heading: "Scrum Master",
    imgSrc: "/assets/courses/scrumm.svg",
    name: "Industry-Experts",
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
    students: 150,
    classes: 12,
    discount: 30000,
    price: 20000,
    rating: 4.7,
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1480 }, items: 4 },
  laptop: { breakpoint: { max: 1480, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 486 }, items: 2 },
  mobile: { breakpoint: { max: 486, min: 0 }, items: 1 },
};

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
    <div
      id="courses"
      className="py-5 sm:py-5 md:py-12 lg:py-12 xl:py-12 bg-gray-50"
    >
      <div className="container mx-auto px-5 sm:px-5 md:px-2 lg:px-2 xl:px-2">
        <div className="flex justify-between items-center mb-2 sm:mb-2 md:mb-4 lg:mb-4 xl:mb-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold leading-tight text-gray-800">
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

        {/* Centering the carousel with better alignment */}
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {postData.map((item, i) => (
            <div key={i} className="px-2 py-2">
              <div className="bg-white shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.imgSrc}
                    alt={item.heading}
                    width={389}
                    height={262}
                    className="m-auto object-cover h-auto w-full rounded-t-2xl"
                  />
                </div>

                <div className="px-4 py-4">
                  <h4 className="text-sm md:text-lg lg:text-lg xl:text-xl font-bold text-gray-800">
                    {item.heading}
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm xl:text-lg text-gray-500 mb-2">
                    By: {item.name}
                  </p>

                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                      <h3 className="text-green-500 text-xs md:text-sm lg:text-sm xl:text-lg font-medium">
                        {item.rating}
                      </h3>
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
                      <h3 className="text-green-500 text-xs font-semibold">
                        <del className="text-red-500">₹{item.discount}</del>
                      </h3>
                      <h3 className="text-xl font-bold text-gray-900">
                      ₹{item.price}
                      </h3>
                    </div>
                  </div>
                  <p className="flex items-center text-gray-600 text-sm md:text-sm lg:text-sm xl:text-lg cursor-pointer hover:text-black transition-colors duration-300">
                    View syllabus
                  </p>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => openEnrollModal(item)}
                      className="flex items-center text-white bg-cyan-500 hover:bg-cyan-600 transition-colors duration-300 px-6 py-2 rounded-lg shadow-md"
                    >
                      <FaUserGraduate className="mr-2" />
                      Enroll
                    </button>
                    <button
                      onClick={() =>
                        openModal(
                          `https://localhost:3000/courses/${item.heading
                            .toLowerCase()
                            .replace(/ /g, "-")}`
                        )
                      }
                      className="flex items-center text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white transition-colors duration-300 px-6 py-2 rounded-lg shadow-md"
                    >
                      <FaShareSquare className="mr-2" />
                      Share
                    </button>
                  </div>

                  <hr className="border-gray-200 mt-4" />

                  <div className="flex justify-between py-4">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/courses/book-open.svg"
                        alt="classes"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <p className="text-sm text-gray-700 font-medium">
                        {item.classes} classes
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/courses/users.svg"
                        alt="students"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <p className="text-sm text-gray-700 font-medium">
                        {item.students} students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Render the ShareModal component */}
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

export default Course;
