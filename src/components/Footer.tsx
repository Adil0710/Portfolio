'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '../../public/logosvg.svg';
import LogoDark from '../../public/logodarksvg.svg';
import { useTheme } from '@/context/themeContext';
import { SocialText } from './SocialText';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <div className="w-full absolute px-6 lg:px-0 md:px-6 text-black/65 dark:text-white/65 py-10 text-sm pb-3 bg-white dark:bg-black flex justify-center">
      <div className="max-w-[53rem] border-t dark:border-t-white/20 border-t-black/20 w-full pt-8 pb-8 flex flex-col sm:flex-row items-center justify-between rounded-none gap-8">
        {/* Logo and Copyright */}
        <div className="w-full flex flex-col sm:items-start">
          <Image
            src={theme === 'light' ? LogoDark : Logo}
            alt="Logo"
            className="mb-4"
          />
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
