import React from "react";
import Link from "next/link";

const Button = ({ children, linkto }) => {
  return (
    <Link href="/">
      <div
        className={`bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-sm px-6 py-2 md:py-3 lg:py-3 xl:py-3 text-sm md:text-lg lg:text-lg xl:text-lg transition-all duration-200 ease-in-out
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
