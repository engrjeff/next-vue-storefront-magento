'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/lib/utils");
const react_1 = __importDefault(require("react"));
function HeaderWrapper({ children }) {
    const [isScrollingUp, setIsScrollingUp] = react_1.default.useState(true);
    const [lastScrolledY, setLastScrolledY] = react_1.default.useState(0);
    react_1.default.useEffect(() => {
        if (!window)
            return;
        const scrollEventCallback = () => {
            const scrolledY = window.scrollY;
            setIsScrollingUp(scrolledY < lastScrolledY);
            setLastScrolledY(scrolledY);
        };
        window.addEventListener('scroll', scrollEventCallback);
        return () => {
            window.removeEventListener('scroll', scrollEventCallback);
        };
    }, [lastScrolledY]);
    return (<header className={(0, utils_1.cn)('max-w-full z-[20] bg-white  transition-transform', isScrollingUp ? 'sticky top-0 translate-y-0' : '-translate-y-20')}>
      {children}
    </header>);
}
exports.default = HeaderWrapper;
