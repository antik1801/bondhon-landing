import React from 'react'
import img from "../../assets/card/1.png"
import SingleCard from './SingleCard'
import {AiOutlineArrowDown} from "react-icons/ai"

const mainCards = [
    {
        title: "শিকড় থেকে সুউচ্চ শিখরে",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "বিবি মারিয়ামের সমাধি কঞ্জারভেশন",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "কার্বন নির্গমন কমবে বিকল্প নির্মান উপকপরণে",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "Lizard",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "Lizard",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "Lizard",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "Lizard",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "Lizard",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    },{
        title: "Lizard",
        url: "/all",
        img: " https://ibb.co/zZs2gxY",
        details: "ব্লগ টি লিখেছেন- মইন আহমেদ"
    }
]
const MainCards = () => {
  return (
    <>
    <div className='mt-7 container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:  lg: xl: 2xl: justify-center'>
        {
           mainCards.map((item,index)=><SingleCard item={item} key={index}/>)
        }
    </div>
    <div className="flex items-center h-full justify-center mt-[15px] sm:mt-[20px] md:mt-[40px] lg:mt-[40px] xl:mt-[40px] 2xl:mt-[40px]">
    <button className="bg-gray-300 hover:bg-gray-400 text-[#070A1F]  py-4 px-8 rounded sm: md:mt-5 lg:mt-5 xl:mt-9 2xl:mt-11 flex items-center gap-2" style={{ padding: '12px' }}>
    আরও দেখুন <AiOutlineArrowDown />
    </button>
    </div>
    </>
  )
}

export default MainCards