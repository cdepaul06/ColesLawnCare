import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { lawnImages } from "../../constants";

const ImageCarousel = () => {
  return (
    <div className='mx-auto w-3/4 border-2 border-black shadow-lg mt-8'>
      <Carousel
        showThumbs={false}
        showIndicators={false}
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
          <div key={index} className='h-[60vh] overflow-hidden'>
            <img
              src={image.src}
              alt={image.alt}
              className='h-full w-auto object-cover'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
