import { useEffect, useState } from "react";
import Footer from "./components/UI/footer/Footer";
import Header from "./components/UI/header/Header";
import BasketItem from "./components/BasketItem";
import "./styles/Basket.css";
import BasketList from "./components/BasketList";

function Basket() {

    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        const handlerStorageChange = () => {
            const savedBasket = sessionStorage.getItem('basketItems');
            if (savedBasket) {
                setBasketItems(JSON.parse(savedBasket));
            }
        };

        handlerStorageChange();

        window.addEventListener('storage', handlerStorageChange);

        return () => {
            window.removeEventListener('storage', handlerStorageChange);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('basketItems', JSON.stringify(basketItems));
    }, [basketItems])

    function itemIncrease(id) {
        setBasketItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    function itemDecrease(id) {
        setBasketItems(prev =>
            prev.map(item => 
                item.id === id
                    ? item.quantity === 1 ? null : { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(Boolean)
        )
    }

    function deleteItem(index) {
        const newBasket = [...basketItems];
        newBasket.splice(index, 1);
        setBasketItems(newBasket);
    }

    return (
        <div className='Basket'>
            <Header basketItems={basketItems} />
            <BasketList deleteItem={deleteItem} basketItems={basketItems} onIncrease={itemIncrease} onDecrease={itemDecrease} />
            <Footer />
        </div>
    )
}

export default Basket;
