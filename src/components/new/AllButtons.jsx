import React from "react";
import SingleButton from "./SingleButton";

const buttonContent = [
  {
    title: "গবেষণামূলক প্রকল্প",
    url: "/",
  },
  {
    title: "মূল রচনা",
    url: "/",
  },
  {
    title: "ফোকাস",
    url: "/",
  },
  {
    title: "নির্মাণ তথ্য",
    url: "/",
  },
  {
    title: "স্পটলাইট",
    url: "/",
  },
  {
    title: "নির্মাণ উপকরণ",
    url: "/",
  },
  {
    title: "রঙ্গিন ঘরের গল্প",
    url: "/",
  },
  {
    title: "নির্মাণে এগিয়ে চলছে বিশ্ব",
    url: "/",
  },
  {
    title: "সকল ক্যাটাগরি",
    url: "/all",
  },
];

const AllButtons = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 2xl:grid-cols-9  gap-2">
        {buttonContent.map((item, index) => (
          <SingleButton item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllButtons;
