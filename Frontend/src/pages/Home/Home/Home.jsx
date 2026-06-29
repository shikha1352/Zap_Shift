import React from "react";
import Banner from "../Banner/Banner";
import { WorkingCards } from "./WorkingCards";
import Workings from "./Workings";
const Home = () => {
  return (
    <div className="m-5">
      <Banner />
      <div className="p-12">
        <h1 className="text-secondary font-bold text-4xl mb-5">How it works</h1>
        <div className="grid grid-cols-4 gap-5">
          {WorkingCards.map((card) => (
            <Workings key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
