import React from 'react'
import { motion } from "framer-motion"
import { SlideUp } from '../Animation/Animation'

const JournalData = [
    {
        id: 1,
        title: "An Unforgattable",
        about: "If you only have one day to visit yosemite National Park and you want to make the out of it.",
        data: "May 30, 2022",
        url: "#",
        image: "https://outdoor-travel.netlify.app/assets/5-CWnLV_0O.jpg",
        delay: 0.2
    },
    {
        id: 2,
        title: "Symphonies in Steel",
        about: "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
        data: "April 30, 2021",
        url: "#",
        image: "https://outdoor-travel.netlify.app/assets/6-BubZNka5.jpg",
        delay: 0.4
    },
]

function Journal() {
    return (
        <>
            <section className="container mt-40" id="Journal">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    className='text-center md:max-w[650px] mx-auto space-y-4'>
                    <p className="text-3xl">The Journal</p>
                    <p className='leading-3'>Our favorite stories about public lands and opportunities for you to go involved in</p>
                    <p className='leading-3'>protecting your outdoor experienced.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20">
                    {
                        JournalData.map((data) => (
                            <motion.div
                                variants={SlideUp(data.delay)}
                                initial="hidden"
                                whileInView="visible"
                                key={data.id}
                            >
                                <div className="overflow-hidden">
                                    <img src={data.image} className="w-full h-[350px] object-cover" />
                                </div>
                                <div className="space-y-1 py-6 text-center px-12">
                                    <p className="uppercase">{data.data}</p>
                                    <p className="text-xl font-semibold font-merriweather">{data.title}</p>
                                    <p className="!mt-7">{data.about}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">All post</button>
            </section>
        </>
    )
}

export default Journal