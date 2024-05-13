"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsListing = void 0;
const link_1 = __importDefault(require("next/link"));
const ProductItem_1 = require("./ProductItem");
function ProductsListing({ categoryUrl, products, }) {
    if (products?.length === 0)
        return (<div className='text-center'>
        <p className='font-semibold mb-1'>
          Sorry, there are no products found.
        </p>
        <link_1.default href={`/${categoryUrl}/`} className='text-[#bbb] underline hover:text-black'>
          Clear Filters
        </link_1.default>
      </div>);
    return (<>
      <ul className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-y-3 gap-x-1.5'>
        {products?.map((product, index) => (<li key={`product-${product?.uid}`}>
            <ProductItem_1.ProductItem product={product} index={index + 1}/>
          </li>))}
      </ul>
    </>);
}
exports.ProductsListing = ProductsListing;
