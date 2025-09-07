import React from 'react';
// import styles
import s from './ProductsList.module.css';
// import components
import ProductItem from './ProductItem';
import { ProductType } from '../types';

interface ProductsListProps {
    products: ProductType[];
    title: string;
    addBasket: (newItem: ProductType) => void;
}

const ProductsList = ({ products, title, addBasket }: ProductsListProps) => {

    return (
        <div className={s.productList}>
            <h2 className={s.productList__title}>{title}</h2>
            <div className={s.productList__cards}>
                {products.map((product, index) =>
                    <ProductItem key={index} addBasket={addBasket} product={product} />
                )}
            </div>
        </div>
    )
}

export default ProductsList