import React from "react";
import { servicesContent } from "../../constants";

const ServicesCard = () => {
  return (
    <div className='flex justify-center'>
      {servicesContent.map((service) => (
        <div
          key={service.id}
          className='border border-green-500 rounded-lg overflow-hidden mt-[25px] w-[482px]'
        >
          <h3 className='text-2xl font-bold text-center p-4'>
            {service.title}
          </h3>
          <hr className='border-gray-300' />
          <img
            src={service.image}
            alt={service.title}
            className='h-1/2 w-1/2 object-cover object-center mt-4 mx-auto'
          />
          <div className='p-4'>
            <p className='text-center'>{service.description}</p>
            <p className='font-bold mt-4'>Details:</p>
            <ul className='list-disc list-inside'>
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
