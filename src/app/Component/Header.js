"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {useEffect } from 'react';
const Header = () => {
  const path =usePathname()
  
  const [toggle , Settogle]= useState(false)

  const togglebtn =()=>{
    Settogle(prev => !prev)
  }

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' font-semibold text-[24px]'>

        <div className={` hidden md:flex flex-row justify-around  w-full  fer   text-white   item-center    py-2 ${scroll ? 'bg-black' : 'bg-black'} `} >

          <div className=''>
            <Link href={''}>
            <h1 className='uppercase'>
            Chief
            Olaleye
            </h1>
            </Link>
          </div>



          <div className='flex flex-row gap-[90px] '>
            <Link href={"/#hero"}  className={path ==="/#hero"?"active":""}>
           <div className=''>HOME</div>
            </Link>
            <Link href={"/#explore"}  id={path ==="/#explore"?"active":""} >
           <div>ABOUT</div>
            </Link>
            <Link href={"/#contact"} className={/#contact/.test(path)
                     ?"active":""}>
           <div>CONTACT</div>
            </Link>
          </div>
        </div>



        
    
<div className='md:hidden    fer  '>
    <nav  className='flex flex-row justify-between items-center  mx-4 my-4 '>
    <div className='ml-4'>
    <h1 className='uppercase'>
            Chief
            Olaleye
            </h1>
      {/* <Image src={"/Vector .png"}   width={25} height={19}/> */}
    </div>

    <button className='flex mr-2  text-white' onClick={togglebtn}>  
    <Image src={"/Close.png"}   width={25} height={19}/>
         </button>
      {   toggle &&(
              <div  className='flex flex-col w-full   gap-8 text-black py-1 top-[13px] bg-white text-black font-bold absolute top-[1px]   right-[1px] '>
                    <button className='self-end mx-3  mt-2  text-white' onClick={togglebtn}>  
                    <Image src={"/Close.png"}   width={25} height={19} alt='lksl'/>
                     </button>
                     {/* <div className=''> */}
              <div className='mx-2'>
              <Link href={"/"}>
           <div className=''>Home</div>
            </Link>
              </div>
              <div className='mx-2'>
              <Link href={"/#about"}>
           <div>About</div>
            </Link>
              </div>
              <div className='mx-2'>
              <Link href={"/#contact"}>
           <div>Contact</div>
            </Link>
              </div>
            </div>

      )
      }
     
    </nav> 

</div>


    </div>
  )
}

export default Header