import { useMemo } from "react";
import { ProductType } from "../../../types";

export const useCategories = (products: ProductType[]) => {
    const allUniqueCategories = useMemo(() => {
        const categories = new Set<string>();
        products.forEach(product => {
            categories.add(product.category);
        });
        return Array.from(categories);
    }, [products])
    return allUniqueCategories;
}