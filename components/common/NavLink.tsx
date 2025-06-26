import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm text-gray-600 hover:text-rose-400 lg:text-xl",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
