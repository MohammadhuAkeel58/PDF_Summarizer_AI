import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="w-[90%] items-center justify-center text-center mx-auto flex flex-col pt-32 ">
        <div className="inline-flex gap-2 items-center rounded-full text-pink-500 px-6 py-2 border border-pink-500 mx-auto justify-center mb-3">
          <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
          <p className="font-bold text-sm">Powered by AI</p>
        </div>

        <h1 className="lg:text-5xl">
          Transform the PDFs into concise summaries
        </h1>
        <p className="text-gray-500 text-lg mt-1 mb-5">
          Upload your PDF files and let our AI summarize them into concise
          summaries.
        </p>
        <Button className="bg-linear-to-r from-slate-900 to-rose-300 hover:bg-linear-to-l from-rose-300 to-slate-900  text-amber-50 rounded-full px-6 py-3 ">
          <Link href="/#pricing" className="flex items-center gap-2">
            <span>Try Sommarie</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
