'use client';
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
const utils_1 = require("@/lib/utils");
const NavigationMenu = __importStar(require("@radix-ui/react-navigation-menu"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importStar(require("react"));
function Megamenu({ categories, megamenu }) {
    const [cmsblock, setcmsblock] = react_1.default.useState();
    const [activeMegamenu, setActiveMegamenu] = react_1.default.useState();
    function getMegamenuHTMLForCategory(megamenuId) {
        return megamenu?.find((m) => m?.block_id === megamenuId.toString())
            ?.content;
    }
    return (<NavigationMenu.Root value={activeMegamenu} onValueChange={async (megamenuId) => {
            const htmlblock = (0, utils_1.toHTML)(getMegamenuHTMLForCategory(megamenuId));
            setcmsblock(htmlblock);
            setActiveMegamenu(megamenuId);
        }}>
      <NavigationMenu.List className="h-[53px] flex items-center justify-center">
        {categories?.map((category, index) => (<NavigationMenu.Item key={category?.uid + (index + 1).toString()} className="mr-[11px]" value={String(category?.mega_menu)}>
            <NavigationMenu.Trigger asChild className="px-2.5">
              <link_1.default prefetch={false} href={`/${category?.url_path}/`} className="h-full inline-block">
                <span className={(0, utils_1.cn)('text-xs leading-[53px] font-normal font-heading uppercase text-muted-foreground transition-colors hover:text-black', {
                'text-uired': category?.name?.toLowerCase() === 'sale',
            })}>
                  {category?.name}
                </span>
              </link_1.default>
            </NavigationMenu.Trigger>
            {category?.mega_menu ? (<NavigationMenu.Content className="absolute top-12 left-0 right-6 w-full bg-white shadow-md rounded py-8 px-10 z-20">
                {cmsblock ? <MegamenuBlock content={cmsblock}/> : null}
              </NavigationMenu.Content>) : null}
          </NavigationMenu.Item>))}
      </NavigationMenu.List>
    </NavigationMenu.Root>);
}
exports.default = Megamenu;
function MegamenuBlock({ content }) {
    const contentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!contentRef.current)
            return;
        const images = contentRef.current.querySelectorAll('img');
        images.forEach((image) => {
            image.decode().catch(() => {
                image.style.display = 'none';
            });
        });
    }, []);
    return (<div ref={contentRef} className="megamenu-cms-block" dangerouslySetInnerHTML={{ __html: content }}/>);
}
