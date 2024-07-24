import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { smallSphere, stars } from "../assets";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import ButtonSvg from "../assets/svg/ButtonSvg";



const Contact = () => {
    const formRef = useRef(null);
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
              to_name: "Eythor Private Limited",
              from_email: form.email,
              to_email: "business.eythor@gmail.com",
              message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. We will get back to you as soon as possible.");
    
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );

    }

    return (
        <Section id="contact" >
            <div className="container relative">
            <Heading
          tag="Get in touch"
          title="Contact us"
          className="md:max-w-md lg:max-w-2xl text-n-8"/>

          <div className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 flex items-center gap-20 justify-center">
            <div>
            <img
                src={smallSphere}
                className="relative z-1"
                width={355}
                height={355}
                alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
          </div>
          
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 w-[40rem] max-lg:w-[40rem] sm:w-[30rem]'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-n-5 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-n-5 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-n-5 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
          >
            
            {loading ? "ending..." : "Send"}
          </button> */}
          <Button type='submit' className="ml-auto">
          {loading ? "Sending..." : "Send"}

          </Button>
        </form>
            </div>

            
            </div>
        


            
        </Section>
    )
}

export default Contact;