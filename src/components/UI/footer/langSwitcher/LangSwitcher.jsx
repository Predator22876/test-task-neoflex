import { Link } from 'react-router-dom'
import s from './LangSwitcher.module.css'
import { useState } from 'react';


const LangSwitcher = () => {

    const [activeLang, setActiveLang] = useState('ru');

    return (
        <div className={s.langGroup}>
            <img src="./src/assets/Lang.svg" alt="Language" />
            <Link onClick={() => setActiveLang('ru')} className={`${s.langGroup__item} ${activeLang === 'ru' ? s.active : ''}`}>Рус</Link>
            <Link onClick={() => setActiveLang('en')} className={`${s.langGroup__item} ${activeLang === 'en' ? s.active : ''}`}>Eng</Link>
        </div>
    )
}

export default LangSwitcher