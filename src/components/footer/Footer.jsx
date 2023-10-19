import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
const line2 = [
  {
    title: "মজুরি ও বাজার দর",
  },
  {
    title: "সার্টিফিকেট",
  },
  {
    title: "ক্যালকুলেটর",
  },
  {
    title: "নিউজ ফ্লাশ",
  },
];

const line3 = [
  {
    title: "মজুরি ও বাজার দর",
  },
  {
    title: "সার্টিফিকেট",
  },
  {
    title: "ক্যালকুলেটর",
  },
  {
    title: "নিউজ ফ্লাশ",
  },
];
const Footer = () => {
  return (
    <div className="sm:mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[95px] 2xl:mt-[103px] bg-[#F3F5F6] px-4 sm:px-[20px] md:px-[40px] lg:px-[50px] xl:px-[80px] 2xl:px-[96px] py-[16px] sm:py-[20px] md:py-[35px] lg:py-[40px] xl:py-[55px] 2xl:py-[32px]">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm: md: lg: xl: 2xl: items-center">
        <div className="flex flex-col gap-2">
          <Image src={logo} width={86} />
          <h1 className="leading-loose">
            বিপিএলে এবার প্রতিটি দলেই আছেন একাধিক পাকিস্তানি ক্রিকেটার, দাপটও
            দেখিয়ে চলেছেন তাঁরা ক্রিকেটার
          </h1>
          <div className="flex justify-between">
          <Image src={"icons/insta.svg"} width={24} height={24} />
          <Image src={"icons/youtube.svg"} width={24} height={24} />
          <Image src={"icons/linkedin.svg"} width={24} height={24} />
          <Image src={"icons/facebook.svg"} width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {line2.map((item, index) => (
            <h1 key={index}>{item.title}</h1>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {line3.map((item, index) => (
            <h1 key={index}>{item.title}</h1>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
         <div>
         <h1 className="mb-2">নিউজ লেটার</h1>
          <div class="mb-4">
            <input
              type="text"
              id="input"
              name="input"
              class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="আপনার ইমেইল দিন"
            />
          </div>
          <div>
          <button className="bg-[#4852AE] w-full text-white py-4 rounded-[10px]">সাবস্ক্রাইব</button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
