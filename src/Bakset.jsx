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

    function deleteItem(index) {
        const newBasket = [...basketItems];
        newBasket.splice(index, 1);
        setBasketItems(newBasket);
        sessionStorage.setItem('basketItems', JSON.stringify(newBasket))
    }

    return (
        <div className='Basket'>
            <Header basketItems={basketItems} />
            <BasketList deleteItem={deleteItem} basketItems={basketItems} />
            <Footer />
        </div>
    )
}

export default Basket;
