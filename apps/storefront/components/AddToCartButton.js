"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartButton = void 0;
const utils_1 = require("@/lib/utils");
const outline_1 = require("@heroicons/react/24/outline");
const React = __importStar(require("react"));
function AddToCartButton({ product, variant }) {
    const [status, setStatus] = React.useState("idle");
    const isAvailable = variant?.product?.stock_status === "IN_STOCK";
    const handleAddToCart = async () => { };
    return (<>
      <button type='button' onClick={handleAddToCart} disabled={status === "loading"} title='Add to bag' className={(0, utils_1.cn)("bg-[#32997d] text-white select-none text-sm font-bold w-full h-9 flex items-center justify-center px-4 py-2 uppercase hover:bg-opacity-90 disabled:opacity-40", { "opacity-40 cursor-not-allowed": !isAvailable })}>
        {status === "done" ? <outline_1.CheckIcon className='h-4 w-4'/> : "Add To Bag"}
      </button>
    </>);
}
exports.AddToCartButton = AddToCartButton;
