// @ts-nocheck
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItem = exports.sortVariantsBySize = void 0;
const utils_1 = require("@/lib/utils");
const AddToCartButton_1 = require("./AddToCartButton");
const ProductImage_1 = require("./ProductImage");
const SizeBubble_1 = require("./SizeBubble");
const alphaSortA = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
const alphaSortB = ["XS/S", "S/M", "M/L", "L/XL"];
const alphaSortC = ["A", "B", "C", "D"];
function sortVariantsBySize(variants) {
    return variants?.sort((a, b) => {
        const sizeA = a?.attributes?.find((a) => a?.code === "size");
        const sizeB = b?.attributes?.find((a) => a?.code === "size");
        if (isNaN(sizeA.label) && isNaN(sizeB.label)) {
            let indexA = 0;
            let indexB = 0;
            if (alphaSortA.includes(sizeA.label) &&
                alphaSortA.includes(sizeB.label)) {
                indexA = alphaSortA.indexOf(sizeA.label);
                indexB = alphaSortA.indexOf(sizeB.label);
            }
            if (alphaSortB.includes(sizeA.label) &&
                alphaSortB.includes(sizeB.label)) {
                indexA = alphaSortB.indexOf(sizeA.label);
                indexB = alphaSortB.indexOf(sizeB.label);
            }
            if (alphaSortC.includes(sizeA.label) &&
                alphaSortC.includes(sizeB.label)) {
                indexA = alphaSortC.indexOf(sizeA.label);
                indexB = alphaSortC.indexOf(sizeB.label);
            }
            return indexA - indexB;
        }
        return sizeA.label - sizeB.label;
    });
}
exports.sortVariantsBySize = sortVariantsBySize;
function ProductItem({ product, index, }) {
    const isSameFinalAndRegPrice = product?.price_range?.minimum_price?.regular_price?.value ===
        product?.price_range?.minimum_price?.final_price?.value;
    const variantsInStock = product.variants?.filter((v) => v?.product?.stock_status === "IN_STOCK");
    const hasOneInStockVariant = variantsInStock?.length === 1;
    const shouldDisplayAddToCartBtn = hasOneInStockVariant
        ? ["NoSize", "OneSize"].includes(variantsInStock[0]?.attributes?.find((a) => a?.code === "size")?.label)
        : false;
    const varianstSortedBySize = sortVariantsBySize(product.variants);
    //   const getBrandLabel = (brandValue: any) => {
    //     const brand = filters
    //       ?.find((f) => f?.attribute_code === "brand")
    //       ?.options?.find((o) => String(o?.value) === String(brandValue));
    //     return brand ? brand.label : null;
    //   };
    return (<div className='w-full h-full relative flex flex-col'>
      <div className={(0, utils_1.cn)("absolute top-2 right-2 z-10")}>
        {/* <WishlistButton productSku={product.sku!} /> */}
      </div>
      <div className='relative mb-2'>
        <a href={`/${product.canonical_url}`}>
          <ProductImage_1.ProductImage imageSrc={product?.small_image?.url} alt={product?.small_image?.label}/>
          <span className='sr-only'>click here to view</span>
        </a>
      </div>
      <a href={`/${product.canonical_url}`} className='text-sm inline-block hover:underline text-center uppercase mb-1'>
        <span className='line-clamp-2 w-full'>{product?.name}</span>
      </a>
      {product.price_range?.minimum_price ? (<p className='text-center text-[15px] font-bold'>
          <span className={(0, utils_1.cn)("mr-3 text-black", {
                "line-through": !isSameFinalAndRegPrice,
            })}>
            £
            {product.price_range?.minimum_price?.regular_price?.value?.toFixed(2)}
          </span>
          {isSameFinalAndRegPrice ? null : (<span className='text-red-500'>
              £
              {product.price_range?.minimum_price?.final_price?.value?.toFixed(2)}
            </span>)}
        </p>) : null}
      {product?.products && product.products?.length > 1 ? (<div className='mb-0 flex items-center justify-center text-[13px] min-h-[18px] max-h-[22px] text-center text-[#8c8c8c] leading-none'>
          <span className='text-lg font-medium mr-1'>+</span> More Colours
        </div>) : null}
      <div className={(0, utils_1.cn)("flex items-center justify-center gap-1.5 flex-wrap", product.variants?.length === 1 ? "mt-auto" : "mt-2")}>
        {variantsInStock?.length === 1 && shouldDisplayAddToCartBtn ? (<AddToCartButton_1.AddToCartButton product={product} variant={variantsInStock[0]}/>) : (varianstSortedBySize?.map((variant) => (<SizeBubble_1.SizeBubble key={`size-${variant?.product?.uid}`} product={product} variant={variant}/>)))}
      </div>
    </div>);
}
exports.ProductItem = ProductItem;
