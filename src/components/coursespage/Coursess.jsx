"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { FaUserGraduate, FaShareSquare } from "react-icons/fa";
import ShareModal from "./ShareModel"; // Import the ShareModal component
import EnrollmentModal from "./EnrollModal"; // Import the EnrollmentModal component

// CAROUSEL DATA
const postData = [
  {
    heading: "Scrum Master",
    heading2: "Certified® Scrum Master",
    name: "Gopi",
    imgSrc: "/assets/courses/csm.svg",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "DotNet Certification",
    heading2: "FullStack Development",
    name: "Gopi",
    imgSrc: "/assets/courses/cdotnet.svg",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Java Certification",
    heading2: "FullStack Development",
    name: "Gopi",
    imgSrc: "/assets/courses/java.svg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Software Testing",
    heading2: "FullStack Testing",
    name: "Gopi",
    imgSrc: "/assets/courses/ctesting.svg",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Data Engineer",
    heading2: "Certified® Data Engineer",
    name: "Gopi",
    imgSrc: "/assets/courses/cdatae.svg",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "DevOps",
    heading2: "Certified® DevOps Course",
    name: "Gopi",
    imgSrc: "/assets/courses/cdevops.svg",
    students: 150,
    classes: 12,
    price: 20,
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
        <div className="sm:flex justify-between mb-5 items-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold leading-tight mb-4 sm:mb-0">
            Popular courses.
          </h3>
        </div>

        {/* Grid Layout */}
        <div className="container mx-auto my-6 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {postData.map((item, i) => (
              <div
                key={i}
                className="bg-white px-4 pt-4 pb-8 shadow-lg rounded-2xl"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt="course"
                    width={389}
                    height={262}
                    className="m-auto rounded-t-2xl object-cover h-auto w-full"
                  />
                  <div className="absolute right-5 -bottom-2 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg p-2 sm:p-4 lg:p-4">
                    <h3 className="text-white uppercase text-xs sm:text-sm lg:text-base font-bold text-center">
                      best <br /> course
                    </h3>
                  </div>
                </div>

                <div className="px-3">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold pt-2 sm:pt-4 text-black">
                    {item.heading}
                  </h4>
                  <h4 className="text-lg sm:text-xl font-bold pt-1 text-gray-500">
                    {item.heading2}
                  </h4>

                  <div>
                    <h3 className="text-xs sm:text-xs md:text-base font-normal pt-2 opacity-75">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <div className="flex gap-1 sm:gap-2 md:gap-2">
                      <h3 className="text-red-500 text-lg sm:text-xl font-medium">
                        {item.rating}
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className="h-2 w-2 text-yellow-400 sm:h-3 sm:w-3"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium">
                        ${item.price}
                      </h3>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex justify-between pt-2">
                    <button
                      onClick={() => openEnrollModal(item)}
                      className="text-cyan-600 border border-cyan-400 mt-4 hover:bg-cyan-600 hover:text-white font-bold rounded-sm px-8 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ease-in-out flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
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
                      className="text-black border border-gray-400 mt-4 hover:bg-gray-400 hover:text-white font-bold rounded-sm px-8 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ease-in-out flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <FaShareSquare className="mr-2" />
                      Share
                    </button>
                  </div>

                  <hr className="border-gray-300 my-4" />

                  <div className="flex justify-between">
                    <div className="flex gap-2 sm:gap-4">
                      <Image
                        src={"/assets/courses/book-open.svg"}
                        alt="classes"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <h3 className="text-sm sm:text-base font-medium text-black opacity-75">
                        {item.classes} classes
                      </h3>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                      <Image
                        src={"/assets/courses/users.svg"}
                        alt="students"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                      <h3 className="text-sm sm:text-base font-medium text-black opacity-75">
                        {item.students} students
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Coursess;
