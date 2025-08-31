import { useEffect, useState } from "react";
import Footer from "./components/UI/footer/Footer";
import Header from "./components/UI/header/Header";
import Catalog from "./components/Catalog";
import './styles/App.css';

const App = () => {
    
    const [catalogItems] = useState([
        { name: 'Наушники', image: '/src/assets/earphones.jpg', path: '/earphones' },
        { name: 'Клавиатуры', image: '/src/assets/keyboards.png', path: '' },
        { name: 'Мыши', image: '/src/assets/mice.jpg', path: '' },
        { name: 'Мониторы', image: '/src/assets/monitors.jpg', path: '' },
        { name: 'Ноутбуки', image: '/src/assets/notebooks.jpg', path: '' },
        { name: 'Ковры для мыши', image: '/src/assets/mousecarpet.jpg', path: '' },
        { name: 'Видеокарты', image: '/src/assets/videocards.png', path: '' },
    ]);

    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        const savedBasket = sessionStorage.getItem('basketItems');
        if (savedBasket) {
            setBasketItems(JSON.parse(savedBasket))
        }
    }, [])

    return (
        <div className='Catalog'>
            <Header basketItems={basketItems} />
            <Catalog catalogItems={catalogItems} />
            <Footer />
        </div>
    );
}

export default App;