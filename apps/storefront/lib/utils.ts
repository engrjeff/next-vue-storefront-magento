import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { format } from 'date-fns';

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

function escape(htmlStr: string) {
  if (!htmlStr) return '';

  return htmlStr
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function getCategoryPath(categoryUrlParams: string[]) {
  if (!categoryUrlParams) return '';

  const urlPath = categoryUrlParams.join('/');

  return urlPath;
}

export async function hash(stringInput: string) {
  const utf8 = new TextEncoder().encode(stringInput);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

export const capitalize = (stringInput: string) =>
  stringInput.charAt(0).toUpperCase() + stringInput.slice(1);

export function getBrowserCookie(cookieName: string) {
  if (typeof document === 'undefined') return null;

  const cookie = document?.cookie
    .split(';')
    .find((c) => c.includes(cookieName));

  if (!cookie) return null;

  return cookie[1];
}

export function utcTimeToTimeZone(dateInput: string) {
  const properDate = new Date(dateInput);
  return format(properDate, 'do MMMM hh:mm aaa');
}

export function sanitizeText(textInput?: string | null) {
  if (!textInput) return '';
  return textInput.replaceAll(/&amp;/gi, '&');
}

export function toHTML(htmlString: string) {
  if (!htmlString) return '';

  return escape(htmlString);
}
