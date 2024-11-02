"use client";

import React from "react";
import Link from "next/link";

const CareersTable = () => {
  const courseData = [
    { course: "Scrummaster", position: "Scrum Master Trainer", experience: "3+ years" },
    { course: "HR Recuiter", position: "HR Recuiter Trainer", experience: "3+ years" },
    { course: "Python", position: "Python Trainer - Developer", experience: "3+ years" },
    { course: "Software Testing", position: "Software Tester - Trainer", experience: "3+ years" },
    { course: "AI/MI", position: "AI/MI Trainer - Developer", experience: "3+ years" },
    { course: "DotNet", position: ".NET Trainer - Developer", experience: "3+ years" },
    { course: "Java", position: "Java Trainer - Developer", experience: "3+ years" },
    { course: "Software Testing", position: "Software Tester Trainer - Developer", experience: "3+ years" },
    { course: "Data Engineer", position: "Data Engineer - Trainer", experience: "3+ years" },
    { course: "DevOps", position: "DevOps Engineer - Trainer", experience: "3+ years" },
  ];

  return (
    <div className="my-4 px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Course</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Position</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Experience</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {courseData.map((course, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="py-3 px-4 text-sm font-medium text-blue-600">{course.course}</td>
                <td className="py-3 px-4 text-sm">{course.position}</td>
                <td className="py-3 px-4 text-sm">{course.experience}</td>
              </tr>
            ))}
            {/* Button Row */}
            <tr>
              <td colSpan="3" className="py-4 text-right">
                <Link href="#apply">
                  <button className="inline-flex items-center bg-blue-500 text-white px-6 py-3 mr-4 text-sm font-bold rounded-sm shadow-md hover:bg-green-600 transition-all duration-300">
                    Apply for Positions
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CareersTable;
