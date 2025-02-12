import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Book = () => {
  return (
   

      <div>
        <div className='flex flex-col  items-center  mt-[80px] gap-[60px]'>
            <h1 className='font-[600] text-[40px]'>
            Books & Publications by Chief Olaleye
            </h1>
            <p className='font-style: italic '>
            Sharing Knowledge Through Words
            </p>
        </div>
        <div className='flex  flex-row  items-center  gap-[40px]  max-w-5xl  mx-auto  mt-[50px]' id='about' >
                <div className='px-4  flex flex-col gap-4  '>
                    <Image  src={"/Book.png"}   width={210} height={100}/>
                    <p>
                    Chief Olaleye Amstrong
                    </p>
                </div>
            <div className=' w-[900px] '>
                <div className='text-black flex-col   '  >
                    <p className='font-[400] text-[30px] text-black'>
                    Business Unlocked
                    </p>
                    <p className='text-black py-4'  >
                        <span>
                    Doing business is an art that needs to be learned. No one can gain access to a house without the entrance key, and the ladder is easier to climb from the bottom up. We must learn and practise to become masters.
                        </span>
                    <br/>
                    <span className='mt-[130px]'>
The content of this book is practical and is meant to be practised. It is a manual for doing business because doing business is to be learned.
                    </span>

            </p>
            <Link href={''}>
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