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
                <span className='semi-bold text-md text-primary dark:text-primaryDark'>&#706;/&#707;</span>
            </Layout>
        </footer>
    )
}

export default Footer

