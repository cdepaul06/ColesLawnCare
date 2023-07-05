import React from "react";

const Contact = () => {
  return (
    <div className='bg-[#03540d] text-white w-[50%] rounded-lg'>
      <div className='mx-auto text-center mt-[200px]'>
        <p className='text-2xl font-bold text-[#029c15]'>Contact</p>
        <div className='flex flex-col sm:flex-row justify-center mx-2 sm:mx-0'>
          <div className='flex flex-col border border-green-500 rounded-lg overflow-hidden mt-[25px] w-full sm:w-[482px] px-4 sm:mx-2 mb-4 shadow-lg'>
            <div className='p-4 text-left flex-grow flex flex-col'>
              <div className='mb-4 space-y-4'>
                <p>
                  <label className='block mb-1'>Name:</label>
                  <input
                    className='rounded px-2 py-1 w-full'
                    type='text'
                    name='name'
                    placeholder='Name'
                  />
                </p>
                <p>
                  <label className='block mb-1'>Email:</label>
                  <input
                    className='rounded px-2 py-1 w-full'
                    type='text'
                    name='email'
                    placeholder='Email'
                  />
                </p>
                <p>
                  <label className='block mb-1'>Message:</label>
                  <input
                    className='rounded px-2 py-1 w-full'
                    type='text'
                    name='message'
                    placeholder='Message'
                  />
                </p>
              </div>
              <a
                href='#contact'
                className='self-start mt-auto bg-[#029c15] text-white px-6 py-2 rounded-md hover:bg-[#03540d] transition-colors duration-300'
              >
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
