import { ProductType, SortMethodsType } from './../../../types/index';
import { useMemo } from "react";

export type SortMethod = "title" | "rate" | "priceDown" | "priceUp";

export const useSearchedProducts = <T extends ProductType>(products: T[], searchQuery: string): T[] => {
    const searchedProducts = useMemo(() => {
        return [...products].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [products, searchQuery]);

    return searchedProducts;
}

export const useProducts = <T extends ProductType>(products: T[], searchQuery: string, sortMethod: SortMethodsType | ""): T[] => {
    const searchedProducts = useSearchedProducts(products, searchQuery);

    const sortedAndSearchedProducts = useMemo(() => {
        if (!sortMethod) return searchedProducts;

        const sortMethods: Record<SortMethod, (a: T, b: T) => number> = {
            title: (a, b) => a.title.localeCompare(b.title),
            rate: (a, b) => b.rate - a.rate,
            priceDown: (a, b) => b.price - a.price,
            priceUp: (a, b) => a.price - b.price
        }

        if (sortMethod in sortMethods) {
            return [...searchedProducts].sort(sortMethods[sortMethod as SortMethod]);
        }
        return searchedProducts;
    }, [searchedProducts, sortMethod]);
    
    return sortedAndSearchedProducts;
}
