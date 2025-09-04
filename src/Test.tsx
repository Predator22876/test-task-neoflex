import React from 'react'
import { TestFrom } from './TestFrom';

// Создай кастомный хук useFetch: Он должен принимать URL, делать GET-запрос и возвращать кортеж [data, loading, error].

// Используй дженерик для типа данных: function useFetch<T>(url: string): [T | null, boolean, string | null]
// Внутри используй useState и useEffect.
// Типизируй всё правильно.
// Перепиши ProductList: Используй свой новый хук useFetch<IApiProduct[]>('https://fakestoreapi.com/products').

export type IProduct = {
    id: number;
    title: string;
    price: number;
    inStock?: boolean;
}

interface TestPropType {
    items: IProduct[];
    total: number;
    onClear: () => void;
}

export const Test = ({ items, total, onClear }: TestPropType) => {
    return (
        <div>
            {items.map(item => <h1>{item.title}</h1>)}
            <p>Сумма: {total}</p>
            <button onClick={onClear}>Нажми меня</button>
            {/* <TestFrom /> */}
        </div>
    )
}
