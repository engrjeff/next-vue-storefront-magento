"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const useCustomerCart_1 = require("@/hooks/useCustomerCart");
const link_1 = __importDefault(require("next/link"));
const CartBadge_1 = require("./CartBadge");
const SvgIcon_1 = require("./SvgIcon");
function Cart() {
    const { data: customerCartData } = (0, useCustomerCart_1.useCustomerCart)();
    const { data: guestCart } = (0, useCustomerCart_1.useGuestCart)();
    const isAuthed = customerCartData?.data?.customerCart?.email;
    return (<link_1.default href='/account/cart'>
      <SvgIcon_1.BagIcon />
      {isAuthed ? (<CartBadge_1.CartBadge count={customerCartData?.data.customerCart.total_quantity}/>) : (<CartBadge_1.CartBadge count={guestCart?.data?.cart?.total_quantity ?? 0}/>)}
    </link_1.default>);
}
exports.Cart = Cart;
