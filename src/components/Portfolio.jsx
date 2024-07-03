import React from 'react'
import Section from './common/Section'
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa";
import p1 from'../assets/p1.jpg'
import p2 from'../assets/p2.jpg'
import p3 from'../assets/p3.jpg'
import p4 from'../assets/p4.jpg'


const Portfolio = () => {
 const projects=[
    {
        id:1,
        image:p1,
        title:"FoodStore",
        github:"https://github.com/shobhitk98/React-Food-Store",
        demo:"https://foodstoreproject.netlify.app",
    },
    {
        id:2,
        image:p2,
        title:"Portfolio Website Design",
        github:"https://github.com/shobhitk98/DevPortfolio",
        demo:"https://frontdevport.netlify.app",
    },
    {
        id:3,
        image:p3,
        title:"Shoes Ecommerce Store",
        github:"https://github.com/shobhitk98/Shoes-project",
        demo:"https://projectshoes.netlify.app",
    },
    {
        id:4,
        image:p4,
        title:"Ecommerce Store",
        github:"https://github.com/shobhitk98/Mens-store-project",
        demo:"https://shobhitk98.github.io/Mens-store-project/",
    },
 ];





  return <Section title="Portfolio 💼" subtitle="These are all the projects  that I have worked on.Some of them I have worked   before
  I gained some experience.So go gentle on them">




    <div className=' grid  gap-8 lg:gap-14  lg:grid-cols-2'>

        {
            projects.map(({id,image,title,github,demo})=>(
                
                <div key={id} className=' max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl  duration-300 ease-in-out hover:scale-110 overflow-hidden'>
                    <img src={image} alt={title}  className=' w-2/3'/>
                    <div className=' w-1/3 flex flex-col items-center  justify-evenly p-1'>
                        <h2>{title}</h2>
                        <a href={github} target='_blank' rel='noopener noreferrer' className=' text-2xl cursor-pointer duration-150 hover:scale-150'><FaGithub/></a>
                        <a href={demo} target='_blank' rel='noopener noreferrer' className=' text-2xl cursor-pointer duration-150 hover:scale-150'><FaExternalLinkAlt/></a>
                        
                    </div>
                </div>

            ))}

    </div>
  </Section>
}

export default Portfolio
