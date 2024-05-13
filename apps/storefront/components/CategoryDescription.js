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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDescription = void 0;
const utils_1 = require("@/lib/utils");
const React = __importStar(require("react"));
function CategoryDescription({ description }) {
    const [expanded, setExpanded] = React.useState(false);
    if (!description)
        return null;
    return (<div className="text-lightText text-[15px] font-light min-h-[26px] mb-1">
      <div suppressHydrationWarning className={(0, utils_1.cn)(expanded ? 'block' : 'flex')}>
        <div className={(0, utils_1.cn)({
            'h-4 overflow-hidden line-clamp-1 [&_div]:line-clamp-1': !expanded,
        })} dangerouslySetInnerHTML={{ __html: (0, utils_1.toHTML)(description) }}></div>
        <button className="underline shrink-0" onClick={() => setExpanded((val) => !val)}>
          read {expanded ? 'less' : 'more'}
        </button>
      </div>
    </div>);
}
exports.CategoryDescription = CategoryDescription;
