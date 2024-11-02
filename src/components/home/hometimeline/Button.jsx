import React from "react";
import Link from "next/link";

const Button = ({ children, linkto }) => {
  return (
    <Link href={linkto}>
      <div
        className={`text-center text-sm bg-gradient-to-r from-gray-900 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-cyan-800 md:py-3 lg:py-3 xl:py-3 md:text-lg lg:text-lg xl:text-lg transition-all duration-200 ease-in-out text-white sm:text-[16px] px-6 py-3 rounded-sm font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;