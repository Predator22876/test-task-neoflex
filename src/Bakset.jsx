import { useEffect, useState } from "react";
import Footer from "./components/UI/footer/Footer";
import Header from "./components/UI/header/Header";

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

    return (
        <div>
            <Header basketItems={basketItems} />
            <Footer />
        </div>
    )
}

export default Basket;
