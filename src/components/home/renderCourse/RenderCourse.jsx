"use client";

import React, { useState, useEffect } from "react";
import Course from "../course/Course";

const RenderCourse = () => {
  // State to control when to render Course
  const [isCourseReady, setIsCourseReady] = useState(false);

  // useEffect to perform an action before rendering
  useEffect(() => {
    console.log("R");

    // Simulate an API call or any action, then render Course
    setTimeout(() => {
      console.log("C");
      setIsCourseReady(true); // Set state to true to render the Course component
    }, 2000); // Simulates a delay (e.g., API call delay)

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {/* Conditionally render Course only after useEffect sets isCourseReady to true */}
      {isCourseReady ? <Course /> : <p>Loading Course...</p>}
    </div>
  );
};

export default RenderCourse;
