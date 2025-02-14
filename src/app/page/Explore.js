import React from 'react'
import Image from 'next/image'
const Explore = () => {
  return (
    <div className='explore'>
   
   <div className='flex flex-col   border  border-none  md:flex-row flex border  border-black   gap-[60px] px-4  mx-auto  max-w-5xl mt-[20px]  items-center py-4   mt-[90px]' >
            <div className=''>
                <Image  src={"/arm.svg"}  className=''  width={400} height={400} objectFit='contain'/>
                {/* <Image  src={"/arm.svg"}  className='md:hidden'  width={100} height={100} objectFit='contain'/> */}
            </div>
        <div className='max-w-5xl flex flex-col gap-2  '>
            <div className='mt-2 flex flex-col  md:text-black flex-col  justify-between   '  >
                <div className=' mt-[-10px] md:flex flex-col gap-4 mt-[60px]'>

                <p className='font-[300] text-wrap text-black text-[19px]'>
                Meet Chief Olaleye Olanipekun Amstrong
                </p>
                <p className='text-[20px]  md:font-[600] text-black text-[22px]'>
                Chief Olaleye Olanipekun Amstrong                </p>
                <p className='font-[300] text-black font-style: italic '>
                B.Tech., MBA., NLCF (The Agba-Akin of Okin-Apa)
                </p>
                <p className='font-[500] text-black'>
                Business Leader | Public Speaker | Author
                </p>
                </div>
                    <div className='mt-[40px] flex flex-col '>
                        <h1 className='font-[600] text-[30px] text-wrap '>  BIOGRAPHY</h1>
                        <ul className='  text-[13px]  md:list-disc  list-inside mt-[10px] font-[400] text-[15px]' >
                        <li className=''>Experience: 30+ years in business (Oil & Gas, Real Estate, Farming, Media, Fashion)
                        </li>
                        <li> Education: MBA (Marketing) from LAUTECH
                        </li>
                        <li>Speaking & Writing: Public speaker, author, and leadership mentor
                        </li>
                    </ul>
                    <button className='bg-black text-white py-2 px-4 mt-[20px]'>
                    EXPLORE MORE
                    </button>
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}

export default Explore