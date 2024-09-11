// components/ModalForm.js
import React from "react";

const ModalForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center mt-5 justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Quote for Free</h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Mobile Number"
            />
          </div>

          <div className="mb-4">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
              <option value="" disabled selected>
                Type of Course Interested In
              </option>
              <option>Weekdays Regular</option>
              <option>Weekdays Evening</option>
              <option>Weekend Regular</option>
            </select>
          </div>

          <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
