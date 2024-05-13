export function firstOrNull<T>(fromArr?: T[] | null) {
  return fromArr ? (fromArr[0] ? fromArr[0] : null) : null;
}

export function parseCategoryFromPath(category: string[]) {
  return category.join("/");
}
