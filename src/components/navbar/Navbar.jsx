"use client";

import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { RiMenuFold2Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
// import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleshowdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="fixed w-full z-[99] border-b-[1px]  border-primary/50 bg-white text-black shadow-lg"
      >
        <nav className="flex h-[70px] items-center justify-between py-2 pl-4 ">
          <div className="text-2xl text-white md:text-3xl ">
            <Link href="/">
              <Image src="/teqlogo.svg" alt="teqspoc" width={150} height={70} />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block lg:block xl:block 2xl:block">
            <ul className="flex items-center gap-8 lg:gap-8 xl:gap-10 2xl:gap-15">
              {/* All Courses */}
              <li className="cursor pointer font-semibold">
                <a href="/courses">All Courses</a>
              </li>

              {/* Home section */}
              <li className="cursor pointer font-semibold">
                <a href="/resources">Resources</a>
              </li>

              {/* refer us section */}
              <li className="cursor pointer font-semibold">
                <a href="/refer">Refer & Earn</a>
              </li>

              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] font-semibold items-center gap-[2px]"
                >
                  More{" "}
                  <span>
                    <FaCaretDown className="transition-all text-xl duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[250px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    <Link href="/instructor">
                      <li className="p-2 hover:bg-violet-200">
                        Become an Instructor
                      </li>
                    </Link>
                    <Link href="/freejobassistance">
                      <li className="p-2 hover:bg-violet-200">
                        Free Job Assistance
                      </li>
                    </Link>
                    {/* About us section */}
                    <Link href="/about">
                      <li className="p-2 hover:bg-violet-200">About us</li>
                    </Link>
                  </ul>
                </div>
              </li>

              {/* blog contact us */}
              <li className="cursor pointer font-semibold">
                <a href="/contact">Contact Us</a>
              </li>

              {/* Phone number section */}
              <div className="flex items-center gap-2 pr-2 group">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary bg-blue-700 p-2 text-2xl cursor-pointer text-white group-hover:bg-black/90" />
                </li>
                <li>
                  <a href="tel:+918105780072">
                    <div className="text-sm cursor-pointer">Call us on</div>
                    <div className="text-lg">
                      {" "}
                      <div>+91 8105780072</div>
                    </div>
                  </a>
                </li>
              </div>
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden pr-4 ">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-gradient-to-l from-white via-blue-100 text-black shadow-lg">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <a href="/">Home</a>
              </li>

              {/* All Courses: */}
              <li>
                <a href="/courses">All Courses</a>
              </li>

              {/* resources: */}

              <li onClick={toggleshowdown} className="cursor-pointer">
                Resourses
                <FaCaretDown
                  className={`inline ml-2 transition-all duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </li>
              {showDropdown && (
                <ul className="flex flex-col pl-4 text-sm">
                  <Link href="/resources/scrummaster">
                    <li className="p-2 hover:bg-blue-400">
                      <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                        <Image
                          src="/assets/navbar/scrum.png"
                          alt="Scrum Master Logo"
                          width={20}
                        height={20}
                          className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                        />
                        <div className="flex flex-col w-full">
                          <h3 className="text-xs font-bold">Scrum Master</h3>
                          <p className="text-xs opacity-90">
                            Your Guide to Scrum Mastery
                          </p>
                        </div>
                      </div>
                    </li>
                  </Link>
                  <Link href="/resources/dotnet">
                    <li className="p-2 hover:bg-blue-400">
                      <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                        <Image
                          src="/assets/navbar/devops.png"
                          alt="devops Logo"
                          width={20}
                        height={20}
                          className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                        />
                        <div className="flex flex-col w-full">
                          <h3 className="text-xs font-bold">DotNet</h3>
                          <p className="text-xs opacity-90">
                            Mastering DotNet Essentials
                          </p>
                        </div>
                      </div>
                    </li>
                  </Link>
                  <Link href="/resources/javaresource">
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <Image
                        src="/assets/navbar/java.png"
                        alt="java Logo"
                        width={20}
                        height={20}
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Java</h3>
                        <p className="text-xs opacity-90">
                          Java Master Toolkit
                        </p>
                      </div>
                    </div>
                  </li>
                  </Link>
                  <Link href="/resources/testingres">
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <Image
                        src="/assets/navbar/testing.png"
                        alt="testing Logo"
                        width={20}
                        height={20}
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Software Testing</h3>
                        <p className="text-xs opacity-90">
                          Software Testing Resource Hub
                        </p>
                      </div>
                    </div>
                  </li>
                  </Link>
                  <Link href="/resources/dataengineer">
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <Image
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
                        width={20}
                        height={20}
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Data Engineer</h3>
                        <p className="text-xs opacity-90">
                          Data Engineer Essentials
                        </p>
                      </div>
                    </div>
                  </li>
                  </Link>
                </ul>
              )}

              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/about-us">Refer & Earn</a>
              </li>
              <li>
                <a href="/about-us">Become an Instructor</a>
              </li>
            </ul>
            <Link href="/contact">
              <div className="justify-center text-center items-center p-3">
                <button
                  type="button"
                  class="text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  Contact Us
                </button>
              </div>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
