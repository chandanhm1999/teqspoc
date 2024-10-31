"use client";

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

const ModalForm = ({ isOpen, closeModal, course }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    friendName: "",
    friendPhone: "",
    friendEmail: "",
    place: "",
    course: "",
    type: "",
    linkedin: "",
    experience: "",
    actionButton: "BatchEnrollment",
  });

  useEffect(() => {
    if (course) {
      setFormData((prevData) => ({
        ...prevData,
        course: course, // Pre-fill the course name in the form
      }));
    }
  }, [course]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwgqmwX-VZPYzPnKCiHa2l_NBJNLhZIwX3LQrpeiNjtcTtwUfNXurg9IBATjVX6o-m6/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!", {
          onClose: () => {
            closeModal(); // Close the modal only after the toast notification is closed
          },
        });

        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          friendName: "",
          friendPhone: "",
          friendEmail: "",
          place: "",
          course: "",
          type: "",
          linkedin: "",
          experience: "",
          actionButton: "BatchEnrollment",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Register for {formData.course}</h3>
          <form onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Mobile number input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Message input */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </>
  );
};

export default ModalForm;