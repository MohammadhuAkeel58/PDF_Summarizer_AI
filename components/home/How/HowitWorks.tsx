import React from "react";
import { how } from "./how";
import HowitWorksCard from "./HowitWorksCard";

const HowitWorks = () => {
  return (
    <div className="pt-12 mx-auto flex flex-col items-center justify-center text-center">
      <h2 className="uppercase font-bold">How It Works</h2>
      <h1 className="text-xl font-semibold">
        Watch how <span className="text-pink-400">Sommaire</span> changes your
        PDFs
        <br />
        <span className="text-pink-400">into beautiful summaries</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-6">
        {how.map((hows, index) => (
          <HowitWorksCard
            key={index}
            image={hows.image}
            title={hows.title}
            description={hows.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
