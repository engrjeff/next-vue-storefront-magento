"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.font = void 0;
const google_1 = require("next/font/google");
const local_1 = __importDefault(require("next/font/local"));
const sans = (0, google_1.Jost)({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: "--font-jost",
    display: "swap",
});
const heading = (0, local_1.default)({
    src: [
        {
            path: "./GTAmerica_ExtendedRegular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./GTAmerica_ExtendedBold.otf",
            weight: "700",
            style: "bold",
        },
    ],
    display: "swap",
    variable: "--font-gtamerica-eb",
});
exports.font = {
    sans,
    heading,
};
