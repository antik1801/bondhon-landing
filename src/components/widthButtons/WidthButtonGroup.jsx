import React from 'react'
import Button from '@mui/material/Button';
const buttons = [
    {
        title: "ব্যবসায়িক"
    },{
        title: "অন্যান্য"
    },{
        title: "অন্যান্য"
    },{
        title: "অন্যান্য"
    },{
        title: "অন্যান্য"
    }
]

const WidthButtonGroup = () => {
  return (
    <div className='grid justify-between grid-cols-2 mb-4'>
        <div>
        <p className='text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] font-[600] text-[#000]'>নিউজ ফ্লাশ</p>
        </div>
        <div className='ml-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1'>
            {
                buttons.map((button, index) =><button key={index} className='mr-1'>{button.title}</button>)
            }
        </div>
        </div>
    </div>
  )
}

export default WidthButtonGroup