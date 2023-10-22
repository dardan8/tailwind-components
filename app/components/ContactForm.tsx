"use client";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Data:" + name, email, message);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Name:'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='E-mail:'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder='Message:'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
