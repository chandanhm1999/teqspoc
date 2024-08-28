import React from "react";
import Button from "./Button";

const Header = () => {
  const links = [
    { name: "home", link: "/" },
    { name: "Services", link: "/" },
    { name: "about", link: "/" },
    { name: "blog", link: "/" },
    { name: "contact", link: "/" },
  ];

  return (
    <div className="shadow-md w-full sticky top-0 left-0 bg-white lg:block hidden">
      <div className="lg:flex items-center justify-between bg-white py-2 lg:px-10 px-7">
        {/* Only show on large screens and up */}
        <div className="flex items-center ml-auto">
          {links?.map((link, i) => (
            <li key={link?.name} className="uppercase font-bold lg:ml-8 text-sm list-none">
              <a href={link.link} key={i} className="text-gray-400 hover:text-gray-900 duration-500">
                {link?.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
