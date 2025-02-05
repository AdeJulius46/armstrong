import React from 'react'
import Image from 'next/image'
const Explore = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row flex border border-black   gap-[90px] max-w-5xl mt-[20px]  py-4 px-2  mx-auto  mt-[90px]' id='about' >
            <div className='  '>
                <Image  src={"/arm.svg"}   width={400} height={400}/>
            </div>
        <div className='flex flex-col gap-8 w-[400px] '>
            <div className='mt-8   text-black flex-col  justify-between  items-center '  >
                <p className='font-bold text-black'>
                Meet Chief Olaleye Olanipekun Amstrong
                </p>
                <p className='font-bold text-black'>
                Chief Olaleye Olanipekun Amstrong                </p>
                <p className='font-bold text-black'>
                B.Tech., MBA., NLCF (The Agba-Akin of Okin-Apa)
                </p>
                <p className='font-bold text-black'>
                Business Leader | Public Speaker | Author
                </p>
                    <div>
                        <h1>  BIOGRAPHY</h1>
                        <ul className='list-disc list-inside'>
                        <li>Experience: 30+ years in business (Oil & Gas, Real Estate, Farming, Media, Fashion)
                        </li>
                        <li> Education: MBA (Marketing) from LAUTECH
                        </li>
                        <li>Speaking & Writing: Public speaker, author, and leadership mentor
                        </li>
                    </ul>
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}

export default Explore