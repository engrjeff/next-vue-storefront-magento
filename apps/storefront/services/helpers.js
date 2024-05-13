"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCategoryFromPath = exports.firstOrNull = void 0;
function firstOrNull(fromArr) {
    return fromArr ? (fromArr[0] ? fromArr[0] : null) : null;
}
exports.firstOrNull = firstOrNull;
function parseCategoryFromPath(category) {
    return category.join("/");
}
exports.parseCategoryFromPath = parseCategoryFromPath;
