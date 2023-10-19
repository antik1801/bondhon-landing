import Banner from '@/components/Header/Banner'
import BannerGallary from '@/components/Header/BannerGallary'
import MidWidth from '@/components/MidWidth'
import AddSection from '@/components/add/AddSection'
import BannerSection from '@/components/banner/BannerSection'
import Buttons from '@/components/buttons/Buttons'
import ButtonsAll from '@/components/buttons/ButtonsAll'
import ContentCard from '@/components/cards/ContentCard'
import MainCards from '@/components/cardsMain/MainCards'
import Footer from '@/components/footer/Footer'
import LayoutBanner from '@/components/minBannar/LayoutBanner'
import Navbar from '@/components/navbar/Navbar'
import AllButtons from '@/components/new/AllButtons'
import UnderSection from '@/components/under-group/UnderSection'
import WidthButtonGroup from '@/components/widthButtons/WidthButtonGroup'
import { Button } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-[1500px] mx-auto px-2 md:px-20 lg:px-[149px]'>
      <div className=''>
        <Navbar />
        {/* <LayoutBanner /> */}
        <div>
          <BannerSection />
        </div>
        <div className='sm: md: lg: xl: 2xl:'>
        <AllButtons />
        </div>
        <MainCards />
      </div>
      <div className='mt-[20px] sm:mt-[40px] md:mt-[60px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px] sm:mb-[80px] md:mb-[80px] lg:mb-[80px] xl:mb-[80px]2xl:mb-[80px]'>
        <MidWidth />
      </div>
      <div>
        <WidthButtonGroup />
      </div>
      <div>
        <UnderSection />
      </div>
      <div>
        <AddSection />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
