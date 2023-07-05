import React from "react";
import { servicesContent } from "../../constants";

const ServicesCard = ({ scrollToElement }) => {
  return (
    <div>
      <div className='w-full mx-auto text-center mt-[200px]'>
        <p className='text-2xl font-bold text-[#029c15]'>Services</p>
        <div className='flex flex-col sm:flex-row justify-center mx-2 sm:mx-0'>
          {servicesContent.map((service) => (
            <div
              key={service.id}
              className='flex flex-col border border-green-500 rounded-lg overflow-hidden mt-[25px] w-full sm:w-[482px] px-4 sm:mx-2 mb-4 shadow-lg'
            >
              <h3 className='text-2xl font-bold text-center p-4'>
                {service.title}
              </h3>
              <hr className='border-gray-300 border-3' />
              <img
                src={service.image}
                alt={service.title}
                className='h-[200px] w-full object-cover mt-4 mx-auto shadow-xl border border-gray-300'
              />
              <div className='p-4 text-left flex-grow flex flex-col'>
                <div className='mb-4'>
                  <p>{service.description}</p>
                  <div className='details font-bold mt-4'>Details:</div>
                  <ul className='list-disc list-inside pl-4'>
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => scrollToElement("contact")}
                  className='self-start mt-auto bg-[#029c15] text-white px-6 py-2 rounded-md hover:bg-[#03540d] transition-colors duration-300'
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
