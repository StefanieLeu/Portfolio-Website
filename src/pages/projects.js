import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect";
import Chat from '@/components/Chatbot/Chat'
import ChatGPT from '@/components/GPT/ChatGPT'

import Portfolio from "../../public/images/projects/Portfolio.png";
import AngularChatbot from "../../public/images/projects/AngularChatbot.png";
import ReactChatbot from "../../public/images/projects/ReactChatbot.png";


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >

        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
            <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-4">
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
                <Link href={github} target="_blank" 
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                >Visit Project</Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light xs:p-4">
            
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            
            <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-4">
                <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>

            <div className="w-full mt-2 flex items-center justify-between">

                <Link href={github} target="_blank" 
                className="text-lg font-semibold underline underline-offset-4 md:text-base"
                >Visit</Link>
                
                <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /> </Link>
                
            </div>
            </div>
            </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Projects </title>
                <meta name="Projects" content="Stefanie Leutenegger Portfolio Data Scientist Data Science Machine Learning Data Analysis Visualization Statistics Big Data" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-40 lg:pt-40 md:pt-40 sm:pt-40">
                    <AnimatedText text="Projects" 
                    className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                
                
                <ul className='grid grid-cols-1 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
               
                <FeaturedProject
                    title="Portfolio Website"
                    type="February 2024"
                    summary="Portfolio Website created with Nextjs, Tailwind CSS and Framer-motion."
                    img={Portfolio}
                    link=""
                    github={"https://github.com/StefanieLeu?tab=repositories"}
                />  
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Projects</h2>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-2 md:gap-y-16'>
                {/* <Project
                    title="React: Personal Chatbot"
                    type="March 2024"
                    img={ReactChatbot}
                    link=""
                    github={"https://github.com/StefanieLeu?tab=repositories"}
                />  */}

                <Project
                    title="Coming soon ..."
                    type="2024"
                    img={AngularChatbot}
                    link=""
                    github={"https://github.com/StefanieLeu?tab=repositories"}
                />  
                 
                </ul>

                <Chat />

                <ChatGPT />
                    
                </Layout> 

            </main>
        </>
    )
}

export default projects