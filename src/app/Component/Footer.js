import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between py-12 px-8 text-white bg-black'>
      <div className='flex flex-col  gap-4 py-4'>
        <p className='font-[700] text-[40px]'>Let’s talk</p>
        <p className='w-[290px] text-[16px]'>We’d love to connect with you! Whether you have a business inquiry, a leadership question, or feedback on my work, feel free to reach out.</p>
       
       {/* <button>
       Tell us more about your request
       </button> */}
      </div>
      <div>
        <p>Email: <span>olaleyeolanipelumi@gmail.com</span></p>
        <p>Email: <span>olaleyeolanipelumi@gmail.com</span></p>
        <p>Email: <span>olaleyeolanipelumi@gmail.com</span></p>
        <p>Email: <span>olaleyeolanipelumi@gmail.com</span></p>
      </div>
    </div>
  )
}

export default Footer