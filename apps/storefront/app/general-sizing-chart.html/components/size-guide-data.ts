export const sizeGuideData = [
  {
    size: "XXS",
    bust: 81,
    waist: 60,
    hip: 90,
  },
  {
    size: "XS",
    bust: 83.5,
    waist: 62.5,
    hip: 92.5,
  },
  {
    size: "S",
    bust: 86,
    waist: 65,
    hip: 95,
  },
  {
    size: "M",
    bust: 91,
    waist: 70,
    hip: 100,
  },
  {
    size: "L",
    bust: 96,
    waist: 75,
    hip: 105,
  },
  {
    size: "XL",
    bust: 101,
    waist: 80,
    hip: 110,
  },
  {
    size: "XXL",
    bust: 108,
    waist: 87,
    hip: 117,
  },
  {
    size: "XXXL",
    bust: 115,
    waist: 94,
    hip: 124,
  },
  {
    size: "XXXXL",
    bust: 122,
    waist: 101,
    hip: 131,
  },
];

export const shoeGuideData = [
  { size: "AU", data: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10] },
  { size: "EU", data: [36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41] },
  { size: "UK", data: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8] },
  { size: "US", data: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10] },
];

export const conversionChartData = [
  { size: "XXS", AU: 4, US: 0, UK: 4, EU: 32 },
  { size: "XS", AU: 6, US: 2, UK: 6, EU: 34 },
  { size: "S", AU: 8, US: 4, UK: 8, EU: 36 },
  { size: "M", AU: 10, US: 6, UK: 10, EU: 38 },
  { size: "L", AU: 12, US: 8, UK: 12, EU: 40 },
  { size: "XL", AU: 14, US: 10, UK: 14, EU: 42 },
  { size: "XXL", AU: 16, US: 12, UK: 16, EU: 44 },
  { size: "XXXL", AU: 18, US: 14, UK: 18, EU: 46 },
  { size: "XXXXL", AU: 20, US: 16, UK: 20, EU: 48 },
];

export function getConversionChartbySize(size: string) {
  const index = conversionChartData.findIndex((i) => i.size === size);
  return conversionChartData[index];
}

export type CChartKey = keyof ReturnType<typeof getConversionChartbySize>;
