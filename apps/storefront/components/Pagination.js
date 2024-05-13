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
exports.Pagination = void 0;
const utils_1 = require("@/lib/utils");
const outline_1 = require("@heroicons/react/24/outline");
const hooks_1 = require("@mantine/hooks");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const React = __importStar(require("react"));
function Pagination({ currentPage, totalPages }) {
    const pageParamKey = 'p';
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const { range } = (0, hooks_1.usePagination)({
        total: totalPages,
        initialPage: currentPage > totalPages ? 1 : currentPage,
    });
    const createQueryString = React.useCallback((value) => {
        const params = new URLSearchParams(searchParams ? searchParams : undefined);
        params.set(pageParamKey, value);
        return params.toString();
    }, [searchParams]);
    if (totalPages === 1) {
        return null;
    }
    return (<div>
      <ul className="flex items-center gap-1.5">
        {currentPage > 1 ? (<li>
            <link_1.default prefetch={false} href={`${pathname}?${createQueryString((currentPage - 1).toString())}`} className={(0, utils_1.cn)('inline-flex items-center justify-center w-[30px] h-[30px] hover:bg-[#f0f0f0] transition-colors duration-300')}>
              <span className="sr-only">go to page {currentPage - 1}</span>
              <outline_1.ChevronLeftIcon className="h-4 w-4"/>
            </link_1.default>
          </li>) : null}
        {range.map((n, index) => (<li key={`page-${n}-${index + 1}`}>
            {n === 'dots' ? (<span aria-hidden="true" className="translate-y-2 leading-none inline-block">
                ....
              </span>) : (<link_1.default prefetch={false} href={`${pathname}?${createQueryString(n.toString())}`} className={(0, utils_1.cn)('text-xs text-center inline-block w-[30px] h-[30px] px-1.5 pt-1.5 bg-[#f9f9f9] border border-[#979797] transition-colors duration-300 xl:hover:text-white xl:hover:bg-black active:text-white active:bg-black', { 'bg-black text-white': n === currentPage })}>
                {n}
              </link_1.default>)}
          </li>))}
        {currentPage < totalPages ? (<li>
            <link_1.default prefetch={false} href={`${pathname}?${createQueryString((currentPage + 1).toString())}`} className={(0, utils_1.cn)('inline-flex items-center justify-center w-[30px] h-[30px] hover:bg-[#f0f0f0] transition-colors duration-300')}>
              <span className="sr-only">go to page {currentPage + 1}</span>
              <outline_1.ChevronRightIcon className="h-4 w-4"/>
            </link_1.default>
          </li>) : null}
      </ul>
    </div>);
}
exports.Pagination = Pagination;
