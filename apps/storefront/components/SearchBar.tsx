"use client";

import { envVars } from "@/lib/env-vars";
import { SearchSuggestion, getSearchSuggestions } from "@/services/search";
import { useDebouncedValue } from "@mantine/hooks";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useCombobox } from "downshift";

const DEBOUNCE_DELAY = 500;

export function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [debouncedQuery] = useDebouncedValue(searchQuery, DEBOUNCE_DELAY);

  const [suggestions, setSuggestions] = React.useState<SearchSuggestion[]>([]);

  const displayedSuggestions = suggestions.slice(0, 5).map((s) => s.title);

  const {
    getInputProps,
    getMenuProps,
    getItemProps,
    getLabelProps,
    highlightedIndex,
    isOpen,
    setInputValue,
  } = useCombobox({
    items: displayedSuggestions,
    async onInputValueChange(changes) {
      if (!changes.inputValue) setSuggestions([]);

      setSearchValue(changes.inputValue ?? "");

      if (changes.type === useCombobox.stateChangeTypes.InputChange) {
        setSearchQuery(changes.inputValue!);
      }
    },
    onHighlightedIndexChange(changes) {
      if (changes.highlightedIndex !== undefined) {
        const currentItem = displayedSuggestions[changes.highlightedIndex];
        if (currentItem) {
          setInputValue(currentItem);
          setSearchValue(currentItem);
        }
      }
    },
  });

  React.useEffect(() => {
    const callSearchSuggestions = async () => {
      if (!debouncedQuery) return;

      if (debouncedQuery.length < 3) return;

      const result = await getSearchSuggestions(debouncedQuery);
      setSuggestions(result);
    };

    callSearchSuggestions();
  }, [debouncedQuery]);

  const searchLinkRef = React.useRef<HTMLAnchorElement | null>(null);

  function handleSearch() {
    if (!searchValue) return;

    const params = new URLSearchParams();

    params.set("q", searchValue);

    if (!searchLinkRef.current) return;

    searchLinkRef.current.href = `${envVars.STORE_PATH}/catalogsearch/result/?${params.toString()}`;

    searchLinkRef.current.click();
  }

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <>
      <div className='relative hidden xl:block w-[250px]'>
        {searchValue ? (
          <a ref={searchLinkRef} className='sr-only'>
            <span>search</span>
          </a>
        ) : null}
        <div className='relative'>
          <label {...getLabelProps()} className='sr-only'>
            Search
          </label>
          <input
            name='q'
            className='font-normal text-base h-8 pl-2.5 pr-10 w-full leading-[1.5] border border-[#c2c2c2] outline-none rounded-sm focus-visible:ring-1 focus-visible:ring-black placeholder:text-[#c2c2c2]'
            {...getInputProps({
              inputMode: "search",
              placeholder: "Search entire store here...",
              onKeyDown: handleEnter,
            })}
          />
          <button
            aria-label='search'
            type='button'
            title='Search'
            onClick={handleSearch}
          >
            <span className='absolute top-1/2 right-2.5 -translate-y-1/2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='-5 -5 32 34'
                x='179'
                y='582'
                className='opacity-50 font-bold'
              >
                <g fill='#000' fillRule='nonzero'>
                  <path d='M8.138 16.233h-.546a8.057 8.057 0 01-5.577-2.755A8.053 8.053 0 01.02 7.588a8.04 8.04 0 012.756-5.573A8.02 8.02 0 018.67.021a8.07 8.07 0 015.577 2.754 8.07 8.07 0 011.996 5.89 8.074 8.074 0 01-2.757 5.573 8.078 8.078 0 01-5.347 1.995zm0-15.123a6.955 6.955 0 00-4.601 1.733 6.987 6.987 0 00-2.372 4.804 6.964 6.964 0 001.719 5.074 6.912 6.912 0 004.803 2.372 6.943 6.943 0 005.074-1.719 6.91 6.91 0 002.371-4.804 6.95 6.95 0 00-1.718-5.074A6.973 6.973 0 008.61 1.125l-.473-.015zM14.505 15.34l.096-.098a.777.777 0 011.096 0l.028.032 4.898 5.46a.775.775 0 01-.03 1.066l-.096.098a.776.776 0 01-1.095-.001l-.029-.03-4.898-5.463a.774.774 0 01.03-1.064z' />
                </g>
              </svg>
            </span>
          </button>

          <ul
            {...getMenuProps()}
            className={cn(
              "shadow bg-white absolute top-[34px] inset-x-0 z-[1000]",
              isOpen ? "" : "hidden"
            )}
          >
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <li
                key={suggestion.title}
                data-highlighted={index === highlightedIndex}
                className='data-[highlighted=true]:bg-[#f8f8f8]'
                {...getItemProps({
                  item: suggestion.title,
                  index,
                })}
              >
                <a
                  href={`${envVars.STORE_PATH}/catalogsearch/result/?q=${suggestion.title}`}
                  className='font-semibold flex px-4 py-1 hover:bg-[#f8f8f8]'
                >
                  {suggestion.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
