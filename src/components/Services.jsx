import React from 'react'
import Section from './common/Section'
import web from '../assets/web.png'
import front from '../assets/mobile.png'
import eco from '../assets/commerce.png'
import res from '../assets/research.png'

const Services = () => {
const services=[

{
    id:1,
    image:web,
    title:"Web Development"
},
{
    id:2,
    image:front,
    title:"Front  end Development"
},
{
    id:3,
    image:eco,
    title:"Ecommerce Website"
},
{
    id:4,
    image:res,
    title:"Research and Development"

}

]



  return <Section title="Services ⚒️" subtitle="Here  are all the services Which I have Expertise in it.I hope I offer a service that you
  are looking for Contact me anytime through ">


<div className=' grid gap-10 lg:grid-cols-2'>
    {
        services.map(({id,image,title})=>(
            // here was a flex col after flex
            <div key={id} className=' gap-5 flex  items-center justify-center p-5 shadow-lg  dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                <img className=' w-34 h-36 md:w-44 md:h-44 object-contain' src={image} alt="" />
                <h3 className=' mt-5 text-base'>{title}</h3>
            </div>
        ))
    }
</div>


  </Section>

}

export default Services
