'use client';
import React from 'react';
import { useTheme } from '@/context/themeContext';
import { SocialText } from './SocialText';
import Logo from './Logo';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <div className="w-full absolute px-6 lg:px-0 md:px-6 text-foreground/60 pt-10 mt-0 text-sm pb-3 bg-[#f4f4f0] dark:bg-[#1d1d16] flex justify-center">
      <div className="max-w-[43.5rem] border-t border-foreground/10 w-full pt-8 pb-11 flex flex-col sm:flex-row items-center justify-between rounded-none gap-8">
        {/* Logo and Copyright */}
        <div className="w-full flex flex-col sm:items-start">
         <Logo className='mb-4'/>
          <span className="font-medium sm:text-left">
            &copy; {currentYear} Adil Patel. All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="w-full">
          <SocialText />
        </div>
      </div>
    </div>
  );
}

export default Footer;
