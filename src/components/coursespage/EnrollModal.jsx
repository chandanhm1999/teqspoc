import React, { useState } from "react";

const EnrollmentModal = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 mt-10 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col lg:flex-row">
        {/* Left Side Image - 40% Width on larger screens, hidden on smaller screens */}
        <div className="lg:w-2/5 w-full lg:block hidden mb-4 lg:mb-0">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Enrollment"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form - 60% Width on larger screens */}
        <div className="lg:w-3/5 w-full lg:pl-6">
          <h2 className="text-2xl font-bold mb-4">Enroll in {course.heading}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
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
                <option value="" disabled>Select Type</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="live">Live</option>
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
    </div>
  );
};

export default EnrollmentModal;
