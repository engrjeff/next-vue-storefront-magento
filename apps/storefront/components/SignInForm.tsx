"use client";

import { login } from "@/services/mutations/signInCustomer";
import { useState } from "react";
import { Input } from "./Input";

function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='py-20'>
      <h1 className='text-lg text-center font-semibold'>Sign In</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setIsLoading(true);

          const formData = new FormData(e.currentTarget);
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;

          const ok = await login(email, password);

          if (ok) {
            window.location.reload();
          }

          setIsLoading(false);
        }}
        className='space-y-3'
      >
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email'>Email</label>
          <Input type='email' name='email' id='email' placeholder='Email' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>

        <div className='flex flex-col space-y-2 pt-4'>
          <button
            type='submit'
            disabled={isLoading}
            className='w-full text-center flex items-center justify-center px-3 py-1.5 h-12 text-[13px] border bg-black text-white border-black hover:bg-[#333] hover:border-[#007cad] transition-colors tracking-[0.85px] uppercase font-semibold outline-none focus-visible:ring-1 focus-visible:ring-[#007cad] focus-visible:border-transparent disabled:opacity-50'
          >
            {isLoading ? "Please wait" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
