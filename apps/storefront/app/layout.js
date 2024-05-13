"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Categories_1 = __importDefault(require("@/components/Categories"));
const Header_1 = require("@/components/Header");
const HeaderWrapper_1 = __importDefault(require("@/components/HeaderWrapper"));
const provider_1 = require("@/sdk/provider");
const config_1 = require("./fonts/config");
require("./globals.css");
exports.metadata = {
    title: "Showpo UK",
    description: "Showpo UK store",
};
function RootLayout({ children, }) {
    return (<html lang='en'>
      <body className={`${config_1.font.sans.variable} ${config_1.font.heading.variable} antialiased font-sans min-h-screen flex flex-col w-full`}>
        <provider_1.Providers>
          <HeaderWrapper_1.default>
            <Header_1.Header />
            <Categories_1.default />
          </HeaderWrapper_1.default>
          <main className='flex-1'>{children}</main>
        </provider_1.Providers>
      </body>
    </html>);
}
exports.default = RootLayout;
