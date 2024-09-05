'use client'

//Framer motion
import { motion } from "framer-motion"

//Hooks
import useScrollProgress from "@/hooks/useScrollProgress"

//Variants
const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
}

const template = ({children}) => {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main
            variants={variants}
            initial='hidden'
            animate='enter'
            transition={{ type: 'linear', delay: 0.2, duration: 0.4}}
            className="bg-blend-overlay dark:bg-blend-multiply dark:bg-[rgba(40,42,63,255)]"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(150, 150, 150, 1)),  
                    url("/imgs/bg-texture.jpg")
                `,  
                backgroundRepeat: 'repeat',                     
                backgroundSize: 'auto',                 
                backgroundPosition: 'center',
                }}
            >
                
                {children}
            </motion.main>

            <span
            style={{transform: `translateY(${completion - 100}%)` }}
            className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700">
            </span>

        </>
    )
}

export default template
