import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-black px-6 text-sm rounded-full md:ml-8 hover:bg-indigo-400 duration-200 hover:grow-0 text-white font-serif py-1 p">
        {props.children}
      </button>
    </>
  );
};

export default Button;