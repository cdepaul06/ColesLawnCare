import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { name, email, message },
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className='bg-[#03540d] ml-[530px] mt-[200px] rounded-lg text-white flex items-center justify-center w-[45%]'>
      <div className='text-center rounded-lg w-[50%]'>
        <p className='text-2xl font-bold text-[#029c15]'>Contact</p>
        <form
          className='flex flex-col sm:flex-row justify-center mx-2 sm:mx-0'
          onSubmit={sendEmail}
        >
          <div className='flex flex-col border border-green-500 rounded-lg overflow-hidden mt-[25px] w-full sm:w-[482px] px-4 sm:mx-2 mb-4 shadow-lg'>
            <div className='p-4 text-left flex-grow flex flex-col'>
              <div className='mb-4 space-y-4'>
                <p>
                  <label className='block mb-1'>Name:</label>
                  <input
                    className='rounded px-2 py-1 w-full text-black'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                  />
                </p>
                <p>
                  <label className='block mb-1'>Email:</label>
                  <input
                    className='rounded px-2 py-1 w-full text-black'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                  />
                </p>
                <p>
                  <label className='block mb-1'>Message:</label>
                  <textarea
                    className='rounded px-2 py-1 w-full text-black'
                    type='text'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Message'
                  />
                </p>
              </div>
              <button
                type='submit'
                className='self-start mt-auto bg-[#029c15] text-white px-6 py-2 rounded-md hover:bg-[#03540d] transition-colors duration-300'
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
