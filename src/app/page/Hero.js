import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (






<div>




    <div className=' hidden md:block  hero ' id='hero'>
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

    <div className='md:hidden'>

      <div>
        <div className='flex flex-col   md:flex-row flex   gap-[60px] px-4  mx-auto  max-w-5xl mt-[20px]  items-center py-4   mt-[90px]' >
                    <div className=''>
                        <Image  src={"/arme.svg"}  className=''  width={400} height={400} objectFit='contain'/>
                        {/* <Image  src={"/arm.svg"}  className='md:hidden'  width={100} height={100} objectFit='contain'/> */}
                    </div>
                <div className='max-w-5xl flex flex-col gap-2  '>
                    <div className='text-black flex-col  justify-between items-center   '  >
                        <div className='flex items-center justify-center '>
        
                        <p className='text-[22px] self-center  font-[800]   uppercase  text-black '>
                        Chief Olaleye Olanipekun  <br/>   <span className='px-[70px]'> Amstrong    </span>              </p>
                  
                        </div>
                    
                        </div>
                </div>
            </div>

      </div>




<div className='hero1  mt-[60px]'>
  <div className=' flex flex-col gap-8  py-12 max-w-5xl justify-center items-center mx-auto px-[80px]'>
      <h1 className='px-3 font-[600] text-[22px] max-w-3xl text-center'>Empowering Businesses, 
      Inspiring Leaders</h1>
      <p className='text-justify'>A visionary leader, accomplished entrepreneur, and the Agba-Akin of Okin-Apa—building legacies in oil & gas, real estate, media, and beyond.</p>
      <p className='text-start text-pretty  max-w-3xl'> 30+ Years in Business (Oil & Gas, Real Estate, Farming, Media, Fashion)
MBA in Marketing from LAUTECH
Public Speaker & Author on Business Growth & Leadership
Fellow of the Nigeria Lions Club Foundation
Passionate About Fairness & Influence</p>
  </div>



</div>



    </div>

</div>











  )
}

export default Hero
