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
            width: "45%",
            height: "35%",
            objectFit: "contain",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
            marginTop: "25px",
          }}
        />
        <p className='word-wrap' style={{ marginTop: "25px" }}>
          {aboutContent.description}
        </p>
      </div>
    </div>
  );
};

export default About;
