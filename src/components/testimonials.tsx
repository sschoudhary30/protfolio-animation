"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { SubHeading } from "./subheading";

export const Testimonials = () => {
  const data = [
    {
      quote: "Suresh is so great with his UI/UX skills. Highly recommended.",
      name: "Shivam",
      avatar:
        "https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg",
    },
    {
      quote:
        "His design sense is very modern and clean. Loved collaborating on our SaaS project.",
      name: "Rahul",
      avatar:
        "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
    },
    {
      quote:
        "The mockups Suresh delivered helped us speed up our development cycle significantly.",
      name: "Aditya",
      avatar:
        "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
    },
    {
      quote:
        "Very professional and super responsive. His attention to detail is top-notch.",
      name: "siddhi",
      avatar:
        "https://i.pinimg.com/736x/9f/db/f4/9fdbf4c61a5e5e91878cb7e59655e4a2.jpg",
    },
    {
      quote:
        "A talented designer with strong frontend skills — a rare and valuable combo!",
      name: "riya",
      avatar:
        "https://i.pinimg.com/736x/9f/db/f4/9fdbf4c61a5e5e91878cb7e59655e4a2.jpg",
    },
  ];

  return (
    <div className="my-15">
      <SubHeading className="text-primary py-5 text-xl font-bold md:text-2xl">
        What people are saying about me ✨
      </SubHeading>
      <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover>
          <div className="flex py-4">
            {data.map((item, idx) => (
              <TestimonialCard key={`testimonial - ${idx}`} {...item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-aceternity mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:translate-y-1 hover:scale-105 hover:shadow-md">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="item-center flex gap-4">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="size-6 rounded-full"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
