import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { lawnImages } from "../../constants";

const ImageCarousel = ({}) => {
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
        centerMode
        centerSlidePercentage={33.33}
      >
        {lawnImages.map((image, index) => (
          <div
            key={index}
            className='h-[60vh] overflow-hidden border border-black'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='h-full w-auto object-cover'
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
