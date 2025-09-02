import React from 'react';
import { Link } from 'react-router-dom';
// import styles
import s from './Header.module.css';
// import IMGs
import favourite from './../../../assets/favourite.svg';
import basket from './../../../assets/basket.svg';
// import components
import { useScroll } from '../../hooks/useScroll/useScroll';
// import types
import { BasketItemType } from '../../../types';


interface HeaderProps {
    basketItems: BasketItemType[];
}

const Header = ({ basketItems }: HeaderProps) => {
    const isScrolled: boolean = useScroll(10);

    const countProducts: number = basketItems.reduce(
        (accum, item) => accum + item.quantity,
        0
    );
    const countFavourites: number = 0;

    return (
        <header className={`${s.myHeader} ${(isScrolled ? s.scrolled : '')}`}>
            <h1 className={s.headerLogo}>
                <Link style={{ textDecoration: 'none', color: 'var(--main-title-color)' }} to={'/'}>QPICK</Link>
            </h1>
            <div className={s.headerLinks}>
                <div className={s.headerLinks__group}>
                    <Link to={'/favourite'}>
                        <img className={s.headerLinks__item} src={favourite} alt="Favourite products page" />
                        <span className={s.headerLinks__item_count}>{countFavourites}</span>
                    </Link>
                </div>
                <div className={s.headerLinks__group}>
                    <Link style={{ textDecoration: 'none', color: 'var(--main-title-color)' }} to={'/basket'}>
                        <img className={s.headerLinks__item} src={basket} alt="Basket page" />
                        <span className={s.headerLinks__item_count}>{countProducts}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;