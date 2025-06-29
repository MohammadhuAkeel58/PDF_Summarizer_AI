import NavLink from "@/components/common/NavLink";
import React from "react";
import { FileText } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const isLoggedIn = false; // Replace with actual authentication logic
  return (
    <nav>
      <div className="mx-auto items-center  flex justify-between  w-[90%] container py-4 text-xs md:text-sm lg:text-2xl font-semibold">
        <div className="flex items-center gap-2">
          <NavLink href="/" className="flex items-center gap-2 ">
            <FileText className="w-3.5 h-3.5 lg:w-5 h-5 " />
            Sommaire
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <NavLink href="/#pricing">Pricing</NavLink>
          <SignedIn>
            <NavLink href="/#dashboard">Your Summaries</NavLink>
          </SignedIn>
        </div>

        <div>
          <SignedIn>
            <div className="flex items-center gap-2">
              <NavLink href="/#upload">Upload</NavLink>
              <div className="text-sm text-amber-700">Pro</div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center">
              <NavLink href="/sign-in">SignIn</NavLink>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Header;
