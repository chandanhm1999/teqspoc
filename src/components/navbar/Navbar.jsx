"use client";

import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
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
        className="fixed w-full z-[99] border-b-[1px]  border-primary/50 bg-gradient-to-l from-white via-blue-100 to-white text-black shadow-lg"
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
              <li className="cursor pointer group">
                <a
                  href="/#home"
                  className="flex h-[70px] font-semibold text-black px-4 items-center gap-[2px]"
                >
                  All Courses{" "}
                  <span className="ml-1">
                    <FaCaretDown className="transition-all text-xl duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-gray-50 p-2 text-black group-hover:block  ">
                  <div className="grid grid-cols-3 gap-5 ">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[450px] w-full rounded-b-3xl object-fill"
                        src="/assets/navbar/post.jpg"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="grid grid-cols-3 gap-2 ">
                        <ul className="mt-3 flex flex-col gap-4">
                          <h1 className="text-xl font-bold text-gray-800">
                            Development
                          </h1>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="/assets/navbar/scrum.png"
                              alt="Scrum Master Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                Scrum Master
                              </h3>
                              <p className="text-xs opacity-90">
                                Certified® Scrum Master
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="/assets/navbar/dotnet.png"
                              alt="dotnet Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                DotNet® Certification
                              </h3>
                              <p className="text-xs opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="/assets/navbar/java.png"
                              alt="java Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                Java® Certification
                              </h3>
                              <p className="text-xs opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 transition-all hover:text-white duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>
                        </ul>

                        <ul className="mt-3 flex flex-col gap-4">
                          <h1 className="text-xl font-bold text-gray-800">
                            Course
                          </h1>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="/assets/navbar/testing.png"
                              alt="testing Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">Testing</h3>
                              <p className="text-xs opacity-90">
                                FullStack Testing
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs px-2 py-1 bg-green-800 text-white hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="/assets/navbar/data.png"
                              alt="data Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                Data Engineer
                              </h3>
                              <p className="text-xs opacity-90">
                                Certified® Data Engineer
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="/assets/navbar/devops.png"
                              alt="devops Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">DevOps</h3>
                              <p className="text-xs opacity-90">
                                Certified® DevOps Course
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>
                        </ul>
                        <div>
                          <img
                            src="/assets/navbar/rightside.png"
                            alt="no image"
                          />
                        </div>
                      </div>
                      <h1 className="pt-3 text-lg font-semibold">
                        Earn Industry-Respected Certifications
                      </h1>
                      <p className="text-sm text-slate-600 w-5/5">
                        Boost your career with certifications that are valued by
                        top employers and recognized globally.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              {/* "for resources in resources" */}

              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] font-semibold items-center gap-[2px]"
                >
                  Resource{" "}
                  <span>
                    <FaCaretDown className="transition-all text-xl duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[250px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-2">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/scrum.png"
                        alt="Scrum Master Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Scrum Master</h3>
                        <p className="text-xs opacity-90">
                          Your Guide to Scrum Mastery
                        </p>
                      </div>
                    </div>
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/java.png"
                        alt="java Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Java</h3>
                        <p className="text-xs opacity-90">
                          Java Master Toolkit
                        </p>
                      </div>
                    </div>
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">DotNet</h3>
                        <p className="text-xs opacity-90">
                          Mastering DotNet Essentials
                        </p>
                      </div>
                    </div>
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/testing.png"
                        alt="testing Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Software Testing</h3>
                        <p className="text-xs opacity-90">
                          Software Testing Resource Hub
                        </p>
                      </div>
                    </div>
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Data Engineer</h3>
                        <p className="text-xs opacity-90">
                          Data Engineer Essentials
                        </p>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>

              {/* About us section */}
              <li className="cursor pointer">
                <a href="/about">About us</a>
              </li>

              {/* About us section */}
              <li className="cursor pointer">
                <a href="/#contact">Refer & Earn</a>
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
                    <li className="p-2 hover:bg-violet-200">
                      Become an Instructor
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      Free Job Assistance
                    </li>
                  </ul>
                </div>
              </li>

              {/* blog contact us */}
              <li className="cursor pointer">
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
                <a href="/#home">Home</a>
              </li>
              <li onClick={toggleDropdown} className="cursor-pointer">
                All Courses
                <FaCaretDown
                  className={`inline ml-2 transition-all duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </li>
              {isDropdownOpen && (
                <ul className="flex flex-col pl-4 text-sm">
                  <li className="p-2 hover:bg-blue-200">
                    <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/scrum.png"
                        alt="Scrum Master Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Scrum Master</h3>
                        <p className="text-xs opacity-90">
                          Certified® Scrum Master
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">
                          DotNet® Certification
                        </h3>
                        <p className="text-xs opacity-90">
                          FullStack Development
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/java.png"
                        alt="java Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">
                          Java® Certification
                        </h3>
                        <p className="text-xs opacity-90">
                          FullStack Development
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/testing.png"
                        alt="testing Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Software Testing</h3>
                        <p className="text-xs opacity-90">FullStack Testing</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Data Engineer</h3>
                        <p className="text-xs opacity-90">
                          Certified® Data Engineer
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/testing.png"
                        alt="testing Logo"
                        className="w-10 h-10 mr-2 rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-col w-full">
                        <h3 className="text-xs font-bold">Devops</h3>
                        <p className="text-xs opacity-90">
                          Certified® DevOps Course
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              )}

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
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/scrum.png"
                        alt="Scrum Master Logo"
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
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
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
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/java.png"
                        alt="java Logo"
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
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/testing.png"
                        alt="testing Logo"
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
                  <li className="p-2 hover:bg-blue-400">
                    <div className="p-2 text-black border-r-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                      <img
                        src="/assets/navbar/devops.png"
                        alt="devops Logo"
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
              <button type="button" class="text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2">Contact Us</button>
            </div>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
