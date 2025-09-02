import BasketItem from './BasketItem';
import s from './BasketList.module.css';

const BasketList = ({ basketItems, deleteItem, onIncrease, onDecrease }) => {

    const totalOrderSum = basketItems.reduce((acum, item) => acum + (item.quantity * item.price), 0)

    return (
        <div className={s.basketList}>
            <h2 style={{ marginTop: '30px', fontSize: '20px', fontWeight: '600' }}>Корзина</h2>
            {basketItems.length
                ?
                <div className={s.basketContent}>
                    <div>
                        {basketItems.map((item, index) =>
                            <BasketItem index={index} key={index + 1} deleteAll={deleteItem} item={item} onIncrease={onIncrease} onDecrease={onDecrease} />
                        )}
                    </div>
                    <div className={s.orderCard}>
                        <div className={s.orderInfo}>
                            <h3>Итого:</h3>
                            <h3>{totalOrderSum} ₽</h3>
                        </div>
                        <button className={s.orderButton}>Перейти к оформлению</button>
                    </div>
                </div>
                :
                <h3 style={{ marginTop: '150px', textAlign: 'center', fontSize: '30px' }}>Корзина пуста</h3>
            }
        </div>
    )
}

export default BasketList