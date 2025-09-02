import React, { useEffect, useState } from "react";
// import styles
import './styles/App.css';
// import IMGs
import EarphonesIMG from "./assets/earphones.jpg";
import KeyboardsIMG from "./assets/keyboards.png";
import MiceIMG from "./assets/mice.jpg";
import MonitorsIMG from "./assets/monitors.jpg";
import NotebooksIMG from "./assets/notebooks.jpg";
import CarpetsIMG from "./assets/mousecarpet.jpg";
import VideocardsIMG from "./assets/videocards.png";
// import components
import Footer from "./components/UI/footer/Footer";
import Header from "./components/UI/header/Header";
import Catalog from "./components/Catalog";
// import types
import { BasketItemType, CatalogItemType } from "./types";


const App: React.FC = () => {

    const catalogItems: CatalogItemType[] = [
        { name: 'Наушники', image: EarphonesIMG, path: '/earphones' },
        { name: 'Клавиатуры', image: KeyboardsIMG, path: '/keyboards' },
        { name: 'Мыши', image: MiceIMG, path: '/mice' },
        { name: 'Мониторы', image: MonitorsIMG, path: '/monitors' },
        { name: 'Ноутбуки', image: NotebooksIMG, path: '/notebooks' },
        { name: 'Ковры для мыши', image: CarpetsIMG, path: '/carpets' },
        { name: 'Видеокарты', image: VideocardsIMG, path: '/videocards' },
    ];

    const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);

    useEffect(() => {
        const savedBasket = sessionStorage.getItem('basketItems');
        if (savedBasket) {
            setBasketItems(JSON.parse(savedBasket))
        }
    }, [])

    return (
        <div className='AppContainer'>
            <Header basketItems={basketItems} />
            <Catalog catalogItems={catalogItems} />
            <Footer />
        </div>
    );
}

export default App;