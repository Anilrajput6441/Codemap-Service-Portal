import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import { Slide, Zoom } from "react-awesome-reveal";
import Services from "./Services";
import RevolvingHeader from "./RevolvingHeader";
const Index = () => {
  // console.log(screen.height);
  return (
    <>
     {screen.width>1000 &&       <RevolvingHeader /> }

      <Header />
      <Hero />

      {screen.width < 1000 ? (
        <>
          <About />
          <Services />
        </>
      ) : (
        <>
         
            <About />
       
          <Slide direction="right">
            <Services />
          </Slide>
        </>
      )}
    </>
  );
};

export default Index;
