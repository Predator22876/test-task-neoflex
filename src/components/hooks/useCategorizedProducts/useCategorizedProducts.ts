import { useMemo } from "react";

export const useCategorizedProducts = (products, categories) => {
        return useMemo(() => {

            const result = {};

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