import { useEffect, useState } from 'react';
import { useCategorizedProducts } from './components/hooks/useCategorizedProducts/useCategorizedProducts';
import { Input } from 'antd';
import { Filters } from './components/Filters';
import ProductsList from './components/ProductsList';
import Footer from './components/UI/footer/Footer';
import Header from './components/UI/header/Header';
import './styles/Earphones.css';

// import of images
import airPods from './assets/AirPods.png';
import appleAirPods from './assets/Apple AirPods.png';
import appleBYZ from './assets/Apple BYZ S852I.png';
import earPods from './assets/Apple EarPods.png';
import borofone from './assets/BOROFONE BO4.png';
import herlax from './assets/HERLAX GH- 04.png';
import { useProducts } from './components/hooks/useProducts/useProducts';

function Earphones() {

    const [products] = useState([
        { id: '1', img: appleBYZ, title: 'Apple BYZ S852I', price: 6789, rate: 4.3, category: 'earphones' },
        { id: '2', img: earPods, title: 'Apple EarPods', price: 4248, rate: 4.5, category: 'earphones' },
        { id: '3', img: appleAirPods, title: 'Apple EarPods', price: 8853, rate: 4.5, category: 'earphones' },
        { id: '4', img: appleBYZ, title: 'Apple BYZ S852I', price: 1813, rate: 4.6, category: 'earphones' },
        { id: '5', img: earPods, title: 'Apple EarPods', price: 3200, rate: 4, category: 'earphones' },
        { id: '6', img: appleAirPods, title: 'Apple EarPods', price: 2327, rate: 4, category: 'earphones' },
        { id: '7', img: airPods, title: 'Apple AirPods', price: 9527, rate: 5, category: 'wireless' },
        { id: '8', img: herlax, title: 'GERLAX GH-04', price: 6527, rate: 3.8, category: 'wireless' },
        { id: '9', img: borofone, title: 'BOROFONE BO4', price: 7527, rate: 4.1, category: 'wireless' }
    ]);

    // states 
    const [basketItems, setBasketItems] = useState([]);
    const [filter, setFilter] = useState({ searchQuery: '', sortMethod: '', groupBy: '' });
    // ------------------------------------------------------------------------

    // filters and search
    const sortedAndSearchedProducts = useProducts(products, filter.searchQuery, filter.sortMethod);
    const category = useCategorizedProducts(sortedAndSearchedProducts, ['earphones', 'wireless'])
    // --------------------------------------------------------------------------------------------

    // actions with localStorage
    useEffect(() => {
        const savedBasket = sessionStorage.getItem('basketItems');
        if (savedBasket) {
            setBasketItems(JSON.parse(savedBasket));
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('basketItems', JSON.stringify(basketItems));
    }, [basketItems]);
    // ----------------------------------------------------------------------------

    function addToBasket(newItem) {
        setBasketItems(prev => {
            const existingItem = prev.find(item => item.id === newItem.id)
            if (existingItem) {
                return prev.map((item) => {
                    return item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                });
            }
            return [...prev, { ...newItem, quantity: 1 }];
        });
    }

    return (
        <div className='Earphones'>
            <Header basketItems={basketItems} />
            <Input onChange={e => setFilter({ ...filter, searchQuery: e.target.value })}
                value={filter.searchQuery}
                className='myInput'
                placeholder='Поиск...'
                variant='underlined'
            />
            <Filters filter={filter} setFilter={setFilter} />
            
            {filter.groupBy === 'category'
                ?
                <>
                    <ProductsList addBasket={addToBasket} title='Наушники' products={category.earphones} />
                    <ProductsList addBasket={addToBasket} title='Беспроводные наушники' products={category.wireless} />
                </>
                :
                <>
                    <ProductsList addBasket={addToBasket} title='Наушники' products={sortedAndSearchedProducts} />
                </>
            }

            <Footer />
        </div>
    )
}

export default Earphones;

// import { Filters } from './components/Filters';
{/* <Filters onClick={() => setVisible(true)} visible={visible} setVisible={setVisible} setFilter={setFilter} filter={filter} /> */ }