'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSortSelect = void 0;
const outline_1 = require("@heroicons/react/24/outline");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const React = __importStar(require("react"));
const sortParamKey = 'product_list_order';
function ProductsSortSelect({ sortOptions, id, }) {
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const [sortValue, setSortValue] = React.useState(() => searchParams?.get(sortParamKey)
        ? searchParams?.get(sortParamKey)
        : sortOptions?.default);
    const sortLinkRef = React.useRef(null);
    React.useEffect(() => {
        if (!sortValue)
            return;
        if (!sortLinkRef.current)
            return;
        sortLinkRef.current.click();
    }, [sortValue]);
    const createQueryString = React.useCallback((value) => {
        const defSort = sortOptions?.default;
        const params = new URLSearchParams(searchParams ? searchParams : undefined);
        // if the selected sortValue is the same as the default, strip it
        if (value === defSort) {
            if (params.has(sortParamKey)) {
                params.delete(sortParamKey);
            }
            return params.toString();
        }
        params.set(sortParamKey, value);
        return params.toString();
    }, [searchParams, sortOptions]);
    const handleSortOrderChange = (event) => {
        const value = event.target.value;
        setSortValue(value);
    };
    // helper for mapping sort option label
    const getLabel = (label) => {
        const _label = label?.toLowerCase();
        if (_label === 'position') {
            return 'Most Popular';
        }
        if (_label === 'go live at') {
            return 'New In';
        }
        if (_label === 'price') {
            return 'Price Low to High';
        }
        return label;
    };
    const priceSortFieldIndex = sortOptions?.options?.findIndex((i) => i?.value === 'price') ??
        sortOptions?.options?.length;
    const sortFieldsOptions = sortOptions?.options
        ?.slice(0, priceSortFieldIndex)
        .concat({
        default_direction: 'DESC',
        use_sort_direction: true,
        label: 'Price High to Low',
        value: 'price_high',
    })
        .concat(sortOptions?.options?.slice(priceSortFieldIndex));
    return (<>
      <div className="relative xl:w-[215px] flex-shrink-0">
        {sortValue ? (<link_1.default href={`${pathname}?${createQueryString(sortValue)}`} ref={sortLinkRef} className="sr-only">
            Sort: {sortValue}
          </link_1.default>) : null}
        <label htmlFor={id} className="sr-only">
          Sort
        </label>
        <select value={sortValue === null ? undefined : sortValue} onChange={handleSortOrderChange} name="product_list_order" id={id} className="appearance-none flex h-[50px] xl:h-[35px] w-full items-center select-none justify-between border uppercase font-bold xl:normal-case xl:font-normal border-black xl:border-[#d3d3d3] bg-white pl-3 pr-7 py-1.5 text-[15px] placeholder:text-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
          {sortFieldsOptions?.map((option) => (<option key={`sort-option-${option?.value}`} value={option?.value ?? ''}>
              {getLabel(option?.label)}
            </option>))}
        </select>
        <outline_1.ChevronDownIcon className="h-4 w-4 xl:opacity-50 absolute top-1/2 -translate-y-1/2 right-3"/>
      </div>
    </>);
}
exports.ProductsSortSelect = ProductsSortSelect;
