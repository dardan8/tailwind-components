"use client";
import Image from "next/image";
import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderProps = {
  slides: {
    image: {
      src: string;
    };
    altText: string;
  }[];
};

type SlideProps = {
  image: {
    src: string;
  };
  altText: string;
};

const Slider = ({ slides }: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const previous = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <div className='flex relative overflow-hidden w-[500px] h-[600px] p-0 rounded-md '>
      <div
        className='flex transition-all'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide: SlideProps) => {
          return (
            <Image
              src={slide.image.src}
              width={400}
              height={400}
              alt={slide.altText}
              className='min-w-full min-h-full object-fill'
              key={slide.altText}
            />
          );
        })}
      </div>

      <div className='absolute flex items-center justify-between inset-0 p-1'>
        <button
          onClick={previous}
          className='rounded-full bg-zinc-100 opacity-70 backdrop-blur-md p-1 flex items-center justify-center shadow-xl hover:opacity-100'
        >
          <ChevronLeft size={15} />
        </button>

        <button
          onClick={next}
          className='rounded-full bg-zinc-100 opacity-70 backdrop-blur-md p-1 flex items-center justify-center shadow-xl hover:opacity-100'
        >
          <ChevronRight size={15} />
        </button>
      </div>
      <div className='absolute flex items-center justify-center gap-1 bottom-2 left-1/2'>
        {slides.map((slide, index) => (
          <div
            key={slide.altText}
            className={`w-2 h-2 rounded-full bg-zinc-100 transition-all ${
              current === index ? "w-2.5 h-2.5 bg-zinc-300" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
