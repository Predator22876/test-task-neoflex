import { useMemo } from "react";
import { ProductType } from "../../../types";

export const useCategorizedProducts = (products: ProductType[], allUniqueCategories: string[]): Record<string, ProductType[]> => {
    return useMemo(() => {
        const result: Record<string, ProductType[]> = {};

        allUniqueCategories.forEach((category => {
            result[category as string] = []
        }));

        products.forEach(item => {
            if (allUniqueCategories.includes(item.category)) {
                result[item.category].push(item)
            }
        });

        return result;
    }, [products])
}
