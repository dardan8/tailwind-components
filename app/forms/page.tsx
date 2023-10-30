import React from "react";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div className='flex items-start justify-center p-20 bg-slate-100 min-h-screen w-full'>
      <div className='flex flex-col w-5/12 '>
        <h1 className='text-xl font-semibold  text-zinc-700 mb-12'>
          Fill out the form below and we will get in touch with you as soon as
          possible!
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
