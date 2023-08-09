import React from "react";
import Hero from "../components/Hero";
import ShelterList from "../components/ShelterList";
import Donation from "../components/Donation";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <ShelterList />
      <Donation />
    </div>
  );
};

export default Home;
