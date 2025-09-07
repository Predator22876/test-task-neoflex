import { useMemo } from "react";
import { ProductType } from "../../../types";

export const useCategorizedProducts = (products: ProductType[], categories: string[]): Record<string, ProductType[]> => {
    return useMemo(() => {
        const result: Record<string, ProductType[]> = {};

        categories.forEach((category => {
            result[category] = []
        }));

        products.forEach(item => {
            if (categories.includes(item.category)) {
                result[item.category].push(item)
            }
        });

        return result
    }, [products, categories])
}
