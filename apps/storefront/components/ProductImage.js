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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImage = void 0;
const utils_1 = require("@/lib/utils");
const image_1 = __importDefault(require("next/image"));
const React = __importStar(require("react"));
const fallbackImage = "/images/plp-placeholder.png";
function ProductImage({ imageSrc, alt }) {
    const [isLoading, setLoading] = React.useState(true);
    const imageRef = React.useRef(null);
    return (<div className='w-full h-[344px] lg:h-[390px] aspect-[9/16] relative bg-white overflow-hidden'>
      {!imageSrc ? (<image_1.default ref={imageRef} alt='' src={fallbackImage} fill className={(0, utils_1.cn)("group-hover:opacity-75 duration-700 ease-in-out object-contain w-auto h-auto", isLoading ? "grayscale blur-2xl" : "grayscale-0 blur-0")} onLoad={() => setLoading(false)}/>) : (<image_1.default ref={imageRef} alt={alt ?? ""} src={imageSrc} fill className={(0, utils_1.cn)("group-hover:opacity-75 duration-700 ease-in-out object-cover h-auto", isLoading ? "grayscale blur-2xl" : "grayscale-0 blur-0", imageSrc.includes("placeholder")
                ? "object-contain"
                : "object-cover", imageRef.current?.src.includes("plp-placeholder.png")
                ? "object-contain"
                : "")} onLoad={() => setLoading(false)} onError={() => {
                if (!imageRef.current)
                    return;
                imageRef.current.src = fallbackImage;
            }}/>)}
    </div>);
}
exports.ProductImage = ProductImage;
