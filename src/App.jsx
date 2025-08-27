import './styles/App.css';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/UI/header/Header';
import ProductsList from './components/ProductsList';
import Footer from './components/UI/footer/Footer';
import { Input } from 'antd'

import appleBYZ from './assets/Apple BYZ S852I.png'
import earPods from './assets/Apple EarPods.png'
import appleAirPods from './assets/Apple AirPods.png'
import airPods from './assets/AirPods.png'
import herlax from './assets/HERLAX GH- 04.png'
import borofone from './assets/BOROFONE BO4.png'

function App() {

    const [earPhones] = useState([
        { id: '1', img: appleBYZ, title: 'Apple BYZ S852I', price: 2927, rate: '4.7', category: 'earphones' },
        { id: '2', img: earPods, title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '3', img: appleAirPods, title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '4', img: appleBYZ, title: 'Apple BYZ S852I', price: 2927, rate: '4.7', category: 'earphones' },
        { id: '5', img: earPods, title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '6', img: appleAirPods, title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '7', img: airPods, title: 'Apple AirPods', price: 9527, rate: '4.7', category: 'wireless' },
        { id: '8', img: herlax, title: 'GERLAX GH-04', price: 6527, rate: '4.7', category: 'wireless' },
        { id: '9', img: borofone, title: 'BOROFONE BO4', price: 7527, rate: '4.7', category: 'wireless' }
    ]);

    const [basketItems, setBasketItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    

    const searchedProducts = useMemo(() => {
        return [...earPhones].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [earPhones, searchQuery])

    const wirelessProducts = useMemo(() => {
        return [...searchedProducts].filter(item => item.category === 'wireless')
    }, [searchedProducts])

    const earphonesProducts = useMemo(() => {
        return [...searchedProducts].filter(item => item.category === 'earphones')
    }, [searchedProducts])

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
        setBasketItems(prev => {
            const existingItem = prev.find(item => item.id === newItem.id)
            if (existingItem) {
                return prev.map((item) => {
                    return item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                })
            }
            return [...prev, { ...newItem, quantity: 1 }]
        })
    }

    return (
        <div className='App'>
            <Header basketItems={basketItems} />
            <Input onChange={e => setSearchQuery(e.target.value)} value={searchQuery} className='myInput' placeholder='Поиск...' variant='underlined' />
            <ProductsList addBasket={addToBasket} title='Наушники' products={earphonesProducts} />
            <ProductsList addBasket={addToBasket} title='Беспроводные наушники' products={wirelessProducts} />
            <Footer />
        </div>
    )
}

export default App
