import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Book = () => {
  return (
   

      <div>
        <div className='flex flex-col  items-center  mt-[80px] gap-[60px]'>
            <h1 className='text-[2.0rem]  text-wrap px-[20px] items-center  md:hidden'>
            Books & Publications <br/>by Chief Olaleye
            </h1>
            <h1 className='hidden  md:block font-[600] text-[3rem]'>
            Books & Publications by Chief Olaleye
            </h1>
            <p className='font-style: italic '>
            Sharing Knowledge Through Words
            </p>
        </div>
        <div className='flex  flex-col  md:flex-row  items-center  gap-[40px]  max-w-5xl  mx-auto  mt-[50px]' id='about' >
                <div className='px-4  flex flex-col gap-4  '>
                    <Image  src={"/Book.png"}   width={210} height={100}/>
                    <p>
                    Chief Olaleye Amstrong
                    </p>
                </div>
            <div className=' max-w-5xl md:w-[900px]'>
                <div className='  flex items-start   md:text-black flex flex-col items-center   '  >
                    <p className='font-[400] text-[30px] text-black'>
                    Business Unlocked
                    </p>
                    <p className='  px-8 text-wrap text-black py-4'  >
                        <span>
                    Doing business is an art that needs to be learned. No one can gain access to a house without the entrance key, and the ladder is easier to climb from the bottom up. We must learn and practise to become masters.
                        </span>
                    <br/>
                    <span className='mt-[130px]'>
The content of this book is practical and is meant to be practised. It is a manual for doing business because doing business is to be learned.
                    </span>

            </p>
            <Link href={''} className='max-w-5xl'>
            <button  className='bg-black text-white py-2 px-4 mt-[20px]  uppercase'>
            Get The Book                    </button>
            </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Book