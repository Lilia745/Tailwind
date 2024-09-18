import React from 'react'
import { motion } from "framer-motion"
import { SlideUp } from '../Animation/Animation'

const ExploreData=[
    {
        id:1,
        title:"Explore The World",
        place:"Norway",
        url:"#",
        image:"https://outdoor-travel.netlify.app/assets/1-DyBGVWRu.jpg",
        delay:0.2,
    },
    {
        id:2,
        title:"Antelop Canyon",
        place:"United States",
        url:"#",
        image:"https://outdoor-travel.netlify.app/assets/2-Bglyf79k.jpg",
        delay:0.4,
    },
    {
        id:3,
        title:"Lakes",
        place:"Austria",
        url:"#",
        image:"https://outdoor-travel.netlify.app/assets/3-BUcvFatf.jpg",
        delay:0.6,
    },
]
function Explore() {
    return (
        <>
            <section className='container' id='explore'>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{duration:2, delay:0.2}}
                    className='text-center md:max-w[650px] mx-auto space-y-4'>
                    <p className="text-3xl">Explore the World</p>
                    <p className='leading-3'>We look to provide the most authentic contentt from athletes, adventuren,</p>
                    <p className='leading-3'>explorers travellers autound the world. Our long them mission is to educate</p>
                    <p className='leading-3'>inspire and enuble all peoples to experience & protect wildeness.</p>
                </motion.div>
                <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center'>
                    {
                        ExploreData.map((data)=>(
                            <motion.div variants={SlideUp(data.delay)} initial="hidden" whileInView="visible" key={data.id} className='relative'>
                                <img src={data.image} className="w-[380px] h-[550px] object-cover" />
                                <div className="absolute w-full bottom-0 inset-0 bg-brandDark/15">
                                    <div className="h-full space-y-1 py-6 flex flex-col justify-end items-center">
                                        <h3 className="text-2xl font-semibold">{data.title}</h3>
                                        <p className="uppercase">{data.place}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">See More</button>
            </section>
        </>
    )
}

export default Explore