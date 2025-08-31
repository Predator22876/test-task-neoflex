import { useMemo } from "react";

export const useSearchedProducts = (products, searchQuery) => {
    const searchedProducts = useMemo(() => {
        return [...products].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [products, searchQuery]);

    return searchedProducts;
}

export const useProducts = (products, searchQuery, sortMethod) => {
    const searchedProducts = useSearchedProducts(products, searchQuery);

    const sortedAndSearchedProducts = useMemo(() => {
        if (!sortMethod) return searchedProducts;

        const sortMethods = {
            title: (a, b) => a.title.localeCompare(b.title),
            rate: (a, b) => b.rate - a.rate,
            priceDown: (a, b) => b.price - a.price,
            priceUp: (a, b) => a.price - b.price
        }

        return [...searchedProducts].sort(sortMethods[sortMethod]);
    }, [searchedProducts, sortMethod]);

    return sortedAndSearchedProducts;
}