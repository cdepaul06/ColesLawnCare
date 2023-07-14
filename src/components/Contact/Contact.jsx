import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Cole Underwood",
          from_email: form.email,
          to_email: "cmu.lawncare@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will respond as soon as I can.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops, the email did not send properly, please try again.");
        }
      );
  };

  return (
    <div className='bg-[#03540d] ml-[530px] mt-[200px] rounded-lg text-white flex items-center justify-center w-[45%]'>
      <div className='text-center rounded-lg w-[50%] mt-[10px]'>
        <p className='text-2xl font-bold text-white'>Contact</p>
        <form
          ref={formRef}
          className='flex flex-col sm:flex-row justify-center mx-2 sm:mx-0'
          onSubmit={handleSubmit}
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
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Name'
                  />
                </p>
                <p>
                  <label className='block mb-1'>Email:</label>
                  <input
                    className='rounded px-2 py-1 w-full text-black'
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='What is your email?'
                  />
                </p>
                <p>
                  <label className='block mb-1'>Message:</label>
                  <textarea
                    className='rounded px-2 py-1 w-full text-black'
                    rows={7}
                    type='text'
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Would you like us to do some work for you?'
                  />
                </p>
              </div>
              <button
                type='submit'
                className='self-start mt-auto bg-[#029c15] text-white px-6 py-2 rounded-md hover:bg-[#03540d] transition-colors duration-300'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
