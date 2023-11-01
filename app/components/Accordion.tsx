"use client";

import { ChevronUp } from "lucide-react";
import { useState, useRef } from "react";

type AccordionProps = {
  question: string;
  answer: string;
};
const Accordion = ({ question, answer }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col 
      bg-zinc-100 hover:bg-zinc-200 p-4 rounded-lg w-full border border-zinc-200 text-zinc-700 mb-2 cursor-pointer ${
        open ? "bg-zinc-200 cursor-pointer border-zinc-200" : ""
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className='flex items-center justify-between '>
        <h4 className='text-lg font-medium'>{question} </h4>
        <ChevronUp
          className={`transition-all duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>
      <div
        className={`transition-all 
        ${open ? "h-auto mt-4" : "h-0 overflow-hidden"}
  `}
      >
        <p>{answer} </p>
      </div>
    </div>
  );
};

export default Accordion;
