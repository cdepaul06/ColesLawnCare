import React, { useState } from "react";
import { Chip, Button, Select, MenuItem } from "@mui/material";
import { servicesContent } from "../../constants";
import emailjs from "emailjs-com";

const Quote = ({}) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRemoveChip = (service) => {
    setSelectedServices(selectedServices.filter((s) => s !== service));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(form);

    emailjs.send;
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: import.meta.env.VITE_APP_NAME,
        from_email: form.email,
        to_email: import.meta.env.VITE_APP_EMAIL,
        message: form.address
          .concat(
            "The selected services for the customer are: ",
            selectedServices
          )
          .join(", "),
      },
      import.meta.env.VITE_APP_PUBLIC_KEY().then(
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
    <div className='bg-[#03540d] rounded-lg text-white flex justify-center lg:w-[45%] w-[97%] p-5'>
      <div>
        <div className='flex flex-row justify-center mb-5'>
          <p className='text-2xl font-bold text-white text-center'>
            Request Quote
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='border-2 border-white rounded-lg p-5'
        >
          <div>
            <label className='block mb-1'>Name:</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='rounded ml-1 flex flex-row justify-center text-black px-2 py-1'
            />
          </div>
          <div className='mt-2'>
            <label className='block mb-1'>Email:</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='rounded ml-1 flex flex-row justify-center text-black px-2 py-1'
            />
          </div>
          <div className='mt-2'>
            <label className='block mb-1'>Property Address:</label>
            <input
              name='address'
              value={form.message}
              onChange={handleChange}
              className='rounded ml-1 flex flex-row justify-center text-black px-2 py-1'
            />
          </div>
          <div className='mt-2'>
            <label className='block mb-1'>Services:</label>
            <div className='ml-1 w-20'>
              <Select
                multiple
                value={selectedServices}
                onChange={(e) => setSelectedServices(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
                sx={{
                  width: "19.5rem",
                  height: "2.2rem",
                  backgroundColor: "white",
                }}
              >
                {servicesContent.map((service, index) => (
                  <MenuItem key={index} value={service.title}>
                    {service.title}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className='mt-2'>
            <p>Selected Services:</p>
          </div>
          <div>
            {selectedServices.map((service, index) => (
              <Chip
                key={index}
                label={service}
                onDelete={() => handleRemoveChip(service)}
                style={{
                  margin: "3px",
                  backgroundColor: "#029c15",
                  color: "white",
                }}
              />
            ))}
          </div>
          <div className='mt-10 mb-2 ml-2'>
            <button
              type='submit'
              className='self-start mt-auto bg-[#029c15] text-white px-6 py-2 rounded-md hover:bg-[#ffff] hover:text-[#029c15] transition-colors duration-500'
            >
              {loading ? "Requesting..." : "Request Quote"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
