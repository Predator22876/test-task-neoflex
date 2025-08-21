import BasketItem from './BasketItem';
import s from './BasketList.module.css';

const BasketList = ({ basketItems, deleteItem }) => {

    return (
        <div className={s.basketList}>
            <h2 style={{ marginTop: '30px', fontSize: '20px', fontWeight: '600' }}>Корзина</h2>
            {basketItems.length
                ? basketItems.map((item, index) =>
                    <BasketItem index={index} key={index + 1} deleteC={deleteItem} item={item} />)
                : <div className={s.emptyBasket}>
                    <h3 style={{ marginTop: '150px', textAlign: 'center', fontSize: '30px' }}>Корзина пуста</h3>
                </div>
            }
        </div>
    )
}

export default BasketList