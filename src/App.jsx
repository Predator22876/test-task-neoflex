import './styles/App.css';
import { useEffect, useState } from 'react';
import Header from './components/UI/header/Header';
import ProductsList from './components/ProductsList';
import Footer from './components/UI/footer/Footer';

function App() {

    const [earPhones] = useState([
        { id: '1', img: './src/assets/Apple BYZ S852I.png', title: 'Apple BYZ S852I', price: '2927 ₽', rate: '4.7' },
        { id: '2', img: './src/assets/Apple EarPods.png', title: 'Apple EarPods', price: '2327 ₽', rate: '4.5' },
        { id: '3', img: './src/assets/Apple AirPods.png', title: 'Apple EarPods', price: '2327 ₽', rate: '4.5' },
        { id: '4', img: './src/assets/Apple BYZ S852I.png', title: 'Apple BYZ S852I', price: '2927 ₽', rate: '4.7' },
        { id: '5', img: './src/assets/Apple EarPods.png', title: 'Apple EarPods', price: '2327 ₽', rate: '4.5' },
        { id: '6', img: './src/assets/Apple AirPods.png', title: 'Apple EarPods', price: '2327 ₽', rate: '4.5' }
    ]);

    const [wirelessEarPhones] = useState([
        { id: '7', img: './src/assets/AirPods.png', title: 'Apple AirPods', price: '9527 ₽', rate: '4.7' },
        { id: '8', img: './src/assets/HERLAX GH- 04.png', title: 'GERLAX GH-04', price: '6527 ₽', rate: '4.7' },
        { id: '9', img: './src/assets/BOROFONE BO4.png', title: 'BOROFONE BO4', price: '7527 ₽', rate: '4.7' }
    ]);

    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        const savedBasket = sessionStorage.getItem('basketItems');
        if (savedBasket) {
            setBasketItems(JSON.parse(savedBasket));
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('basketItems', JSON.stringify(basketItems));
    }, [basketItems])

    function addToBasket(newItem) {
        setBasketItems(prev => [...prev, newItem])
    }

    return (
        <div className='App'>
            <Header basketItems={basketItems} />
            <ProductsList addBasket={addToBasket} title='Наушники' products={earPhones} />
            <ProductsList addBasket={addToBasket} title='Беспроводные наушники' products={wirelessEarPhones} />
            <Footer />
        </div>
    )
}

export default App
