import React from "react";
import { Sparkles } from "lucide-react";

const UploadHeaders = () => {
  return (
    <section>
      <div className="w-[90%] items-center justify-center text-center mx-auto flex flex-col pt-32 ">
        <div className="inline-flex gap-2 items-center rounded-full text-pink-500 px-6 py-2 border border-pink-500 mx-auto justify-center mb-3">
          <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
          <p className="font-bold text-sm">AI Powered Content Creation</p>
        </div>

        <h1 className="lg:text-5xl">Start Uploading Your PDF`S</h1>
        <p className="text-gray-500 text-lg mt-1 mb-5">
          Upload your PDF files and let our AI summarize them into concise
          summaries.
        </p>
      </div>
    </section>
  );
};

export default UploadHeaders;
