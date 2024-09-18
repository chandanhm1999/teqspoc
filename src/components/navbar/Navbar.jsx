"use client";

import React, { useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { RiMenuFold2Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

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

  const handleMobileLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="fixed w-full z-[99] border-b-[1px] border-primary/50 bg-white text-black shadow-lg"
      >
        <nav className="flex h-[70px] items-center justify-between py-2 pl-4 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-6 2xl:pl-8">
          <div className="text-2xl text-white md:text-3xl ">
            <Link href="/">
              <Image src="/teq.svg" alt="teqspoc" width={150} height={70} />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block lg:block xl:block 2xl:block">
            <ul className="flex items-center gap-8 lg:gap-8 xl:gap-10 2xl:gap-15">
              {/* All Courses */}
              <li className="cursor pointer font-semibold">
                <Link href="/courses">All Courses</Link>
              </li>

              {/* Home section */}
              <li className="cursor pointer font-semibold">
                <Link href="/resources">Resources</Link>
              </li>

              {/* Refer us section */}
              <li className="cursor pointer font-semibold">
                <Link href="/refer">Refer & Earn</Link>
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
                <div className="absolute -left-9 z-[9999] hidden w-[250px] rounded-md bg-white p-2 text-black group-hover:block">
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

              {/* Blog Contact Us */}
              <li className="cursor pointer font-semibold">
                <Link href="/contact">Contact Us</Link>
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

          {/* Mobile view */}
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
                <Link href="/" onClick={handleMobileLinkClick}>
                  Home
                </Link>
              </li>

              {/* All Courses */}
              <li>
                <Link href="/courses" onClick={handleMobileLinkClick}>
                  All Courses
                </Link>
              </li>

              {/* Resources */}
              <li>
                <Link href="/resources" onClick={handleMobileLinkClick}>
                  Resources
                </Link>
              </li>

              {/* About us */}
              <li>
                <Link href="/about" onClick={handleMobileLinkClick}>
                  About us
                </Link>
              </li>

              {/* Refer */}
              <li>
                <Link href="/refer" onClick={handleMobileLinkClick}>
                  Refer & Earn
                </Link>
              </li>

              <li>
                <Link href="/instructor" onClick={handleMobileLinkClick}>
                  Become an Instructor
                </Link>
              </li>

              <Link href="/freejobassistance">
                <li className=" hover:bg-violet-200" onClick={handleMobileLinkClick}>
                  Free Job Assistance
                </li>
              </Link>
            </ul>
            <Link href="/contact">
              <div className="justify-center text-center items-center p-3">
                <button
                  type="button"
                  className="text-white text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
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