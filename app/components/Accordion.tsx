"use client";
import AccordionItem from "./AccordionItem";
import { accordionData } from "../data";
import { useState } from "react";

const Accordion = () => {
  const [clicked, setClicked] = useState<number>();

  const handleToggle = (index: number) => {
    setClicked(index);
  };

  return (
    <ul>
      {accordionData.map((acc, index) => (
        <AccordionItem
          item={acc}
          key={index}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </ul>
  );
};

export default Accordion;
