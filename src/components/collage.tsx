import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function Collage() {
  const items = [
    {
      title: "Advait",
      image: "/advaitlogo.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Sambhav",
      image: "/sambhav.webp",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Neuro Bit",
      image: "/neurobit.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "DariyX",
      image: "/dariyX.webp",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Impacti",
      image: "/impacti.webp",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Black & White",
      image: "black.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Panacea",
      image: "/panacea.png",
      className: "absolute top-5 left-[30%] rotate-[4deg]",
    },
    {
      title: "Advait1",
      image: "/advaitlogo.png",
      className: "absolute top-0 left-[70%] rotate-[-5deg]",
    },
    {
      title: "Sambhav1",
      image: "/sambhav.webp",
      className: "absolute top-70 left-[15%] rotate-[-7deg]",
    },
    {
      title: "Neuro Bit1",
      image: "/neurobit.png",
      className: "absolute top-5 right-[70%] rotate-[8deg]",
    },
    {
      title: "DariyX1",
      image: "/dariyX.webp",
      className: "absolute top-32 left-[70%] rotate-[10deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative my-6 flex min-h-[32rem] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        This is just the beginning – more Creative work loading... 💥
      </p>
      {items.map((item) => (
        <DraggableCardBody
          key={item.title}
          className={`${item.className} rounded-4xl`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-50 w-80 rounded-2xl object-cover"
          />
          <h3 className="mt-2 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
