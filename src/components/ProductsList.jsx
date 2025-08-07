import React from 'react'
import ProductItem from './ProductItem'
import s from './ProductsList.module.css'

const ProductsList = ({ products, title, addBasket }) => {

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