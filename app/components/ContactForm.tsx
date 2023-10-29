"use client";
import { FormEvent, useState } from "react";
import Confetti from "react-confetti";
import { AlertOctagon } from "lucide-react";
const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Data:" + fname, lname, email, message);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ fname, lname, email, message }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error("Error!", err);
    }
  };

  return !submitted ? (
    <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full '>
      <div className='flex flex-col gap-2'>
        <label htmlFor='fname'>
          <span className='text-sm  text-zinc-600'>First Name *</span>
        </label>
        <input
          type='text'
          placeholder='Enter first name:'
          value={fname}
          id='fname'
          name='fname'
          required
          pattern='[A-Za-z]{2,25}'
          onChange={(e) => setFname(e.target.value)}
          className='peer text-sm rounded-md py-2.5 px-3 text-zinc-600 
          ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-300
          placeholder:text-sm focus:ring-2
          focus:ring-inset focus:ring-emerald-600 focus:outline-none'
        />
        <span className='text-xs text-red-600 hidden peer-[&:not(:placeholder-shown):not(focus):invalid]:inline-flex items-center gap-1'>
          <AlertOctagon size={14} /> Please type your first name (at least 2
          characters)
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='lname'>
          <span className='text-sm text-zinc-600'>Last Name *</span>
        </label>
        <input
          type='text'
          placeholder='Enter last name:'
          value={lname}
          required
          pattern='[A-Za-z]{2,25}'
          onChange={(e) => setLname(e.target.value)}
          id='lname'
          name='lname'
          className='text-sm rounded-md py-2.5 px-3 text-zinc-600 
          ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-300
          placeholder:text-sm focus:ring-2
          focus:ring-inset focus:ring-emerald-600 focus:outline-none peer'
        />
        <span className='text-xs text-red-600 hidden peer-[&:not(:placeholder-shown):not(focus):invalid]:inline-flex items-center gap-1'>
          <AlertOctagon size={14} /> Please type your last name (at least 2
          characters)
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>
          <span className='text-sm text-zinc-600'>Email *</span>
        </label>
        <input
          type='email'
          placeholder='Enter your e-mail:'
          value={email}
          required={true}
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          className='text-sm rounded-md py-2.5 px-3 text-zinc-600 
          ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-300
          placeholder:text-sm focus:ring-2
          focus:ring-inset focus:ring-emerald-600 focus:outline-none peer'
        />
        <span className='text-xs text-red-600 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:inline-flex items-center gap-1'>
          <AlertOctagon size={14} /> Please type a valid e-mail address
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='message'>
          <span className='text-sm text-zinc-600'>Message:</span>
        </label>
        <textarea
          placeholder='Type in your message:'
          value={message}
          name='message'
          rows={5}
          id='message'
          onChange={(e) => setMessage(e.target.value)}
          className='text-sm rounded-md py-2.5 px-3 text-zinc-600 
          ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-300
          placeholder:text-sm focus:ring-2
          focus:ring-inset focus:ring-emerald-600 focus:outline-none'
        />
      </div>

      <button
        type='submit'
        className='w-full h-12 px-6 mt-6 text-zinc-100
        transition-colors duration-150 bg-emerald-500
        rounded-lg focus:shadow-outline hover:bg-emerald-600'
      >
        Submit
      </button>
    </form>
  ) : (
    <div className='text-center'>
      Form is submitted successfully! We will get in touch with you as soon as
      possible.
      <Confetti />
    </div>
  );
};

export default ContactForm;
