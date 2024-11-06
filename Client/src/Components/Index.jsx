import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import { Slide, Zoom } from "react-awesome-reveal";
import Services from "./Services";
import Contactus from "./Contactus";
import RevolvingHeader from "./RevolvingHeader";
import BlogHome from "./Blogs/BlogHome";
const Index = () => {
  return (
    <>
      {screen.width > 1000 && <RevolvingHeader />}

      <Header />
      <Hero />

      {screen.width < 1000 ? (
        <>
          <About />
          <Services />
          <Contactus />
          <Footer />
        </>
      ) : (
        <>
          <About />

          <Services />

          <BlogHome />
          <TechStack />

          <Contactus />

          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
