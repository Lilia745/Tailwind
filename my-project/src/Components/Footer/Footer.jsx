import React from 'react'
import { motion } from "framer-motion"

const bgImage = {
    backgroundImage: `url(https://outdoor-travel.netlify.app/assets/footer-DLvb8Ty4.jpg)`,
    backgroundRepeat: "no-reapet",
    backgroundPosition: "center",
    backgroundSize: "cover",
}

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            style={bgImage}
            className="mt-16 h-[500px] bg-brandDark relative flex justify-center items-end">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
                style={{
                    background:
                        "radial-gradient(circle,rgba(0,0,0,0.3) 50%, rgba(11,11,13,0.5) 70%, rgba(11,11,13,0.8) 90%,)"

                }}></div>
            <p className="relative z-10 mb-6">© 2024. All rights reserved | The Coding Journey</p>
        </motion.footer>
    )
}

export default Footer