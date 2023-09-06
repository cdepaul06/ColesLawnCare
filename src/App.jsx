import React from "react";
import Navigation from "./components/Navigation/";
import ServicesCard from "./components/ServicesCard/";
import ImageCarousel from "./components/ImageCarousel/";
import About from "./components/About";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = ({}) => {
  return (
    <div>
      <div id='navigation' className='relative z-20'>
        <Navigation />
      </div>
      <div id='carousel' className='pt-[13rem]'>
        <ImageCarousel />
      </div>
      <div id='services' className='pt-[15rem]'>
        <ServicesCard />
      </div>
      <div id='about' className='pt-[15rem]'>
        <About />
      </div>
      <div id='quote' className='pt-[15rem] flex justify-center'>
        <Quote />
      </div>
      {/* <div id='contact' className='pt-[15rem] flex justify-center'>
        <Contact />
      </div> */}
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
