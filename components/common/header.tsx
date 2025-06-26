import NavLink from "@/components/common/NavLink";
import React from "react";
import { FileText } from "lucide-react";

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
          {isLoggedIn && <NavLink href="/#dashboard">Your Summaries</NavLink>}
        </div>

        <div>
          {isLoggedIn ? (
            <div className="flex items-center">
              <NavLink href="/#upload">Upload</NavLink>
            </div>
          ) : (
            <div className="flex items-center">
              <NavLink href="/#sign-in">SignIn</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
