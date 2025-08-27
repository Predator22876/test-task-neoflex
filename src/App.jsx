import { useEffect, useMemo, useState } from 'react';
import { useCategorizedProducts } from './components/hooks/useCategorizedProducts/useCategorizedProducts';
import { Input, Select } from 'antd';
import ProductsList from './components/ProductsList';
import Footer from './components/UI/footer/Footer';
import Header from './components/UI/header/Header';
import './styles/App.css';

import airPods from './assets/AirPods.png';
import appleAirPods from './assets/Apple AirPods.png';
import appleBYZ from './assets/Apple BYZ S852I.png';
import earPods from './assets/Apple EarPods.png';
import borofone from './assets/BOROFONE BO4.png';
import herlax from './assets/HERLAX GH- 04.png';

function App() {

    const [earPhones] = useState([
        { id: '1', img: appleBYZ, title: 'Apple BYZ S852I', price: 2927, rate: 4.7, category: 'earphones' },
        { id: '2', img: earPods, title: 'Apple EarPods', price: 2327, rate: 4.5, category: 'earphones' },
        { id: '3', img: appleAirPods, title: 'Apple EarPods', price: 2327, rate: 4.5, category: 'earphones' },
        { id: '4', img: appleBYZ, title: 'Apple BYZ S852I', price: 2927, rate: 4.7, category: 'earphones' },
        { id: '5', img: earPods, title: 'Apple EarPods', price: 2327, rate: 4.5, category: 'earphones' },
        { id: '6', img: appleAirPods, title: 'Apple EarPods', price: 2327, rate: 4.5, category: 'earphones' },
        { id: '7', img: airPods, title: 'Apple AirPods', price: 9527, rate: 4.7, category: 'wireless' },
        { id: '8', img: herlax, title: 'GERLAX GH-04', price: 6527, rate: 4.7, category: 'wireless' },
        { id: '9', img: borofone, title: 'BOROFONE BO4', price: 7527, rate: 4.7, category: 'wireless' }
    ]);

    const [basketItems, setBasketItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortMethod, setSortMethod] = useState('');

    const searchedProducts = useMemo(() => {
        return [...earPhones].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [earPhones, searchQuery]);

    const sortedAndSearchedProducts = useMemo(() => {
        if (!sortMethod) return searchedProducts;

        const sorted = [...searchedProducts];

        if (sortMethod === 'title') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortMethod === 'rate') {
            sorted.sort((a, b) => b.rate - a.rate);
        }

        return sorted;
    }, [searchedProducts, sortMethod]);

    const category = useCategorizedProducts(sortedAndSearchedProducts, ['earphones', 'wireless'])

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
            <Select
                defaultValue='Сортировка'
                options={[
                    { label: 'по рейтингу', value: 'rate' },
                    { label: 'по названию', value: 'title' }
                ]}
                onChange={value => setSortMethod(value)}
                className={'mySelect'}
            />
            <ProductsList addBasket={addToBasket} title='Наушники' products={category.earphones} />
            <ProductsList addBasket={addToBasket} title='Беспроводные наушники' products={category.wireless} />
            <Footer />
        </div>
    )
}

export default App
