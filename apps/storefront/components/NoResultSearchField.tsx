"use client";

import { useRouter } from "next/navigation";
import React from "react";

export function NoResultSearchField() {
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();

    const formData = new FormData(e.currentTarget);

    const q = formData.get("q");

    if (!q) return;

    params.set("q", q.toString());

    router.push(`/catalogsearch/result?${params.toString()}`);
  }

  return (
    <div>
      <form onSubmit={handleSearch} className='relative'>
        <label htmlFor='no-results-search-field' className='sr-only'>
          Search
        </label>
        <input
          id='no-results-search-field'
          name='q'
          type='text'
          className='rounded-lg pl-3 pr-12 py-3 font-medium text-sm h-12 w-full leading-[1.5] border border-black outline-none focus-visible:bg-[#f7f8f9]'
        />
        <button aria-label='search' title='Search'>
          <span className='absolute top-1/2 right-2.5 -translate-y-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='-5 -5 32 34'
              x='179'
              y='582'
              className='font-bold'
            >
              <g fill='#000' fillRule='nonzero'>
                <path d='M8.138 16.233h-.546a8.057 8.057 0 01-5.577-2.755A8.053 8.053 0 01.02 7.588a8.04 8.04 0 012.756-5.573A8.02 8.02 0 018.67.021a8.07 8.07 0 015.577 2.754 8.07 8.07 0 011.996 5.89 8.074 8.074 0 01-2.757 5.573 8.078 8.078 0 01-5.347 1.995zm0-15.123a6.955 6.955 0 00-4.601 1.733 6.987 6.987 0 00-2.372 4.804 6.964 6.964 0 001.719 5.074 6.912 6.912 0 004.803 2.372 6.943 6.943 0 005.074-1.719 6.91 6.91 0 002.371-4.804 6.95 6.95 0 00-1.718-5.074A6.973 6.973 0 008.61 1.125l-.473-.015zM14.505 15.34l.096-.098a.777.777 0 011.096 0l.028.032 4.898 5.46a.775.775 0 01-.03 1.066l-.096.098a.776.776 0 01-1.095-.001l-.029-.03-4.898-5.463a.774.774 0 01.03-1.064z' />
              </g>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}
