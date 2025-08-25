import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import LangSwitcher from './langSwitcher/LangSwitcher';

import vk from './../../../assets/VK.svg'
import telegram from './../../../assets/Telegram.svg'
import whatsApp from './../../../assets/Whatsapp.svg'

const Footer = () => {
    return (
        <footer className={s.myFooter}>
            <h1 className={s.footerLogo}>
                <Link style={{ textDecoration: 'none', color: 'var(--main-title-color)' }} to={'/'}>QPICK</Link>
            </h1>
            <div className={s.footerLinks}>
                <div className={s.footerLinks__group1}>
                    <Link className={s.footerLinks__item}>Избранное</Link>
                    <Link to={'/basket'} className={s.footerLinks__item}>Корзина</Link>
                    <Link className={s.footerLinks__item}>Контакты</Link>
                </div>
                <div className={s.footerLinks__group2}>
                    <Link className={s.footerLinks__item}>Условия сервиса</Link>
                    <LangSwitcher />
                </div>
            </div>
            <div className={s.footerLinks__socials}>
                <img src={vk} alt="VK" />
                <img src={telegram} alt="Telegram" />
                <img src={whatsApp} alt="Whatsapp" />
            </div>
        </footer>
    )
}

export default Footer