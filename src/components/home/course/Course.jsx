"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { FaUserGraduate, FaShareSquare } from "react-icons/fa";

// CAROUSEL DATA
const postData = [
  {
    heading: "Scrum Master",
    heading2: "Certified® Scrum Master",
    name: "Gopi",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "DotNet® Certification",
    heading2: "FullStack Development",
    name: "Gopi",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Java® Certification",
    heading2: "FullStack Development",
    name: "Gopi",
    imgSrc: "/assets/courses/coursethree.png",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Software Testing",
    heading2: "FullStack Testing",
    name: "Gopi",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Data Engineer",
    heading2: "Certified® Data Engineer",
    name: "Gopi",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "DevOps",
    heading2: "Certified® DevOps Course",
    name: "Gopi",
    imgSrc: "/assets/courses/coursethree.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
];

// CAROUSEL SETTINGS
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Course = () => {
  return (
    <div id="courses" className="py-8">
      <div className="mx-auto px-4 lg:px-8">
        <div className="sm:flex justify-between items-center">
          <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold leading-tight mb-5 sm:mb-0">
            Popular courses.
          </h3>
          <Link
            href={"/"}
            className="text-Blueviolet text-base sm:text-lg font-medium"
          >
            Explore courses&nbsp;&gt;&nbsp;
          </Link>
        </div>

        <Carousel responsive={responsive} infinite={true}>
          {postData.map((item, i) => (
            <div key={i} className="px-2">
              <div className="bg-white px-4 pt-4 pb-8 shadow-lg rounded-2xl">
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt="course"
                    width={389}
                    height={262}
                    className="m-auto rounded-t-2xl object-cover h-auto w-full"
                  />
                  <div className="absolute right-5 -bottom-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg p-2 sm:p-6">
                    <h3 className="text-white uppercase text-xs sm:text-sm font-bold text-center">
                      best <br /> course
                    </h3>
                  </div>
                </div>

                <div className="px-3">
                  <h4 className="text-lg sm:text-xl font-bold pt-2 sm:pt-4 text-black">
                    {item.heading}
                  </h4>
                  <h4 className="text-lg text-gray-500 sm:text-xl font-bold pt-1">
                    {item.heading2}
                  </h4>

                  <div>
                    <h3 className="text-xs sm:text-base font-normal pt-2 sm:pt-2 opacity-75">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center py-2 sm:py-2">
                    <div className="flex gap-1 sm:gap-4">
                      <h3 className="text-red text-lg sm:text-xl font-medium">
                        {item.rating}
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className="h-4 sm:h-5 w-4 sm:w-5 text-gold"
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
                  <div className="flex justify-between pt-2 sm:pt-2">
                    <Link href={`/enroll/${i}`} passHref>
                      <button className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-sm px-8 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-200 ease-in-out flex items-center">
                        <FaUserGraduate className="mr-2" />
                        Enroll
                      </button>
                    </Link>
                    <Link href={`/share/${i}`} passHref>
                      <button className="text-white mt-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-cyan-800 font-bold rounded-sm px-8 py-2 md:py-2 lg:py-2 xl:py-2 text-xs md:text-sm lg:text-sm xl:text-sm transition-all duration-200 ease-in-out flex items-center">
                        <FaShareSquare className="mr-2" />
                        Share
                      </button>
                    </Link>
                  </div>

                  <hr className="border-gray-300" />

                  <div className="flex justify-between pt-4 sm:pt-6">
                    <div className="flex gap-2 sm:gap-4">
                      <Image
                        src={"/assets/courses/book-open.svg"}
                        alt="classes"
                        width={20}
                        height={20}
                        className="inline-block m-auto"
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
                        className="inline-block m-auto"
                      />
                      <h3 className="text-sm sm:text-base font-medium text-black opacity-75">
                        {item.students} students
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Course;
