import React from "react";
import Donation from "../components/Donation";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Donation shelterId="64d2dcd0f737eeb85b86fd71" />
    </div>
  );
};

export default Home;
