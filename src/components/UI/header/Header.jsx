import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll/useScroll';

import basket from './../../../assets/basket.svg'
import favourite from './../../../assets/favourite.svg'

const Header = ({ basketItems }) => {

    const isScrolled = useScroll(10)

    const countProducts = basketItems.reduce(
        (accum, item) => accum + item.quantity,
        0)

    return (
        <header className={`${s.myHeader} ${(isScrolled ? s.scrolled : '')}`}>
            <h1 className={s.headerLogo}>
                <Link style={{ textDecoration: 'none', color: 'var(--main-title-color)' }} to={'/'}>QPICK</Link>
            </h1>
            <div className={s.headerLinks}>
                <div className={s.headerLinks__group}>
                    <img className={s.headerLinks__item} src={basket} alt="Favourite products" />
                    <span className={s.headerLinks__item_count}>0</span>
                </div>
                <div className={s.headerLinks__group}>
                    <Link to={'/basket'}>
                        <img className={s.headerLinks__item} src={favourite} alt="Basket products" />
                        <span className={s.headerLinks__item_count}>{countProducts}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header