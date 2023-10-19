import Image from 'next/image'
import React from 'react'
import imgLeft from "../../assets/g1.png"
import img2 from "../../assets/build.png"

const LayoutBanner = () => {
  return (
    <div>
        <div className='grid  sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-12 sm:gap-1 md:gap-5 lg:gap-7 xl:gap-9'>
            <div className='sm:col-span-1 md:col-span-3 lg:col-span-5 xl:col-span-6 2xl:col-span-8 rounded-[30px]'>
                <Image src={imgLeft} width={902} className='rounded-[30px]'/>
            </div>
            <div className='sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3 2xl:col-span-4'>
                <div className='rounded-[30px]'>
                   <div>
                    
                   </div>
                </div>
                <div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayoutBanner