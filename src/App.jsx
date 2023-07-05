import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ImageCarousel from "./components/ImageCarousel";
import ServicesCard from "./components/ServicesCard/ServicesCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const carouselRef = useRef();
  const servicesCardRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const scrollToElement = (sectionId) => {
    switch (sectionId) {
      case "carousel":
        carouselRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesCardRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        window.scrollTo(0, 0);
    }
  };

  return (
    <BrowserRouter>
      <div className='sticky top-0 z-50'>
        <Navigation scrollToElementId={scrollToElement} />
      </div>
      <div ref={carouselRef}>
        <ImageCarousel />
      </div>
      <div ref={servicesCardRef}>
        <ServicesCard scrollToElement={scrollToElement} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
