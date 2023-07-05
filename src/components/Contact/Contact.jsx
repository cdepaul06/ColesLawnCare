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
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you. I will respond as soon as I can.");
        },
        (error) => {
          console.error(error);
          alert("Oops, the email did not send properly, please try again.");
        }
      );
  };

  console.log("name", name);
  console.log("email", email);
  console.log("message", message);

  return (
    <div className='bg-[#03540d] ml-[530px] mt-[200px] rounded-lg text-white flex items-center justify-center w-[45%]'>
      <div className='text-center rounded-lg w-[50%] mt-[10px]'>
        <p className='text-2xl font-bold text-white'>Contact</p>
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
                    placeholder='Would you like us to do some work for you?'
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
