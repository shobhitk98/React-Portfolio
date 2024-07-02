import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' text-center text-2xl  w-full h-full -mt-8'>
       

<div  className=' flex items-center justify-center gap-6  animate-bounce'>
<FaGithub className='duration-200 ease-in-out  hover:text-rose-600 cursor-pointer' />
<FaLinkedin className='duration-200 ease-in-out  hover:text-rose-600 cursor-pointer'/>
<FaInstagram className='duration-200 ease-in-out  hover:text-rose-600 cursor-pointer'/>
</div>

👨🏻‍🎓Shobhit-Portfolio|| All Rights Reserved
    </div>
  )
}

export default Footer
