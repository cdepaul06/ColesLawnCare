import React, { useState } from "react";
import { Chip, Button, Select } from "@mui/material";
import { servicesContent } from "../../constants";
import emailjs from "emailjs-com";

const Quote = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_APP_NAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAIL,
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

  console.log(selectedServices);

  return (
    <div className='bg-[#03540d] rounded-lg text-white flex items-center justify-center lg:w-[45%] sm:w-full'>
      <div>
        <p className='text-2xl font-bold text-white'>Request Quote</p>
        <form onSubmit={handleSubmit}>
          <div className='mt-5'>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='border border-black ml-1 flex flex-row justify-center text-black'
            />
          </div>
          <div className='mt-2'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='border border-black ml-1 flex flex-row justify-center text-black'
            />
          </div>
          <div className='mt-2'>
            <label>Message:</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              className='border border-black ml-1 flex flex-row justify-center text-black'
            />
          </div>
          <div className='mt-2'>
            <label>Services:</label>
            <div className='ml-2 w-20'>
              <Select
                multiple
                value={selectedServices}
                onChange={(e) => {
                  setSelectedServices(e.target.value);
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return "Select a Service";
                  }
                  return (
                    <div className='bg-white rounded-lg'>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </div>
                  );
                }}
              >
                {servicesContent.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
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
          <div className='mt-5 mb-2 flex flex-row justify-center'>
            <Button style={{ backgroundColor: "#029c15", color: "white" }}>
              {loading ? "Requesting..." : "Request Quote"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
