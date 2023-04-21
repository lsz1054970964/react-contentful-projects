import React from "react";
import image from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My React Projects</h1>
          <p>
            These are some of my developed react projects. Please have a look
            and check the source code in the
            <a href="https://github.com/lsz1054970964"> GitHub</a>.
          </p>
        </div>
        <div className="image-container">
          <img src={image} alt="image" className="img"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
