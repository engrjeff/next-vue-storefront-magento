"use client";
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
exports.ProductFilters = void 0;
const outline_1 = require("@heroicons/react/24/outline");
const Accordion = __importStar(require("@radix-ui/react-accordion"));
const navigation_1 = require("next/navigation");
const React = __importStar(require("react"));
// import CategoryFilter from "./CategoryFilter";
// import FilterCounter from "./FilterCounter";
// import PriceSlider from "./PriceSlider";
const RadioFilterButton_1 = require("./RadioFilterButton");
function FilterAccordionItem({ label, children, }) {
    return (<Accordion.Item value={label} className='border-b border-[#d9d9d9]'>
      <Accordion.Trigger className='group flex items-center justify-between pt-[14px] pb-[14px] w-full'>
        <span className='font-semibold uppercase text-[15px]'>{label}</span>
        <outline_1.ChevronRightIcon className='h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-90'/>
      </Accordion.Trigger>
      <Accordion.Content className='pb-[14px]'>{children}</Accordion.Content>
    </Accordion.Item>);
}
function ProductFilters(props) {
    const { filters, subcategories, rootCategory, priceRangeFilters } = props;
    const priceFilter = priceRangeFilters;
    const minPrice = priceFilter?.options
        ? priceFilter.options[0]?.value?.split("_")[0]
        : 0;
    const maxPrice = priceFilter?.options
        ? priceFilter.options[priceFilter.count - 1]?.value?.split("_")[1]
        : 0;
    const searchParams = (0, navigation_1.useSearchParams)();
    return (<div className='w-[215px] flex-shrink-0 hidden xl:block'>
      {/* <FilterCounter /> */}
      <Accordion.Root type='multiple' defaultValue={["Category"]} className='border-t border-[#d9d9d9]'>
        {/* {subcategories && subcategories.length > 0 ? (
          <FilterAccordionItem label='Category'>
            <CategoryFilter
              rootCategory={rootCategory}
              categoriesFilters={subcategories}
            />
          </FilterAccordionItem>
        ) : null} */}

        {filters
            ?.filter((f) => !["category_uid"].includes(f?.attribute_code))
            .map((filter) => {
            const hasOptions = filter && filter.count && filter.count > 0;
            if (!hasOptions)
                return null;
            // if (filter.attribute_code === "price") {
            //   return (
            //     <FilterAccordionItem
            //       key={`facet-filter-${priceFilter?.attribute_code}`}
            //       label={priceFilter?.label!}
            //     >
            //       <div className='px-[15px] pb-[15px]'>
            //         <PriceSlider
            //           defaultValue={[Number(minPrice), Number(maxPrice)]}
            //           min={Number(minPrice)}
            //           max={Number(maxPrice)}
            //           step={20}
            //           key={searchParams?.toString()}
            //         />
            //       </div>
            //     </FilterAccordionItem>
            //   );
            // }
            return (<FilterAccordionItem key={`facet-filter-${filter.attribute_code}`} label={filter.label}>
                <ul>
                  {filter.options?.map((option) => (<li key={`size-filter-${option?.value}`}>
                      <RadioFilterButton_1.RadioFilterButton name={filter.attribute_code} label={option?.label} value={option?.value}/>
                    </li>))}
                </ul>
              </FilterAccordionItem>);
        })}
      </Accordion.Root>
    </div>);
}
exports.ProductFilters = ProductFilters;
