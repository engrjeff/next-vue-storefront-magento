import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { addYears, format } from "date-fns";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { KEYS } from "./constants";
import { envVars } from "./env-vars";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

function escape(htmlStr: string) {
  if (!htmlStr) return "";

  return htmlStr
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function getCategoryPath(categoryUrlParams: string[]) {
  if (!categoryUrlParams) return "";

  const urlPath = categoryUrlParams.join("/");

  return urlPath;
}

export async function hash(stringInput: string) {
  const utf8 = new TextEncoder().encode(stringInput);
  const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export const capitalize = (stringInput: string) =>
  stringInput.charAt(0).toUpperCase() + stringInput.slice(1);

export function getBrowserCookie(cookieName: string) {
  if (typeof document === "undefined") return null;

  const cookie = document?.cookie
    .split(";")
    .find((c) => c.includes(cookieName));

  if (!cookie) return null;

  return cookie[1];
}

export function utcTimeToTimeZone(dateInput: string) {
  const properDate = new Date(dateInput);
  return format(properDate, "do MMMM hh:mm aaa");
}

export function sanitizeText(textInput?: string | null) {
  if (!textInput) return "";
  return textInput.replaceAll(/&amp;/gi, "&");
}

export function toHTML(htmlString: string) {
  if (!htmlString) return "";

  return escape(htmlString);
}

export function doWeHaveCustomer() {
  const customerCookie = Cookies.get(KEYS.CUSTOMER);

  if (!customerCookie) return false;

  const decodedToken = jwtDecode(customerCookie);
  const hasExpired = decodedToken.exp
    ? Date.now() / 1000 > decodedToken.exp
    : true;

  if (hasExpired) return false;

  return true;
}

// Helper for setting the store cookie
const storeCookieKey = envVars.STORE_COOKIE_KEY;

const cookieAttributes: Cookies.CookieAttributes = {
  secure: true,
  sameSite: "lax",
  expires: addYears(new Date(), 1), // 1 year
  path: "/",
};

export function setStoreCookie(storeName: string) {
  Cookies.set(storeCookieKey, storeName, cookieAttributes);
}

// helper for doing client-side redirect
export function clientRedirect(uri: string, debugInDev: boolean = true) {
  const debug = process.env.NODE_ENV === "development" && debugInDev;

  if (debug) {
    console.log("Redirect to: ", uri);
    return;
  }

  const redirectTo = new URL(uri, envVars.SHOWPO_URL);

  window.location.href = redirectTo.href;
}
