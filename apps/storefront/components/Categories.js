"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMegamenu_1 = require("@/services/queries/getMegamenu");
const Container_1 = __importDefault(require("./Container"));
const Megamenu_1 = __importDefault(require("./Megamenu"));
async function Categories() {
    const data = await (0, getMegamenu_1.getMegamenu)();
    if (!data)
        return null;
    const { displayedCategories, megamenu } = data;
    return (<Container_1.default className="hidden xl:block p-0">
      <Megamenu_1.default categories={displayedCategories} megamenu={megamenu}/>
    </Container_1.default>);
}
exports.default = Categories;
