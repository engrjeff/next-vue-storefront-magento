"use client";

import { useId, type FormEvent } from "react";
import { Input } from "./Input";

export function NewsletterForm() {
  const inputId = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    console.log("Submit: ", email);
  };

  return (
    <div className='hidden mb-[14px] lg:mb-[29px] px-[15px] pt-[15px] lg:px-0 lg:pt-0'>
      <span className='font-bold text-sm mb-2 uppercase leading-[22px] align-top'>
        Stay in touch
      </span>
      <p className='text-sm font-light mb-2'>
        Join our mailing list for exclusive sales and trend alerts
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col md:flex-row gap-[7px] items-center w-full'
      >
        <label htmlFor={inputId} className='sr-only'>
          Email
        </label>
        <Input
          autoComplete='off'
          id={inputId}
          type='email'
          name='email'
          placeholder='Email address'
          className='border-[#aeaeae] h-12 font-light text-sm focus:bg-transparent hover:border-[#aeaeae] focus-visible:border-[#aeaeae]'
        />
        <button
          type='submit'
          className='w-full md:w-[9.1875rem] shrink-0 inline-block font-heading text-xs tracking-wider uppercase border border-black h-12 font-semibold hover:bg-[#f0f0f0]'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
