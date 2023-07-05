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
        marginTop: "200px",
      }}
    >
      <h1 className='text-2xl font-bold text-[#029c15]'>About</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          id={aboutImage.id}
          src={aboutImage.src}
          alt='Lawn'
          style={{
            width: "35%",
            height: "25%",
            objectFit: "contain",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
            marginTop: "25px",
          }}
        />
        <div className='border border-green-500 rounded-lg mt-[20px] p-10 w-1/2 break-words'>
          <p className='mt-5'>{aboutContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
