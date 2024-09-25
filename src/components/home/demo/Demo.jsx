import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextLight from "./TextLight";

const Demo = () => {
  return (
    <div className="bg-[#1F2937] h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-white lg:text-3xl xl:lg:text-3xl dark:text-white">
              Discover
            </h2>

            <p className="hidden max-w-screen-sm text-gray-200 dark:text-gray-300 md:block">
              top-tier courses crafted by industry experts, designed to elevate
              your skills and knowledge. Learn from the best to stay ahead in
              your field and achieve your <TextLight text={"career goals."} />
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <Link
            href="/courses"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src="/assets/demo/online.svg"
              width={389}
              height={262}
              alt="Online Course By TeqSpoc"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Online-Learning
            </span>
          </Link>

          <Link
            href="/courses"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              src="/assets/demo/onlinelearning.jpg"
              width={389}
              height={262}
              alt="Mentorship Program By TeqSpoc"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Mentorship Program
            </span>
          </Link>

          <Link
            href="/courses"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              src="/assets/demo/offlinelearning.jpg"
              width={389}
              height={262}
              alt="ClassRoom Training By TeqSpoc"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              ClassRoom Training
            </span>
          </Link>

          <Link
            href="/courses"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src="/assets/demo/offline.svg"
              width={389}
              height={262}
              alt="Offline Course By TeqSpoc"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Offline-Learning
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demo;
