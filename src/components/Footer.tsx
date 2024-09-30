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

        <div className=' max-w-[53rem] border-t dark:border-t-white/20 border-t-black/20 w-full pt-10 pb-7 flex flex-col sm:flex-row items-center justify-center'>

            <div className=' w-full'>
                <Image src={theme === "light" ? LogoDark : Logo} alt='Logo' className=' mb-4'/>
                <span className=' font-medium'>&copy; {currentYear} Adil Patel. All rights reserved.</span>
            </div>

            <div className=' grid grid-cols-3  w-full sm:mt-0 mt-10'>

                <div className='flex flex-col col-span-2 gap-3'>
                    <a href="https://github.com/Adil0710" target='_blank' className=' font-semibold hover:text-black duration-200 dark:hover:text-white'>Github</a>
                    <a href="https://www.linkedin.com/in/adil-patel-737692252/" target='_blank' className=' font-semibold hover:text-black duration-200 dark:hover:text-white'>LinkedIn</a>
                    <a href="https://x.com/AdilPat21587273" target='_blank' className=' font-semibold hover:text-black duration-200 dark:hover:text-white'>Twitter</a>
                    
                </div>

                <div className='flex flex-col gap-3'>
                    <a href="https://www.instagram.com/code_with_adil/" target='_blank' className=' font-semibold hover:text-black duration-200 dark:hover:text-white'>Instagram</a>
                    <a href="https://www.threads.net/@the_lonewolf_02_" target='_blank' className=' font-semibold hover:text-black duration-200 dark:hover:text-white'>Threads</a>
                    <a href="https://steamcommunity.com/id/ambadas/" target='_blank' className=' font-semibold hover:text-black duration-200 dark:hover:text-white'>Steam</a>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer