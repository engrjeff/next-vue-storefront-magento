'use client';

import { sdk } from '@/sdk/sdk.config';

function SignInForm() {
  return (
    <div>
      <h1 className="text-lg font-semibold">Sign In</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;

          const result = await sdk.magento.generateCustomerToken({
            email,
            password,
            recaptchaToken: '',
          });

          console.log(result);
        }}
      >
        <div className="flex flex-col space-y-2 mb-2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col space-y-2 mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col space-y-2 mb-2">
          <button
            type="submit"
            className="px-3 py-2 text-white bg-black w-full hover:bg-black/80"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
