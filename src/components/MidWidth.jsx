import Image from "next/image";
import React from "react";
import img from "../assets/silk.png";

const MidWidth = () => {
  return (
    <>
      <div className="flex items-center h-full justify-center rounded-[20px] sm: md: lg: xl: 2xl:">
        <Image src={img} width={1005} className="rounded-[20px]"/>
      </div>
    </>
  );
};

export default MidWidth;
