import Image from "next/image";
import React from "react";
import buildPic from "../../assets/g1.png";
import img2 from "../../assets/build.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const BannerGallary = () => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-10">
        <div className="rounded-[30px]">
          <Image src={buildPic} className="rounded-[30px]" />
        </div>
        </div>
        <div >
          <div className="rounded-[30px]">
            <Image src={img2} className="rounded-[30px] w-full" />
          </div>
          <div className=" bg-slate-600 rounded-[30px]">
            <div className="bg-[#4852AE] rounded-t-[20px] h-21px w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGallary;
