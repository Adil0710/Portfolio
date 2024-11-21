"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { linksSocial } from "@/lib/data";

import { ComponentType, SVGProps } from "react";

interface SocialLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  outline?: boolean;
}

function SocialLink({
  icon: Icon,
  outline = false,
  ...props
}: SocialLinkProps) {
  return (
    <Link className="p-1 -m-1 group" {...props} href="">
      {outline ? (
        <Icon className="w-6 h-6 stroke-[1px] transition text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
      ) : (
        <Icon className="w-6 h-6 transition fill-neutral-900 group-hover:fill-neutral-900 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      )}
    </Link>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-start gap-6 mt-6">
      {linksSocial.map((link, index) => (
        <div className="relative group" key={index}>
          {/* Hover arrow animation */}
          <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
            <div className="relative flex items-center group">
              <svg
                className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L20.25 9.75M20.25 9.75L8.25 21.75M20.25 9.75H8.25L3.75 15.75"
                />
              </svg>
            </div>
          </div>
          {/* Social Icon */}
          <SocialLink
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={link.label}
            className="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
            icon={link.icon}
            outline={link.outline}
          />
        </div>
      ))}
    </div>
  );
}
