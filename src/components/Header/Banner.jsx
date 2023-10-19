import Image from 'next/image'
import React from 'react'
import left1 from "../../assets/build.png"

const Banner = () => {
  
  return (
  
    <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-8'>
    <div className='element col-span-2'></div>
    <div>
        <Image src={left1}  className='rounded-[20px] h-1/2'/>
    </div>
         
    </div>
  
  )
}

export default Banner