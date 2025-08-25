import React from 'react'
import s from './ProductItem.module.css'

const ProductItem = ({ addBasket, product }) => {

    function addItem() {
        const newItem = {
            ...product,
        }
        addBasket(newItem);
    }

    return (
        <div className={s.productCard}>
            <div>
                <img style={{ height: '237px', width: '237px' }} src={product.img} alt={product.title} />
            </div>
            <div className={s.productInfo}>
                <div className={s.productInfo__top}>
                    <h3 style={{ fontSize: '17px', fontWeight: '600' }}>{product.title}</h3>
                    <p style={{ fontSize: '17px', fontWeight: '600', color: 'var(--main-accent-color)' }}>{product.price} ₽</p>
                </div>
                <div className={s.productInfo__bottom}>
                    <div className={s.productInfo__botom_rating}>
                        <img src="/src/assets/starRate.svg" alt="Rating" />
                        <p style={{ fontSize: '17px', fontWeight: '600', color: '#838383' }}>{product.rate}</p>
                    </div>
                    <button onClick={addItem} className={s.buyButton}>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem