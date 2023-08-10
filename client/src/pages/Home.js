import React from "react";
import Hero from "../components/Hero";
import ShelterList from "../components/ShelterList";
import Donation from "../components/Donation";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <ShelterList />
      <Donation shelterId="64d2dcd0f737eeb85b86fd71" />
    </div>
  );
};

export default Home;
