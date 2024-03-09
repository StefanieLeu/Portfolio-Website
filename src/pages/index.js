import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe' 
import profilPic3 from "../../public/images/svgs/Portfolio.svg"
import TransitionEffect from '@/components/TransitionEffect'
import Chat from '@/components/Chatbot/Chat'
import ChatGPT from '@/components/GPT/ChatGPT'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="Home" content="Stefanie Leutenegger Portfolio Data Scientist Data Science Machine Learning Data Analysis Visualization Statistics Big Data" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-25 md:pt-0 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">

          <div className='w-1/2 md:w-full'>
          <Image src={profilPic3} alt="Stefanie Leutenegger" className='w-3/4 h-auto lg:hidden md:hidden sm:hidden'
              priority  
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
          />
          </div>
            <div className='w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Welcome to my digital portfolio" className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
    
              Here, you will find a collection of my projects that reflect my passion and commitment to lifelong learning. 
              Join me as I start my journey in the field of software engineering. 
              Feel free to dive in and discover the solutions I have crafted. 
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="https://www.linkedin.com/in/leutenegger-s/" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                download={false}
                >LinkedIn &nbsp;<LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:leutenegger.stefanie@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline underline-offset-4 dark:text-light
                md:text-base'
                >Contact</Link>

              

              </div>
            </div>
          </div>  
        </Layout>
        
        <HireMe />
 
        <Chat />

        <ChatGPT />
       
      </main>
  
    </>
  )
}
