"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  CChartKey,
  getConversionChartbySize,
  sizeGuideData,
} from "./size-guide-data";

function SizeGuideTable() {
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  const convertToCurrentUnit = (value: string | number) => {
    if (unit === "cm") return value;

    const valueInInches = Number(value) * 0.393701; // 1 cm = 0.3937in

    return valueInInches.toFixed(1);
  };

  return (
    <div className='xl:max-w-[60%] scroll-smooth'>
      <h1 className='text-center font-semibold font-sans text-2xl capitalize md:text-left'>
        Size Guide
      </h1>
      <div className='flex flex-row xl:flex-row items-start'>
        <div>
          <div className='xl:mb-6 flex flex-col gap-4 xl:flex-row xl:gap-6 xl:w-[87%]'>
            <p className='hidden flex-1 text-[15px] md:block'>
              Sizes are based on the following body measurements, however some
              items may vary due to fabric and fit. These measurements should be
              used as a guide only. If you purchase two of the same item in
              different sizes and return one, we will glady refund you in full.
              Return postage for your return item is not reimbursed.
              Measurements are in centimetres. Please note: All garment tags are
              in AU sizes.
            </p>

            <p className='text-center text-[15px] md:hidden'>
              Sizes are based on the following body measurements, however some
              items may vary due to fabric and fit. These measurements should be
              used as a guide only. Please note: All garment tags are in AU
              sizes.
            </p>
          </div>

          <div className='flex xl:hidden items-center justify-between md:justify-end my-5'>
            <button
              className={cn(
                "font-medium py-0.5 px-[15px] text-sm border-2 border-black bg-black text-white",
                { "text-black bg-white": unit !== "cm" }
              )}
              onClick={() => setUnit("cm")}
            >
              CM
            </button>
            <button
              className={cn(
                "font-medium py-0.5 px-[15px] text-sm border-2 border-black bg-black text-white",
                { "text-black bg-white": unit !== "in" }
              )}
              onClick={() => setUnit("in")}
            >
              IN
            </button>
            <Link
              href='#how-to-measure'
              className='ml-auto inline-block font-semibold underline sm:hidden'
            >
              How to measure?
            </Link>
          </div>

          <div className='max-w-full'>
            <table className='size-guide-table w-full table-auto'>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th className='hidden md:table-cell'>AU</th>
                  <th className='hidden md:table-cell'>US</th>
                  <th className='hidden md:table-cell'>UK</th>
                  <th className='hidden md:table-cell'>EU</th>
                  <th>BUST</th>
                  <th>WAIST</th>
                  <th>HIP</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuideData.map((size) => (
                  <tr
                    key={`size-guide-${size.size}`}
                    className='odd:bg-tableGray even:bg-white'
                  >
                    <td
                      key={`conv-chart-${size.size}`}
                      data-cell='size'
                      className='border border-tableBorder py-[10px] pr-[10px] text-sm first:border-r first:font-bold last:border-b last:border-r last:border-b-tableBorder md:border-none md:pl-5'
                    >
                      {size.size}
                    </td>
                    {Object.keys(getConversionChartbySize(size.size) ?? {}).map(
                      (conversionKey, index) =>
                        conversionKey === "size" ? null : (
                          <td
                            key={`conv-chart-${conversionKey}`}
                            data-cell={conversionKey}
                            data-cellindex={index}
                            className='hidden border-b border-b-tableBorder py-[10px] pl-5 pr-[10px] text-sm first:border-r first:font-bold last:border-b last:border-r last:border-b-tableBorder md:table-cell'
                          >
                            {
                              getConversionChartbySize(size.size)![
                                conversionKey as CChartKey
                              ]
                            }
                          </td>
                        )
                    )}
                    {Object.keys(size).map((key, index) =>
                      key === "size" ? null : (
                        <td
                          key={`size-guide-${key}`}
                          data-cellindex={index}
                          className='border-b border-b-tableBorder py-[10px] pl-5 pr-[10px] text-sm first:border-r first:font-bold last:border-b last:border-r last:border-b-tableBorder'
                        >
                          {convertToCurrentUnit(size[key as keyof typeof size])}
                          {unit}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='hidden xl:flex items-center justify-between md:justify-end'>
          <button
            className={cn(
              "font-medium py-0.5 px-[15px] text-sm border-2 border-black bg-black text-white",
              { "text-black bg-white": unit !== "cm" }
            )}
            onClick={() => setUnit("cm")}
          >
            CM
          </button>
          <button
            className={cn(
              "font-medium py-0.5 px-[15px] text-sm border-2 border-black bg-black text-white",
              { "text-black bg-white": unit !== "in" }
            )}
            onClick={() => setUnit("in")}
          >
            IN
          </button>
          <Link
            href='/general-sizing-chart#how-to-measure'
            className='ml-auto inline-block font-semibold underline sm:hidden'
          >
            How to measure?
          </Link>
        </div>
      </div>

      <p className='my-6 text-center text-sm md:hidden'>
        P.S. If you purchase two of the same item in different sizes and return
        one, we will glady refund you in full. Return postage for your return
        item is not reimbursed.
      </p>
    </div>
  );
}

export default SizeGuideTable;
