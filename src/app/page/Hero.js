import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' hidden md:h-screen  hero ' id='hero'>
      <div className='flex     flex-row flex  justify-between max-w-6xl  mx-auto pt-12    '>
      <div className='h-[60vh] w-[400px] ml-[40px] mt-[20px]'>
        <Image  src={"/armstrong.png"}   width={350} height={100} objectFit={'contain'}/>
      </div>
      <div className=' md:text-white max-w-2xl  bg-[url("/Skye.png")]  '>
       <div className='flex flex-col gap-6  items-center align-center py-[40px]  px-10'

       >
        <h1 className='font-[800] text-[44px] '>
        Empowering Businesses
          <br/>
          <span className='ml-[20px]'>

        Inspiring Leaders
          </span>
        </h1>
        <p className='font-[30] font-[500] '>A visionary leader, accomplished entrepreneur, and the Agba-Akin of Okin-Apa—building legacies in oil & gas, real estate, media, and beyond.</p>
        <p className='font-[20] font-[600]  border border-white  py-2 px-2 
font-style: italic  rounded-lg '>30+ Years in Business (Oil & Gas, Real Estate, Farming, Media, Fashion)
MBA in Marketing from LAUTECH
Public Speaker & Author on Business Growth & Leadership
Fellow of the Nigeria Lions Club Foundation
Passionate About Fairness & Influence</p>
<button className='bg-[#AE9819] px-4 py-2 '>
LEARN MORE
</button>

       </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
