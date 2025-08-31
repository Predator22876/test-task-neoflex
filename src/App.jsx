import { useEffect, useState } from "react";
import Footer from "./components/UI/footer/Footer";
import Header from "./components/UI/header/Header";
import Catalog from "./components/Catalog";
import './styles/App.css';

import EarphonesIMG from "./assets/earphones.jpg";
import KeyboardsIMG from "./assets/keyboards.png";
import MiceIMG from "./assets/mice.jpg";
import MonitorsIMG from "./assets/monitors.jpg";
import NotebooksIMG from "./assets/notebooks.jpg";
import CarpetsIMG from "./assets/mousecarpet.jpg";
import VideocardsIMG from "./assets/videocards.png";

const App = () => {
    
    const [catalogItems] = useState([
        { name: 'Наушники', image: EarphonesIMG, path: '/earphones' },
        { name: 'Клавиатуры', image: KeyboardsIMG, path: '' },
        { name: 'Мыши', image: MiceIMG, path: '' },
        { name: 'Мониторы', image: MonitorsIMG, path: '' },
        { name: 'Ноутбуки', image: NotebooksIMG, path: '' },
        { name: 'Ковры для мыши', image: CarpetsIMG, path: '' },
        { name: 'Видеокарты', image: VideocardsIMG, path: '' },
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