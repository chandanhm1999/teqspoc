"use client";

import { useState } from "react";
import Image from "next/image";
import { FaDatabase, FaCalendarAlt } from "react-icons/fa";
import TextLight from "./TextLight";

const Datas = () => {
  const [syllabus] = useState([
    {
      title: "Introduction to Data Engineering",
      duration: "1 week",
      content: "Overview of data engineering, key concepts, and industry applications.",
    },
    {
      title: "Data Modeling and Architecture",
      duration: "2 weeks",
      content: "Understanding data modeling, schema design, and database architecture.",
    },
    {
      title: "ETL and Data Pipelines",
      duration: "2 weeks",
      content: "Designing ETL processes, data extraction, transformation, and loading techniques.",
    },
    {
      title: "Big Data Technologies",
      duration: "2 weeks",
      content: "Introduction to Hadoop, Spark, and other big data frameworks.",
    },
    {
      title: "Data Warehousing",
      duration: "1 week",
      content: "Building and managing data warehouses with tools like Snowflake and Redshift.",
    },
    {
      title: "Cloud Data Engineering",
      duration: "2 weeks",
      content: "Leveraging cloud platforms like AWS, Azure, and GCP for data engineering.",
    },
    {
      title: "Real-time Data Processing",
      duration: "1 week",
      content: "Working with real-time data using Kafka, Flink, and other streaming platforms.",
    },
    {
      title: "Data Governance and Security",
      duration: "1 week",
      content: "Implementing data governance policies and ensuring data security compliance.",
    },
    // Add more syllabus items if needed
  ]);

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        
        {/* Right column for syllabus details (Now on the left side) */}
        <div className="w-full md:w-8/12 mb-8">
          <div className="relative">
            <Image
              src="/assets/resourse/interview/dataengineer.jpg"
              alt="Data Engineer Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Data Engineer Course Syllabus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {syllabus.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-3">
                  <FaDatabase className="w-6 h-6 text-green-500" />
                  <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <FaCalendarAlt className="w-4 h-4 text-gray-500" />
                  <span>{item.duration}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Left column for syllabus list (Now on the right side) */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4 text-center">
            Data Engineer Syllabus
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {syllabus.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-medium">
                  {index + 1}. {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Datas;
