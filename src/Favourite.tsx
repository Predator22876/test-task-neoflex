import React, { useEffect, useState } from 'react'

// Создай кастомный хук useFetch: Он должен принимать URL, делать GET-запрос и возвращать кортеж [data, loading, error].

// Используй дженерик для типа данных: function useFetch<T>(url: string): [T | null, boolean, string | null]
// Внутри используй useState и useEffect.
// Типизируй всё правильно.
// Перепиши ProductList: Используй свой новый хук useFetch<IApiProduct[]>('https://fakestoreapi.com/products').

const Favourite = () => {

    interface ApiProduct {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number
        };
    }

    function useFetch<T>(url: string): [T | null, boolean, string | null] {
        const [products, setProducts] = useState<T | null>(null);
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);

        const fetchProducts = async (): Promise<T> => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Что-то пошло не так( Не удалось выполнить запрос к серверу')
            }
            const data = await response.json();
            return data
        }

        useEffect(() => {
            const getProducts = async () => {
                try {
                    setIsLoading(true);
                    const fetchedData = await fetchProducts();
                    setProducts(fetchedData);
                } catch (error) {
                    setError(error instanceof Error ? error.message : "Unknown error")
                } finally {
                    setIsLoading(false);
                }
            }

            getProducts();
        }, [])

        return [products, isLoading, error] as [typeof products, typeof isLoading, typeof error]
    }

    const [products, isLoading, error] = useFetch<ApiProduct[]>('https://fakestoreapi.com/products');

    if (isLoading) return <div>Идет загрузка....</div>
    if (error) return <div>{error}</div>
    if (!products) return <div>Данные не найдены</div>

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map(item =>
                <div style={{ margin: '30px', border: '2px solid teal', width: '633px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} key={item.id}>
                    <img style={{ width: '300px' }} src={item.image} alt={item.title} />
                    <h1 style={{ textAlign: 'center' }}>{item.title}</h1>
                    <h2>Цена: {item.price} рублей</h2>
                    <h3>Рейтинг: {item.rating.rate}</h3>
                    <h3>Описание: {item.description}</h3>
                </div>)}
        </div>
    )
}

export default Favourite