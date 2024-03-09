import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Chat from '@/components/Chatbot/Chat'
import GoogleData from "../../public/images/certificates/GoogleData.png"
import Fullstack from "../../public/images/certificates/Fullstack.png"
import OOP from "../../public/images/certificates/OOP.png"


const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank"
        
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        
        >
            <h2 className='capitalize text-xl font-semibold hover:underline underline-offset-4'>
                {title}
            </h2>
            <FramerImage
            style={{x:x, y:y }}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration: 0.2}}}

            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg
            md:!hidden' />
        </Link>
    )
}

const Certificate = ({img, title, date, link}) => {
    return (
        <motion.li 
         initial={{y:160}}
         whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
         viewport={{once: true}}
        
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
            justify-between bg-light text-dark first:mt-0 border border-solid border-dark
            border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
            sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark
            sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}


const certificates = () => {
    return (
    <>
        <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden
                    dark:text-light'>
        <Layout className='pt-40 lg:pt-40 md:pt-40 sm:pt-40'>
            <AnimatedText text="Learning in Progress ..." 
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

            <ul>
                <Certificate
                    title="OOP: C# Intermediate: Classes, Interfaces and OOP
                    "
                    date="Started: January 2024"
                    link="https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/"
                    img={OOP}
                />  

                <Certificate
                    title="Full Stack: Deep Dive Into Modern Web Development
                    "
                    date="Started: September 2023"
                    link="https://fullstackopen.com/en/"
                    img={Fullstack}
                />    
              
                <Certificate
                    title="Data Analytics: Prepare Data for Exploration"
                    date="Completed: July 24, 2023"
                    link="https://coursera.org/share/fbc0c772436105e9d621e5b3edc9e8c3"
                    img={GoogleData}
                />  
            </ul>

            <Chat></Chat>

        </Layout>

    </main>
    </>
    )
}

export default certificates 