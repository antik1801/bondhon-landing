import Image from 'next/image'
import React from 'react'

const AddSection = () => {
  return (
    <div className='flex justify-center rounded-[20px]'>
        <Image src={"/ads.png"} width={1005} height={160} className='rounded-[20px] mt-[50px] md: lg:mt-[50px] xl:mt-[80px] 2xl:mt-[103px]' />
    </div>
  )
}

export default AddSection