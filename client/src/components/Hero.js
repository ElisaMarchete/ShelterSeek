import Banner from "../assets/hero-img.avif";

function Hero() {
  return (
    <div className="Hero">
      <img className="Hero-image" src={Banner} alt="Cats and Dogs banner" />
    </div>
  );
}

export default Hero;
