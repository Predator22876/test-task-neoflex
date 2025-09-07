import React, { useState } from 'react';
// import styles
import s from './LangSwitcher.module.css';
// import components
import { Link } from 'react-router-dom';
// import IMGs
import lang from './../../../../assets/Lang.svg'

const LangSwitcher = () => {

    const [activeLang, setActiveLang] = useState('ru');

    return (
        <div className={s.langGroup}>
            <img src={lang} alt="Language" />
            <Link to='' onClick={() => setActiveLang('ru')} className={`${s.langGroup__item} ${activeLang === 'ru' ? s.active : ''}`}>Рус</Link>
            <Link to='' onClick={() => setActiveLang('en')} className={`${s.langGroup__item} ${activeLang === 'en' ? s.active : ''}`}>Eng</Link>
        </div>
    )
}

export default LangSwitcher;