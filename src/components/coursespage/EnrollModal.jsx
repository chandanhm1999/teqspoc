import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

const EnrollmentModal = ({ isOpen, onClose, course }) => {
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
    actionButton: "CourseEnrollment",
  });

  useEffect(() => {
    if (course?.heading) {
      setFormData((prevData) => ({
        ...prevData,
        course: course.heading,
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
            // Close the modal only after the toast notification is closed
            onClose();
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
          actionButton: "CourseEnrollment",
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
    <div className="fixed inset-0 mt-10 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col lg:flex-row">
        {/* Left Side Image */}
        <div className="lg:w-2/5 w-full lg:block hidden mb-4 lg:mb-0">
          <div className="relative w-full h-full">
            <Image
              src="/assets/model/mode.png"
              alt="Enrollment"
              className="rounded-lg object-cover"
              fill
              priority
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-3/5 w-full lg:pl-6">
          <h2 className="text-2xl font-bold mb-4">
            Enroll in {course?.heading || "the course"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Enroll
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Container to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default EnrollmentModal;