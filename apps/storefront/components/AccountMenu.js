"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMenu = void 0;
const link_1 = __importDefault(require("next/link"));
const SvgIcon_1 = require("./SvgIcon");
function AccountMenu() {
    return (<link_1.default href='/account/signin'>
      <SvgIcon_1.AccountIcon />
      <span className='sr-only'>Account sign in</span>
    </link_1.default>);
}
exports.AccountMenu = AccountMenu;
