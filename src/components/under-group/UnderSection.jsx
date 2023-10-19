import Image from 'next/image'
import React from 'react'
import UnderGroupcard from './UnderGroupcard'

const line1 = [
    {},{}
]

const line2 =[
    {},{}
]
const UnderSection = () => {
  return (
    <div className='grid grid-cols-1 sm: md: lg:grid-cols-2 xl:grid-cols-9 2xl:grid-cols-12'>
        <div className='flex flex-col justify-between items-center gap-2 xl:grid-cols-3 xl:col-span-3  2xl:col-span-3'>
            {line1.map((item,index) => <UnderGroupcard key={index}/>)}
        </div>
        <div className='relative rounded-[20px] xl:col-span-6  2xl:col-span-6 flex justify-center items-center'>
            <Image src={"/icons/underMain.png"} width={591} height={589} className='rounded-[20px]'/>
            <div className='absolute bottom-0 bg-gradient-to-t from-[#070A1F]  to-[rgba(33,40,104,0.00)] h-full w-full rounded-[20px]'>
                {/* <h1 className='text-white'>মাননীয় প্রধানমন্ত্রীর থেকে এওয়ার্ড নিচ্ছেন আকিজ রিসোর্সেস লিমিটেড এর সিও ও মিনহাজ আহমেদ</h1> */}
            </div>
            <div className='absolute bottom-0 p-5'><h1 className='text-white text-center'>মাননীয় প্রধানমন্ত্রীর থেকে এওয়ার্ড নিচ্ছেন আকিজ রিসোর্সেস লিমিটেড এর সিও ও মিনহাজ আহমেদ</h1></div>
        </div>
        <div className='flex flex-col justify-between items-center xl:col-span-3 2xl:col-span-3'>
            {line1.map((item,index) =><UnderGroupcard key={index}/>)}
        </div>
    </div>
  )
}

export default UnderSection