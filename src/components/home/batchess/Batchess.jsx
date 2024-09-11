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
      startDate: "16-Sep-2024",
      days: "Mon-Fri",
      type: "Weekdays Regular",
      batches: "08:00 AM & 10:00 AM",
      time: "(Class 1Hr - 1:30Hrs) / Per Session",
      feeLink: "/courses/fees",
    },
    {
      startDate: "18-Sep-2024",
      days: "Mon-Wed",
      type: "Weekdays Evening",
      batches: "05:00 PM & 06:00 PM",
      time: "(Class 1Hr) / Per Session",
      feeLink: "/courses/fees",
    },
    {
      startDate: "20-Sep-2024",
      days: "Sat-Sun",
      type: "Weekend Regular",
      batches: "09:00 AM & 11:00 AM",
      time: "(Class 2Hrs) / Per Session",
      feeLink: "/courses/fees",
    },
  ];

  return (
    <div className="my-4 md:my-8 lg:my-8 xl:my-8 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between p-2 sm:p-0  items-center mb-3 md:mb-6 lg:mb-6 xl:mb-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-800 xl:lg:text-3xl dark:text-white mb-2 md:mb-0 lg:mb-4 xl:mb-4">
          Upcoming <TextLight text={"Batches"} />
        </h3>
        <Link
          href="/courses"
          className="text-blue-500 text-sm md:text-base lg:text-lg font-medium hover:underline"
        >
          Online Classroom
        </Link>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {postData.map((batch, index) => (
          <div
            key={index}
            className="relative border border-transparent shadow-xl rounded-lg p-4 md:p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white opacity-10 blur-lg rounded-lg"></div>
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4">
                <div className="flex items-center text-sm md:text-base font-semibold text-white mb-2">
                  <FaCalendarAlt className="text-yellow-300 mr-2 hover:animate-bounce" />
                  {batch.startDate}
                </div>
                <div className="text-sm md:text-base text-white/90">
                  {batch.days} - {batch.type}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-sm md:text-base font-semibold text-white mb-2">
                  <FaBook className="text-yellow-300 mr-2 hover:animate-bounce" />
                  Batches: {batch.batches}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-sm md:text-base font-semibold text-white mb-2">
                  <FaClock className="text-yellow-300 mr-2 hover:animate-bounce" />
                  Time: {batch.time}
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center bg-yellow-300 text-gray-800 px-4 py-2 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-yellow-400"
              >
                <FaMoneyBillWave className="mr-2" />
                View Fees
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Batchess;
