import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ImageCarousel from "./components/ImageCarousel";
import ServicesCard from "./components/ServicesCard/ServicesCard";

function App() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div className='sticky top-0 z-50'>
        <Navigation scrollToServices={scrollToServices} />
      </div>
      <ImageCarousel />
      <br />
      <div className='w-full mx-auto text-center mt-[25px]' id='services'>
        <p className='text-2xl font-bold text-[#029c15]'>Services</p>
        <ServicesCard />
      </div>
    </BrowserRouter>
  );
}

export default App;
