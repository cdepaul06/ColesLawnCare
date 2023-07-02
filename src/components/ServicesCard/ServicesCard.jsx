import React from "react";
import { servicesContent } from "../../constants";

const ServicesCard = () => {
  return (
    <div className='w-full mx-auto text-center mt-[25px]' id='services'>
      <p className='text-2xl font-bold text-[#029c15]'>Services</p>
      <div className='flex flex-col sm:flex-row justify-center mx-2 sm:mx-0'>
        {servicesContent.map((service) => (
          <div
            key={service.id}
            className='border border-green-500 rounded-lg overflow-hidden mt-[25px] w-full sm:w-[482px] px-4 sm:mx-2 mb-4 shadow-lg'
          >
            <h3 className='text-2xl font-bold text-center p-4'>
              {service.title}
            </h3>
            <hr className='border-gray-300 border-3' />
            <img
              src={service.image}
              alt={service.title}
              className='h-1/2 w-1/2 object-cover object-center mt-4 mx-auto shadow-xl border border-gray-300'
            />
            <div className='p-4'>
              <p className='text-center'>{service.description}</p>
              <div className='details text-left font-bold mt-4'>Details:</div>
              <ul className='list-disc list-inside'>
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
