import { Pizza } from "lucide-react";
import React from "react";

const Demo = () => {
  return (
    <div className="pt-12 mx-auto flex flex-col items-center justify-center text-center">
      <Pizza className="w-8 h-8 text-pink-300 mb-5" />
      <h1 className="text-xl font-semibold">
        Watch how <span className="text-pink-400">Sommaire</span> changes your
        PDFs
        <br />
        <span className="text-pink-400">into beautiful summaries</span>
      </h1>
    </div>
  );
};

export default Demo;
