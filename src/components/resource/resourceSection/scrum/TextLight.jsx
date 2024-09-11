import React from "react";

const TextLight = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#0c130f] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default TextLight;
