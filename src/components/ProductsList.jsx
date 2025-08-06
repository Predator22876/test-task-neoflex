import React from 'react'
import ProductItem from './ProductItem'
import s from './ProductsList.module.css'

const ProductsList = ({ products, title }) => {
    return (
        <div className={s.productList}>
            <h2 className={s.productList__title}>{title}</h2>
            <div className={s.productList__cards}>
                {products.map(item =>
                    <ProductItem key={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate} />
                )}
            </div>
        </div>
    )
}

export default ProductsList