import s from './BasketItem.module.css';

const BasketItem = ({ item, deleteC, index }) => {

    function deleteCard() {
        deleteC(index)
    }

    return (
        <div className={s.basketItemCard}>
            <div className={s.cardContent}>
                <div className={s.cardContent__top}>
                    <div className={s.cardContentInfo}>
                        <img style={{ width: '146px', height: '135px', display: 'flex', justifyContent: 'center' }} src={item.img} alt="Image" />
                        <div className={s.infoText}>
                            <h3 style={{ fontSize: '17px', fontWeight: '500' }}>{item.title}</h3>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#AAAAAA' }}>{item.price}</h4>
                        </div>
                    </div>
                    <button onClick={deleteCard} style={{ background: 'transparent', border: 'none', width: '30px', height: '30px', cursor: 'pointer' }}>
                        <img src="./src/assets/DeleteItem.svg" alt="Delete" />
                    </button>
                </div>
                <div className={s.cardContent__bottom}>
                    <div className={s.bottom_buttons}>
                        <button className={s.button}>+</button>
                        <span style={{ fontSize: '17px', fontWeight: '600' }}>1</span>
                        <button style={{ fontSize: '32px', paddingBottom: '4px', display: 'flex', alignItems: 'center' }} className={s.button}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem