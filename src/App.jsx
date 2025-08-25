import './styles/App.css';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/UI/header/Header';
import ProductsList from './components/ProductsList';
import Footer from './components/UI/footer/Footer';
import { Input } from 'antd'

function App() {

    const [earPhones] = useState([
        { id: '1', img: './src/assets/Apple BYZ S852I.png', title: 'Apple BYZ S852I', price: 2927, rate: '4.7', category: 'earphones' },
        { id: '2', img: './src/assets/Apple EarPods.png', title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '3', img: './src/assets/Apple AirPods.png', title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '4', img: './src/assets/Apple BYZ S852I.png', title: 'Apple BYZ S852I', price: 2927, rate: '4.7', category: 'earphones' },
        { id: '5', img: './src/assets/Apple EarPods.png', title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '6', img: './src/assets/Apple AirPods.png', title: 'Apple EarPods', price: 2327, rate: '4.5', category: 'earphones' },
        { id: '7', img: './src/assets/AirPods.png', title: 'Apple AirPods', price: 9527, rate: '4.7', category: 'wireless' },
        { id: '8', img: './src/assets/HERLAX GH- 04.png', title: 'GERLAX GH-04', price: 6527, rate: '4.7', category: 'wireless' },
        { id: '9', img: './src/assets/BOROFONE BO4.png', title: 'BOROFONE BO4', price: 7527, rate: '4.7', category: 'wireless' }
    ]);

    const [basketItems, setBasketItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const searchedProducts = useMemo(() => {
        return [...earPhones].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [earPhones, searchQuery])

    const wirelessProducts = useMemo( () => {
        return [...searchedProducts].filter(item => item.category === 'wireless')
    }, [searchedProducts])

    const earphonesProducts = useMemo( () => {
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
