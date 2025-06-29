import React from "react";
import type { LucideIcon } from "lucide-react";

type HowCardProps = {
  image: LucideIcon;
  title: string;
  description: string;
};

const HowitWorksCard = ({ image: Icon, title, description }: HowCardProps) => {
  return (
    <div className="relative p-6 h-full flex flex-col justify-between  rounded-2xl border border-white/10  hover:shadow-purple-600/30 transition-all duration-300 group hover:-translate-y-2 ">
      <div className="flex mx-auto items-center justify-center mb-4  bg-pink-50 w-16 h-16 ">
        <Icon className="w-12 h-12 text-pink-400" />
      </div>
      <h2 className="text-xl font-semibold text-black group-hover:text-purple-300 transition">
        {title}
      </h2>
      <p className="text-sm text-black font-semibold mt-2">{description}</p>
    </div>
  );
};

export default HowitWorksCard;
