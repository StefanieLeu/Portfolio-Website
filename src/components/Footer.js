import Link from 'next/link'
import React from 'react'
import Layout from './Layout'


const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-sm
        dark:text-light dark:border-light sm:text-base 
        '>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span className=''>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                Built with the help of
                &nbsp;<Link href="https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code" target={"_blank"} className='underline underline-offset-4'>CodeBucks</Link>
                &nbsp;|&nbsp;<Link href="https://undraw.co" target={"_blank"} className='underline underline-offset-4'>unDraw</Link>
                </div>
                <span className='semi-bold text-md text-primary dark:text-primaryDark'>&#706;/&#707;</span>
            </Layout>
        </footer>
    )
}

export default Footer

