import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.myHeader}>
            <h1 className={s.headerLogo}>QPICK</h1>
            <div className={s.headerLinks}>
                <img className={s.headerLinks__item} src="./src/assets/basket.svg" alt="Favourite products" />
                <img className={s.headerLinks__item} src="./src/assets/favourite.svg" alt="Basket products" />
            </div>
        </header>
    )
}

export default Header