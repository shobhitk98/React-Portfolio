import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram , FaArrowDown } from "react-icons/fa6";
import avatar from '../assets/avatar.png'
const Hero = () => {

    const social=[
        {
         id:1,
         link:"https://github.com/shobhitk98",
         icon:<FaGithub/>
        },
        {
            id:2,
            link:"https://www.linkedin.com/in/shobhit-kumar-026102205/",
            icon:<FaLinkedin/>
           },
           {
            id:3,
            link:"https://www.instagram.com/shobhitk98/",
            icon:<FaInstagram/>
           },
    ];
    window.addEventListener("scroll",function(){
        const downArrow= document.querySelector(".down-arrow");
        if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow") ;
       else downArrow.classList.remove("hide-down-arrow") ;
    });


  return (
    <section className=' min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className=' text-5xl text-rose-600  font-bold uppercase'>Shobhit</h2>
        <h3 className='  animate-bounce py-3 text-2xl'>Front end Developer</h3>
        <p className=' max-w-xl font-light text-gray-500'>
           Hello <span className=' animate-pulse text-4xl'>👋</span> 
           Welcome to my Portfolio . I am a Front end Developer I design and code beautifully simple things, and I love what I do
        </p>
       {/* social */}
       <div className=' flex justify-evenly py-8 lg:py-10 text-3xl w-full md:w-1/3 '>
        {social.map(({ id,link,icon})=>(
            <a className=' cursor-pointer duration-300 hover:text-rose-600 ' href={link} key={id}target='_blank' rel='noopener noreferrer' >{icon}</a>

        ))}
           </div>
         {/* avatar and resume */}
        <div>
            <img src={avatar} alt="avatar" className=' w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl' />
            <a href="/FrontendDeveloper.pdf"  download={true} className=' flex justify-center items-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500
             text-white py-2 rounded-lg animate-pulse' >Resume</a>
        </div>
        {/* arrwo down  */}
      
    <div className=' mt-10 down-arrow'>
        <FaArrowDown className=' text-gray-400 text-2xl animate-bounce'/>
    </div>


    </section>
  )
}

export default Hero
