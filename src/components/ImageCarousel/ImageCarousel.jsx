import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { lawnImages } from "../../constants";

const ImageCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <section className='mx-auto w-3/4 border-2 border-black shadow-lg mt-8 relative z-0'>
      <Carousel
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        infiniteLoop
        emulateTouch
        autoPlay
        stopOnHover
        interval={3000}
        transitionTime={1000}
        centerMode={!isMobile}
        centerSlidePercentage={isMobile ? 100 : 33.33}
      >
        {lawnImages.map((image, index) => (
          <div
            key={index}
            className='overflow-hidden border border-black h-[50vh]'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='h-full w-full object-cover object-center'
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
