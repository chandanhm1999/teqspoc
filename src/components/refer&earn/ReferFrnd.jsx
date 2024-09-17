"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReferFrnd = () => {
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
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.friendName)
      newErrors.friendName = "Friends name is required";
    if (!formData.friendPhone)
      newErrors.friendPhone = "Friends phone number is required";
    if (!formData.friendEmail || !/\S+@\S+\.\S+/.test(formData.friendEmail))
      newErrors.friendEmail = "Valid friends email is required";
    if (!formData.place) newErrors.place = "Place is required";
    if (!formData.course) newErrors.course = "Course selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxAzwOzCCxFYF6m2LRGnrj1tgb5xKe-yR6Egf3FxVonW9tdSJXod26V27GpVHvoYC12/exec", // Replace with your Apps Script URL
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
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
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="font-sans max-w-6xl mx-auto relative bg-white shadow-lg rounded-3xl overflow-hidden mt-4 p-6">
      <ToastContainer />

      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-blue-500 opacity-30"></div>
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-500 opacity-30"></div>

      <div className="grid md:grid-cols-2 gap-10 py-10 px-8 relative z-10">
        <div className="text-center flex flex-col items-center justify-center">
          <Image
            src="/assets/refer/refer.svg" // Ensure this image is available in the public folder
            alt="Refer a Friend"
            width={500}
            height={700}
            className="rounded-sm shadow-lg"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl text-blue-600 font-extrabold text-center mb-6">
          Complete the form now to get attractive vouchers!
          </h2>

          <div className="space-y-4">
            <label className="text-blue-600 font-bold font-sm">Your Details</label>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-1/2 bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                    errors.name ? "border-2 border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-1/2 bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                    errors.phone ? "border-2 border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="flex pb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                    errors.email ? "border-2 border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <label className="text-blue-600 pt-4 font-bold font-sm">
              Friend&apos;s Details
            </label>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="friendName"
                  value={formData.friendName}
                  onChange={handleChange}
                  placeholder="Friends Name"
                  className={`w-1/2 bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                    errors.friendName ? "border-2 border-red-500" : ""
                  }`}
                />
                {errors.friendName && (
                  <p className="text-red-500 text-sm">{errors.friendName}</p>
                )}

                <input
                  type="text"
                  name="friendPhone"
                  value={formData.friendPhone}
                  onChange={handleChange}
                  placeholder="Friends Phone Number"
                  className={`w-1/2 bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                    errors.friendPhone ? "border-2 border-red-500" : ""
                  }`}
                />
                {errors.friendPhone && (
                  <p className="text-red-500 text-sm">{errors.friendPhone}</p>
                )}
              </div>

              <input
                type="email"
                name="friendEmail"
                value={formData.friendEmail}
                onChange={handleChange}
                placeholder="Friends Email"
                className={`w-full bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                  errors.friendEmail ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.friendEmail && (
                <p className="text-red-500 text-sm">{errors.friendEmail}</p>
              )}

              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                placeholder="Place"
                className={`w-full bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                  errors.place ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.place && (
                <p className="text-red-500 text-sm">{errors.place}</p>
              )}
            </div>

            <div className="mb-2">
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent ${
                  errors.course ? "border-2 border-red-500" : ""
                }`}
              >
                <option disabled value="">Select Course</option>
                <option value="Scrum Master">Scrum Master</option>
                <option value="DotNet Certification">
                  DotNet Certification
                </option>
                <option value="Java Certification">Java Certification</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Data Engineer">Data Engineer</option>
                <option value="DevOps">DevOps</option>
              </select>
              {errors.course && (
                <p className="text-red-500 text-sm">{errors.course}</p>
              )}
            </div>

            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-sm px-6 py-4 transition-transform transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferFrnd;
