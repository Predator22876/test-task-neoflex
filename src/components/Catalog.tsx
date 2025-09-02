import React from "react";
// import styles
import s from './Catalog.module.css';
// import components
import { CatalogItem } from "./CatalogItem";
// import types
import { CatalogItemType } from "../types";

interface CatalogProps {
    catalogItems: CatalogItemType[];
}

const Catalog = ({ catalogItems }: CatalogProps) => {
    return (
        <div className={s.catalog}>
            <h2>Каталог товаров</h2>
            <div className={s.catalogList}>
                {catalogItems.map(item =>
                    <CatalogItem key={item.path} item={item} />
                )}
            </div>
        </div>
    )
}

export default Catalog;