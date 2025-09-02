import React from 'react';
// import styles
import s from './CatalogItem.module.css';
// import components
import { Link } from 'react-router-dom';
// import types
import { CatalogItemType } from '../types';

interface CatalogItemProps {
    item: CatalogItemType;
}

export const CatalogItem = ({ item }: CatalogItemProps) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'var(--main-title-color)' }} to={item.path}>
            <div className={s.catalogItem}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
            </div>
        </Link>
    )
}
