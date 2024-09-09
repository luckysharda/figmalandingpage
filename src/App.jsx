import React from "react";
import Home from "./components/Home";
import Service from "./components/Service";
import CaseStudies from "./components/CaseStudies";
import Testimonial from "./components/Testmonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <Service />
      <CaseStudies />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
