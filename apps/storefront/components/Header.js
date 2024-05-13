"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const AccountMenu_1 = require("./AccountMenu");
const Cart_1 = require("./Cart");
const Container_1 = __importDefault(require("./Container"));
const LogoWithLink_1 = require("./LogoWithLink");
function Header() {
    return (<>
      <Container_1.default className='lg:pb-[11px] lg:pt-[11px] h-[49px] lg:h-[73.5px]'>
        <div className='pt-[11px]'></div>
        <div className='flex items-center xl:items-start justify-between xl:justify-end gap-4 relative'>
          <LogoWithLink_1.LogoWithLink />
          <div className='flex gap-0 xl:gap-2 pr-0.5'>
            <AccountMenu_1.AccountMenu />
            <Cart_1.Cart />
          </div>
        </div>
      </Container_1.default>
    </>);
}
exports.Header = Header;
