import React from 'react'
import Section from './common/Section'
import { FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa6";
import mob from  '../assets/mobile.png'


const Contact = () => {


    const social=[
        {
         id:1,
         link:"https://github.com/shobhitk98",
         icon:<FaGithub/>,
        },
        {
            id:2,
            link:"https://www.linkedin.com/in/shobhit-kumar-026102205/",
            icon:<FaLinkedin/>,
           },
           {
            id:3,
            link:"https://www.instagram.com/shobhitk98/",
            icon:<FaInstagram/>,
           },
    ];

  return (
  <Section title="Contact 📞" subtitle="These are the ways you can get in touch with me .Hope to hear from you soon:).">


<div className=' flex flex-col items-center justify-center gap-8 text-center'>
    <div><img src={mob}alt=" contact info"  className=' w-32 h-32'/></div>
    <div>
        <p className=' max-w-xs  md:max-w-lg font-extralight'>
            I am open to talk regarding freelancing or full-time opportunities.
            Feel Free to contact me using your preferred medium.
        </p>
    </div>
    <div className=' flex w-full items-center justify-evenly text-3xl'>
        {
        social.map(({id, link, icon})=>(
            <a href={link} target='_blank' rel='noopener noreferrer' className=' duration-200 ease-in-out  hover:text-rose-500' >{icon}</a>
        ))}


    </div>

    {/* bottm form  */}
    <div className='p-8 text-left w-full'>
       <form action="https://getform.io/f/panvzmga" method='POST'>
        <div className=' gap4 w-full'>
            <div className=' flex flex-col'>
                <label className=' capitalize text-sm py-2 font-extralight'>name</label>
                <input type="text" name='name' className=' border-2 rounded-lg p-3 flex  focus:outline-none border-gray-400
                dark:bg-gray-900 dark:text-white'  />

            </div>
            <div className=' flex flex-col'>
                <label className=' capitalize text-sm py-2 font-extralight'>phone</label>
                <input type="text" name='phone' className=' border-2 rounded-lg p-3 flex  focus:outline-none border-gray-400
                dark:bg-gray-900 dark:text-white'  />

            </div>
            <div className=' flex flex-col'>
                <label className=' capitalize text-sm py-2 font-extralight'>email</label>
                <input type="text" name='email' className=' border-2 rounded-lg p-3 flex  focus:outline-none border-gray-400
                dark:bg-gray-900 dark:text-white'  />

            </div>
            <div className=' flex flex-col'>
                <label className=' capitalize text-sm py-2 font-extralight'>message</label>
                <textarea name="message" rows="10" className='border-2 rounded-lg p-3 flex  focus:outline-none border-gray-400
                dark:bg-gray-900 dark:text-white'></textarea>
                

            </div>
        </div>
        <div className=' flex items-center justify-center'>
            <button className='  my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer
            hover:scale-110 duration-200'> Send Message</button>
        </div>
       </form>

    </div>
</div>

  </Section>

    )
}


export default Contact
