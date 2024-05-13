"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/lib/utils");
const react_1 = __importDefault(require("react"));
function Container({ className, children, ...props }) {
    return (<div {...props} className={(0, utils_1.cn)("container w-full max-w-[1400px] mx-auto px-4", className)}>
      {children}
    </div>);
}
exports.default = Container;
