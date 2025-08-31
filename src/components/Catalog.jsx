import { CatalogItem } from "./CatalogItem";
import s from './Catalog.module.css'

const Catalog = ({ catalogItems }) => {
    return (
        <div className={s.catalog}>
            <h2>Каталог товаров</h2>
            <div className={s.catalogList}>
                {catalogItems.map(item =>
                    <CatalogItem item={item} />
                )}
            </div>
        </div>
    )
}

export default Catalog