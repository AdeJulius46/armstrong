import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col  md:flex-row justify-between py-12 px-8 text-white bg-black mt-[100px]'>
      <div className='flex flex-col  gap-4 py-4'>
        <p className='font-[700] text-[40px]'>Let’s talk</p>
        <p className='md:w-[290px] text-[16px]'>We’d love to connect with you! Whether you have a business inquiry, a leadership question, or feedback on my work, feel free to reach out.</p>
        <button className=' w-[90px]   md:border outline-0  border-l-indigo-500 bg-[#AE9819] py-2 text-[#FFFFFF]'>Contact me</button>
       
       {/* <button>
       Tell us more about your request
       </button> */}
      </div>
      <div  className='flex flex-col'>
        <div className='flex flex-col gap-4'>
        <p className='flex '>Email: <span className='md:ml-[20px]'>olaleyeolanipelumi@gmail.com</span></p>
        <p>Phone : <span className='md:ml-[20px]' typeof='email'>+234 813344189</span></p>
        <p>Address: <span className='md:ml-[20px]'>11 Hola Estate, Close to RCCG, Lagos
        Nigeria</span></p>

        </div>
      <div className='flex flex-row  md:flex flex-row gap-8 py-4  mt-3'>
        <Link href={""}>
          <Image src={"/skill-icons_linkedin.svg"}  width={30} height={30} alt='ffrf'/>
        </Link>
        <Link href={""}>
          <Image src={"/Vector.svg"}  width={10} height={10} alt='ffrf'/>
        </Link>
        <Link href={""}>
          <Image src={"/skill-icons_instagram.svg"}  width={30} height={30} alt='ffrf'/>
        </Link>

      </div>
      </div>
    </div>
  )
}

export default Footer