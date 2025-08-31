import s from './CatalogItem.module.css';
import { Link } from 'react-router-dom';

export const CatalogItem = ({ item }) => {

    return (
        <Link style={{ textDecoration: 'none', color: 'var(--main-title-color)' }} to={item.path}>
            <div className={s.catalogItem}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
            </div>
        </Link>
    )
}
