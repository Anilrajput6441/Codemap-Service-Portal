import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import { Slide, Zoom } from "react-awesome-reveal";
import Services from "./Services";
const Index = () => {
  // console.log(screen.height);
  return (
    <>
      <Header />
      <Hero />
      <Slide left>
        <About />
      </Slide>
      <Slide direction="right">
        <Services />
      </Slide>
    </>
  );
};

export default Index;
