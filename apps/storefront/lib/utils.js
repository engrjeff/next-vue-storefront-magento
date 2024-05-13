"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHTML = exports.sanitizeText = exports.utcTimeToTimeZone = exports.getBrowserCookie = exports.capitalize = exports.hash = exports.getCategoryPath = exports.cn = void 0;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
const date_fns_1 = require("date-fns");
function cn(...classes) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(classes));
}
exports.cn = cn;
function escape(htmlStr) {
    if (!htmlStr)
        return '';
    return htmlStr
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}
function getCategoryPath(categoryUrlParams) {
    if (!categoryUrlParams)
        return '';
    const urlPath = categoryUrlParams.join('/');
    return urlPath;
}
exports.getCategoryPath = getCategoryPath;
async function hash(stringInput) {
    const utf8 = new TextEncoder().encode(stringInput);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
}
exports.hash = hash;
const capitalize = (stringInput) => stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
exports.capitalize = capitalize;
function getBrowserCookie(cookieName) {
    if (typeof document === 'undefined')
        return null;
    const cookie = document?.cookie
        .split(';')
        .find((c) => c.includes(cookieName));
    if (!cookie)
        return null;
    return cookie[1];
}
exports.getBrowserCookie = getBrowserCookie;
function utcTimeToTimeZone(dateInput) {
    const properDate = new Date(dateInput);
    return (0, date_fns_1.format)(properDate, 'do MMMM hh:mm aaa');
}
exports.utcTimeToTimeZone = utcTimeToTimeZone;
function sanitizeText(textInput) {
    if (!textInput)
        return '';
    return textInput.replaceAll(/&amp;/gi, '&');
}
exports.sanitizeText = sanitizeText;
function toHTML(htmlString) {
    if (!htmlString)
        return '';
    return escape(htmlString);
}
exports.toHTML = toHTML;
