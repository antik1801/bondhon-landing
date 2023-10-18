import Banner from '@/components/Header/Banner'
import Buttons from '@/components/buttons/Buttons'
import ButtonsAll from '@/components/buttons/ButtonsAll'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-[1500px] mx-auto'>
      <div className=''>
        <Navbar />
        <Banner />
        <div className='mt-[103px]'>
        <ButtonsAll />
        </div>
      </div>
    </main>
  )
}
