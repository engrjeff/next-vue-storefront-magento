"use server";

import { sdk } from "@/sdk/sdk.config";
import { cookies } from "next/headers";

export async function signInCustomer(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await sdk.magento.generateCustomerToken({
    email,
    password,
    recaptchaToken: "",
  });

  if (result.data?.generateCustomerToken?.token) {
    cookies().set({
      name: "vsf-customer",
      value: result.data.generateCustomerToken.token,
    });
  }
}