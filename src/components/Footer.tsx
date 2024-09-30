'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logosvg.svg'
import LogoDark from '../../public/logodarksvg.svg'
import { useTheme } from '@/context/themeContext';

function Footer() {
    const currentYear = new Date().getFullYear()
    const { theme, toggleTheme } = useTheme();
    
  return (
    <div className='w-full px-6 lg:px-0 md:px-6 text-black/75 dark:text-white/65 py-10 text-sm pb-3 bg-white dark:bg-black flex justify-center items-center '>

        <div className=' max-w-[53rem] border-t dark:border-t-white/20 border-t-black/20 w-full py-10 flex flex-col sm:flex-row justify-center'>

            <div className=' w-full'>
                <Image src={theme === "light" ? LogoDark : Logo} alt='Logo' className=' mb-4'/>
                <span>&copy; {currentYear} Adil Patel. All rights reserved.</span>
            </div>

            <div className='flex flex-col sm:grid grid-cols-3 sm:gap-6 gap-10 w-full sm:mt-0 mt-10'>

                <div className='flex flex-col col-span-2 gap-3'>
                    <a href="" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Github</a>
                    <a href="" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>LinkedIn</a>
                    <a href="" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Instagram</a>
                    <a href="" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Twitter</a>
                    <a href="" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Threads</a>
                </div>

                <div className='flex flex-col gap-3'>
                    <a href="#home" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Home</a>
                    <a href="#about" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>About</a>
                    <a href="#skills" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Skills</a>
                    <a href="#projects" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Projects</a>
                    <a href="#experience" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Experience</a>
                    <a href="#contact" className=' font-medium hover:text-black duration-200 dark:hover:text-white'>Contact</a>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer