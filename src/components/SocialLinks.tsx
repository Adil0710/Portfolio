"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { linksSocial } from "@/lib/data";

import { ComponentType, SVGProps } from "react";

interface SocialLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  outline?: boolean;
  href: string;
}

function SocialLink({
  icon: Icon,
  outline = false,
  href,
  ...props
}: SocialLinkProps) {
  return (
    <Link className="p-1 -m-1 group flex" {...props} href={href}>
      {outline ? (
        <Icon className="md:w-5 md:h-5 w-4 h-4 stroke-[1px] transition text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
      ) : (
        <Icon className="md:w-6 md:h-6 w-5 h-5 transition-all text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
      )}
    </Link>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-start md:gap-8 gap-4">
      {linksSocial.slice(0,3).map((link, index) => (
        <div className="relative group" key={index}>
          {/* Hover arrow animation */}
          <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
            <div className="relative flex items-center group">
              <ArrowUpRight className="absolute w-5 h-5 transition-all dark:text-white opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
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
