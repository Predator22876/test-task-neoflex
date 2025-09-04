export interface ProductType {
    id: string;
    img: string;
    title: string;
    price: number;
    rate: number;
    category: string;
}

export interface BasketItemType {
    id: string;
    img: string;
    title: string;
    price: number;
    rate: number;
    category: string;
    quantity: number;
}

export interface CatalogItemType {
    name: string;
    image: string;
    path: string;
}

export interface FilterType {
    searchQuery: string,
    sortMethod: string,
    groupBy: string
}

export type SortMethodsType = "title" | "rate" | "priceDown" | "priceUp"