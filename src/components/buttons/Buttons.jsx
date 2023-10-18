import React from "react";
import {FaGreaterThan} from "react-icons/fa"

const Buttons = ({title,color, icon, text }) => {
    console.log(color)
  return (
    <button className={`rounded-[10px] bg-[${color}] text-[${text}] ray flex p-2 justify-center items-center gap-2`}>
      {/* Icon or content goes here */}
      <span>{title}{icon && <FaGreaterThan />}</span>
    </button>
  );
};

export default Buttons;
