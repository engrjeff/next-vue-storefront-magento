import React from "react";

interface SvgIconProps extends React.ComponentProps<"svg"> {}

export function AccountIcon({ className, ...props }: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='34'
      viewBox='-5 -5 32 34'
      y='582'
      className={className}
      {...props}
    >
      <path
        d='M18.828 23.235H1.172A1.177 1.177 0 010 22.06c0-5.14 3.83-7.647 10-7.647s10 2.508 10 7.647c0 .646-.524 1.176-1.172 1.176zM10 15.588c-5.598 0-8.824 2.112-8.824 6.47h17.652c-.004-4.358-3.23-6.47-8.828-6.47zm0-2.294c-3.466 0-6-3.317-6-6.782C4 3.166 6.486.294 10 .294s6 2.872 6 6.218c0 3.465-2.534 6.782-6 6.782zm0-1c2.762 0 5-2.8 5-5.79 0-2.85-2.137-5.21-5-5.21s-5 2.36-5 5.21c0 2.99 2.238 5.79 5 5.79z'
        fill='#000'
        fillRule='nonzero'
      />
    </svg>
  );
}

export function HeartIcon({ className, ...props }: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='33'
      viewBox='-5 -5 34 33'
      x='268'
      y='546'
      className={className}
      {...props}
    >
      <path
        d='M17.279 1a6.132 6.132 0 00-5.275 3.035A6.13 6.13 0 006.729 1C3.329 1 1 3.799 1 7.234c0 4.302 6.677 11.535 9.046 13.966a2.69 2.69 0 001.95.8h0a2.688 2.688 0 001.923-.84C16.288 18.685 23 11.26 23 7.218 23.008 3.798 20.678 1 17.279 1z'
        stroke='#000'
        strokeWidth='1.184'
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function BagIcon({ className, ...props }: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='31'
      height='34'
      viewBox='-5 -5 31 34'
      x='59'
      y='582'
      className={className}
      {...props}
    >
      <path
        d='M.81 22.35c.336.386.824.608 1.336.608h16.708a1.774 1.774 0 001.755-2.017l-1.873-13.51a1.78 1.78 0 00-1.756-1.529H4.02a1.78 1.78 0 00-1.756 1.53L.39 20.941c-.07.507.083 1.02.42 1.408zm.571-1.27L3.255 7.568a.776.776 0 01.765-.667h12.96a.777.777 0 01.766.667l1.873 13.51a.776.776 0 01-.765.879H2.146a.772.772 0 01-.765-.879zM13.986 4.772a.5.5 0 00.5-.501V4.03a3.986 3.986 0 10-7.973 0v.242a.5.5 0 101 0V4.03a2.989 2.989 0 014.48-2.587 2.988 2.988 0 011.493 2.587v.242a.5.5 0 00.5.501z'
        fill='#000'
        fillRule='nonzero'
      />
    </svg>
  );
}

export function SearchIcon({ className, ...props }: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='34'
      viewBox='-5 -5 32 34'
      x='179'
      y='582'
      className={className}
      {...props}
    >
      <g fill='#000' fillRule='nonzero'>
        <path d='M8.138 16.233h-.546a8.057 8.057 0 01-5.577-2.755A8.053 8.053 0 01.02 7.588a8.04 8.04 0 012.756-5.573A8.02 8.02 0 018.67.021a8.07 8.07 0 015.577 2.754 8.07 8.07 0 011.996 5.89 8.074 8.074 0 01-2.757 5.573 8.078 8.078 0 01-5.347 1.995zm0-15.123a6.955 6.955 0 00-4.601 1.733 6.987 6.987 0 00-2.372 4.804 6.964 6.964 0 001.719 5.074 6.912 6.912 0 004.803 2.372 6.943 6.943 0 005.074-1.719 6.91 6.91 0 002.371-4.804 6.95 6.95 0 00-1.718-5.074A6.973 6.973 0 008.61 1.125l-.473-.015zM14.505 15.34l.096-.098a.777.777 0 011.096 0l.028.032 4.898 5.46a.775.775 0 01-.03 1.066l-.096.098a.776.776 0 01-1.095-.001l-.029-.03-4.898-5.463a.774.774 0 01.03-1.064z' />
      </g>
    </svg>
  );
}
