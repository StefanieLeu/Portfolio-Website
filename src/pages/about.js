/* eslint-disable react/no-unescaped-entities */

import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import profilePic1 from "../../public/images/profile/Profilfoto1.svg"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
// import Experience from "@/components/Experience"
// import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"
import Chat from '@/components/Chatbot/Chat'
import Certificates from '@/components/Certificates'
import ChatGPT from '@/components/GPT/ChatGPT'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null); 
const motionValue = useMotionValue(0)
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
   springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0);
        }
   })

}, [springValue, value])
    return <span ref={ref}> </span>
}

const about = () => {
    return (
        <> 
                <Head>
                    <title>Portfolio | About </title>
                    <meta name="About Page" content="Stefanie Leutenegger Portfolio Data Scientist Data Science Machine Learning Data Analysis Visualization Statistics Big Data" />
                </Head>
                <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-40 lg:pt-40 md:pt-40 sm:pt-40">
                <AnimatedText text="About me" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm::mb-8" />
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">biography</h2>
                    <p className="font-medium">
                    Hi, I'm Stefanie, an enthusiastic engineering graduate with a diverse range of experiences 
                    that have shaped my professional journey.
                    </p>
                    <p className="my-4 font-medium">
                    During my time as a student, 
                    I actively sought opportunities to broaden my horizons and gain practical experience. 
                    This led me to internships in both mechanical engineering and safety engineering, where 
                    I honed my technical skills and learned the importance of precision and safety in any project.
                    </p>
                    <p className="font-medium">
                    In addition to my technical skills, I bring a collaborative and innovative approach to problem-solving. 
                    As I advance in my career, I am excited about embracing new paths for growth.
                    </p>
                     </div>

                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-primary2 p-8 
                    dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                        
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                        <Image src={profilePic1} alt="Stefanie Leutenegger" className='w-full h-auto rounded-2xl'
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw' 
                        />
                    </div>  

                    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={9000} />+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                            xl:text-center md:text-lg sm:text-base xs:text-sm">Hours of Education</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm">Years of Experience</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={2} />+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm">Internships completed</h2>
                        </div>
                    </div>


                </div>

                <Skills />
               
                <Chat />

                <ChatGPT />

                <Certificates />

                </Layout>
            </main>
        </>
        
        
    )
}

export default about
