import React from 'react'
import ProductsList from './ProductsList';
import { FilterType, ProductType } from '../types';

interface ProductContentPropsType {
    filter: FilterType;
    allUniqueCategories: string[];
    categorizedProducts: Record<string, ProductType[]>;
    addToBasket: (newItem: ProductType) => void;
    sortedAndSearchedProducts: ProductType[];
}

export const ProductContent = ({ filter, allUniqueCategories, categorizedProducts, addToBasket, sortedAndSearchedProducts }: ProductContentPropsType) => {
    return (
        <>
            {
                filter.groupBy === 'category'
                    ?
                    [...allUniqueCategories].map(category => {
                        const categoryProducts = categorizedProducts[category];
                        const subCategoryTitle = categoryProducts[0].subCategoryTitle;

                        return (
                            <ProductsList addBasket={addToBasket} title={subCategoryTitle} products={categoryProducts} />
                        );
                    })
                    :
                    <ProductsList addBasket={addToBasket} title={'Наушники'} products={sortedAndSearchedProducts} />
            }
        </>
    )
}
