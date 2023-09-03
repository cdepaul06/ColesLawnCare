import React from "react";
import { aboutContent, aboutImage } from "../../constants";

const About = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className='text-2xl font-bold text-[#029c15]'>About</h1>
      <div className='flex flex-col items-center'>
        <img
          id={aboutImage.id}
          src={aboutImage.src}
          className='rounded-lg lg:w-[50%] sm:w-[99%] sm:h-[450px] object-cover shadow-xl border border-gray-300'
          alt='Lawn'
          style={{
            marginTop: "25px",
          }}
        />
        <div className='border border-green-500 rounded-lg mt-[20px] p-10 break-words lg:w-[50%] sm:w-[99%]'>
          <p className='mt-5'>{aboutContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
