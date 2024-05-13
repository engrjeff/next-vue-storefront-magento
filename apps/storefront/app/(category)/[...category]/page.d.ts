/// <reference types="react" />
import { Metadata } from "next";
interface CategoryPageProps {
    params: {
        category: string[];
    };
    searchParams?: {
        [key: string]: string | string[];
    };
}
export declare function generateMetadata({ params, }: CategoryPageProps): Promise<Metadata>;
export default function CategoryPage({ params, searchParams, }: CategoryPageProps): Promise<import("react").JSX.Element>;
export {};
//# sourceMappingURL=page.d.ts.map