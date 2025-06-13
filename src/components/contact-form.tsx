"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the field!!");
      return;
    }

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call succrssful!!");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfull!!");
    } else {
      toast.error("Something went wrong!!");
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-lg flex-col gap-5 py-10"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Suresh Choudhary"
            className="shadow-aceternity focus:ring-primary/40 rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="sureshchoudhary.work@gmail.com"
            className="shadow-aceternity focus:ring-primary/40 resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="name"
            onChange={handleChange}
            placeholder="You're cracy good, never change."
            className="shadow-aceternity focus:ring-primary/40 resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <ShimmerButton
          type="submit"
          className="bg-primary mt-4 rounded-full px-4 py-2 text-white hover:bg-neutral-800"
        >
          Send message
        </ShimmerButton>
      </form>
    </div>
  );
};
