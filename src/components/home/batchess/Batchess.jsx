"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaBook, FaMoneyBillWave } from "react-icons/fa";
import Link from "next/link";
import TextLight from "./TextLight";
import ModalForm from "./ModalForm";  // Import the ModalForm component

const Batchess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const postData = [
    {
      course: "Scrummaster",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Mon-Fri",
      type: "Weekdays Regular",
      batches: "08:00 AM & 10:00 AM",
      time: "Flexible Time, 1 Hr/session",
      feeLink: "/courses/fees",
    },
    {
      course: "HR Recuiter",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Mon-Fri",
      type: "Weekdays Regular",
      batches: "08:00 AM & 10:00 AM",
      time: "Flexible Time, 1 Hr/session",
      feeLink: "/courses/fees",
    },
    {
      course: "Python",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Mon-Fri",
      type: "Weekdays Regular",
      batches: "08:00 AM & 10:00 AM",
      time: "Flexible Time, 1 Hr/session",
      feeLink: "/courses/fees",
    },
    {
      course: "Software Testing",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Mon-Fri",
      type: "Weekdays Regular",
      batches: "08:00 AM & 10:00 AM",
      time: "Flexible Time, 1 Hr/session",
      feeLink: "/courses/fees",
    },
    {
      course: "AI/MI",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Sat-Sun",
      type: "Weekend Regular",
      batches: "09:00 AM & 11:00 AM",
      time: "2 Hrs/session",
      feeLink: "/courses/fees",
    },
    {
      course: "DotNet",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Mon-Wed",
      type: "Weekdays Evening",
      batches: "05:00 PM & 06:00 PM",
      time: "Flexible Time, 1 Hr/session",
      feeLink: "/courses/fees",
    },
    {
      course: "Java",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Sat-Sun",
      type: "Weekend Regular",
      batches: "09:00 AM & 11:00 AM",
      time: "2 Hrs/session",
      feeLink: "/courses/fees",
    },
    {
      course: "Data Engineer",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Sat-Sun",
      type: "Weekend Regular",
      batches: "09:00 AM & 11:00 AM",
      time: "2 Hrs/session",
      feeLink: "/courses/fees",
    },
    {
      course: "DevOps",
      duration: "2 Months",
      startDate: "01-Nov-2024",
      days: "Sat-Sun",
      type: "Weekend Regular",
      batches: "09:00 AM & 11:00 AM",
      time: "2 Hrs/session",
      feeLink: "/courses/fees",
    },
  ];

  return (
    <div className="my-4 md:my-8 lg:my-8 xl:my-8 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between p-2 sm:p-0 items-center mb-3 md:mb-6 lg:mb-4 xl:mb-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-black/80 mb-2 md:mb-0 lg:mb-2 xl:mb-4">
          Upcoming <TextLight text={"Batches"} />
        </h3>
        <Link
          href="/courses"
          className="text-blue-500 text-sm md:text-base lg:text-lg font-medium hover:underline"
        >
          Online Classroom
        </Link>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Course</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Start Date</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Days</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Type</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Batches</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Time</th>
              <th className="py-3 px-4 text-left text-sm font-bold border-b border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {postData.map((batch, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="py-3 px-4 text-sm font-medium text-blue-600">{batch.course}</td>
                <td className="py-3 px-4 text-sm">{batch.startDate}</td>
                <td className="py-3 px-4 text-sm">{batch.days}</td>
                <td className="py-3 px-4 text-sm">{batch.type}</td>
                <td className="py-3 px-4 text-sm">{batch.batches}</td>
                <td className="py-3 px-4 text-sm">{batch.time}</td>
                <td className="py-3 px-4 text-sm">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center bg-blue-500 text-white px-5 py-3 text-sm font-bold rounded-sm shadow-md hover:bg-blue-600 transition-all duration-300"
                  >
                    <FaMoneyBillWave className="mr-1 text-sm" />
                    Register
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Batchess;
