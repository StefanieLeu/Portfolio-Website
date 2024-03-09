import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";


const MotionLink = motion(Link);

const Logo = () => {
    return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-12 sm:h-12 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl lg:text-xl md:text-xl sm:text-xl font-bold border border-solid border-transparent dark:border-light
        '
        whileHover={{
            backgroundColor:["#121212", "rgba(52,104,192)","rgb(255, 152, 67)","rgb(166, 77, 121)","rgba(49,32,224)", "#121212"],
            transition:{duration:1, repeat:Infinity}
        }}
        >SL</MotionLink>
    </div>
    )
}

export default Logo