"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoWithLink = void 0;
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function LogoWithLink() {
    return (<div className='absolute inline-flex top-1.5 xl:top-2 left-10 xl:left-1/2 xl:-translate-x-1/2 xl:text-center'>
      <link_1.default href='/' className='inline-flex xl:mb-[25px]'>
        <image_1.default priority src={`/images/showpo_logo_v2.svg`} alt='Showpo UK Logo' width={115} height={27}/>
      </link_1.default>
    </div>);
}
exports.LogoWithLink = LogoWithLink;
