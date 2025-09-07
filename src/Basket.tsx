import React, { useEffect, useState } from "react";
// import styles
import "./styles/Basket.css";
// import components
import Footer from "./components/UI/footer/Footer";
import Header from "./components/UI/header/Header";
import BasketList from "./components/BasketList";
// import types
import { BasketItemType } from "./types";

function Basket() {

    const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);

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

    function itemIncrease(id: string): void {
        setBasketItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    function itemDecrease(id: string): void {
        setBasketItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity >= 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        )
    }

    function deleteItem(index: number): void {
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
