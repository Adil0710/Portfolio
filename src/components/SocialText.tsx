'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { linksSocial } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ComponentType, ReactNode, SVGProps } from 'react';

interface LinkTextProps {
    className?: string;
    href: string;
    children: ReactNode;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    outline?: boolean;
  }
  
export function LinkText({ className, href, children, icon: Icon, outline }:LinkTextProps) {
  return (
    <li className={cn(className, 'flex')}>
      <Link href={href} rel="noopener noreferrer" target="_blank">
        <div className="relative group">
          <div className="absolute z-10 flex items-center justify-center text-black dark:text-white w-full h-full transition-all translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-bold cursor-pointer body-primary">
              {children}
            </p>
            <div className="relative flex items-center group">
              <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
          </div>
          <div className="flex items-center text-sm font-medium transition-all group body-secondary group-hover:opacity-20 group-hover:blur-lg sm:h-7 blur-0 grayscale-0">
            {outline ? (
              <Icon className="w-5 h-5 stroke-[1.5px] transition group-hover:body-secondary dark:group-hover:text-outline-300" />
            ) : (
              <Icon className="flex-none w-6 h-6 transition " />
            )}
            <span className="ml-2 group-hover:text-neutral-700 dark:group-hover:text-zinc-300">
              {children}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export function SocialText() {
  return (
    <div className="">
      <ul role="list" className="grid grid-cols-2">
        {linksSocial.map((link, index) => (
          <LinkText
            href={link.href}
            icon={link.icon}
            className="mt-4"
            key={index}
            outline={link.outline}
          >
            {link.label}
          </LinkText>
        ))}
      </ul>
    </div>
  );
}
