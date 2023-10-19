import Image from 'next/image'
import React from 'react'

const BannerSection = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-10 lg:grid-cols-12'>
            <div className='sm: md:col-span-7 lg: xl:col-span-7 2xl:col-span-8'>1</div>
            <div className='sm: md:col-span-3 lg: xl:col-span-3 2xl:col-span-4'>2</div>
        </div>
    </div>
  )
}

export default BannerSection