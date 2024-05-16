"use client";

import { envVars } from "@/lib/env-vars";
import { SearchSuggestion, getSearchSuggestions } from "@/services/search";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDebouncedValue } from "@mantine/hooks";
import * as React from "react";
import { SearchIcon } from "./SvgIcon";

import { cn } from "@/lib/utils";
import { useCombobox } from "downshift";

const DEBOUNCE_DELAY = 500;

export function MWebSearchBar() {
  const [mobileSearchShown, setMobileSearchShown] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setMobileSearchShown(true)}
        className='inline-flex h-full xl:hidden items-center justify-center'
        aria-label='search'
        title='Search'
      >
        <SearchIcon />
      </button>
      {mobileSearchShown ? (
        <MwebSearch onClose={() => setMobileSearchShown(false)} />
      ) : null}
    </>
  );
}

function MwebSearch({ onClose }: { onClose: () => void }) {
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

    onClose();
  }

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <>
      {searchQuery ? (
        <a ref={searchLinkRef} className='sr-only'>
          <span>search</span>
        </a>
      ) : null}

      <div className='xl:hidden fixed inset-0 h-screen w-screen bg-white z-[99] p-6'>
        <div className='relative'>
          <button
            onClick={() => {
              setInputValue("");
              onClose();
            }}
            type='button'
            aria-label='close'
            title='close'
            className='h-7 w-7 bg-gray-100 flex items-center justify-center absolute top-1/2 left-1 -translate-y-1/2 text-gray-400'
          >
            <XMarkIcon className='w-5 h-5' />
          </button>

          <label {...getLabelProps()} className='sr-only'>
            Search
          </label>
          <input
            name='q'
            className='w-full font-normal h-9 px-10 min-w-[250px] border border-border outline-none rounded-sm focus-visible:border-black'
            {...getInputProps({
              inputMode: "search",
              placeholder: "Search entire store here...",
              onKeyDown: handleEnter,
              autoFocus: true,
            })}
          />
          <button
            aria-label='search'
            title='Search'
            type='button'
            onClick={handleSearch}
            className='flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 text-gray-400'
          >
            <MagnifyingGlassIcon className='w-5 h-5' />
          </button>
          <ul
            {...getMenuProps()}
            className={cn(
              "shadow-none bg-white absolute top-[36px] inset-x-0 z-[1000]",
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
                  className='font-semibold flex px-3 py-1 hover:bg-[#f8f8f8]'
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
