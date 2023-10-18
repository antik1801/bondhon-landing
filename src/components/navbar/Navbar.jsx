"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import Link from 'next/link';
import { BiSearch } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";

const navlink = [
    {
        path:"/",
        title: "মজুরি ও বাজারদর",
    },
    {
        path:"/certicte",
        title: "সার্টিফিকেট",
    },
    {
        path:"/calculator",
        title: "ক্যালকুলেটর",
    },
    {
        path:"/news",
        title: "নিউজফ্ল্যাশ",
    }
];

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center p-4'>
            <Link href="/">
              
                    <Image src={logo} width={86} height={86} alt="Logo" />
                
            </Link>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                {navlink.map(({ path, title }) => (
                    <Link key={path} href={path}>
                       {title}
                    </Link>
                ))}
            </div>
            <div className='hidden md:flex space-x-4 items-center'>
                {navlink.map(({ path, title }) => (
                    <Link key={path} href={path}>
                        {title}
                    </Link>
                ))}
            </div>
            <div className='flex items-center gap-4 md:flex'>
                <BiSearch size={24} className='' />
                <MdDarkMode size={34} className='' />
                <div onClick={() => setMenuOpen(!isMenuOpen)} className='md:hidden flex flex-col gap-3'>
                    <div className={`w-6 h-1 bg-gray-800 my-1 ${isMenuOpen ? 'transform rotate-45' : ''}`}></div>
                    <div className={`w-6 h-1 bg-gray-800 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-1 bg-gray-800 my-1 ${isMenuOpen ? 'transform -rotate-45' : ''}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;