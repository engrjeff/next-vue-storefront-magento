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
exports.RadioFilterButton = void 0;
const utils_1 = require("@/lib/utils");
const outline_1 = require("@heroicons/react/24/outline");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const React = __importStar(require("react"));
function RadioFilterButton({ label, name, value, }) {
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const createQueryString = React.useCallback(() => {
        const params = new URLSearchParams(searchParams ? searchParams : undefined);
        const paramValue = searchParams?.getAll(name);
        if (paramValue?.includes(String(value))) {
            params.delete(name, value);
        }
        else {
            params.append(name, value);
        }
        if (params.has("p")) {
            params.delete("p");
        }
        return params.toString();
    }, [name, searchParams, value]);
    return (<link_1.default prefetch={false} href={pathname + "?" + createQueryString()} className='w-full h-[30px] flex items-center'>
      <span className={(0, utils_1.cn)("h-5 w-5 rounded-full flex items-center justify-center overflow-hidden border border-[#333333]", { "bg-[#333333]": searchParams?.getAll(name).includes(value) })}>
        <outline_1.CheckIcon className='h-4 w-4 text-white'/>
      </span>

      <span className='text-[13px] uppercase ml-[13px]'>{label}</span>
    </link_1.default>);
}
exports.RadioFilterButton = RadioFilterButton;
