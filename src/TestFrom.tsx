import React, { useState } from 'react'

// Домашнее задание №3 (Закрепление):
// Создай компонент ProductForm для добавления нового товара.

// Используй useState для полей формы: title (строка), price (строка, потом преобразуем в число), inStock (булево).
// Создай обработчик onChange для текстового поля (input), который будет обновлять состояние title. Не забудь правильно типизировать событие.
// Создай обработчик onSubmit для формы. Не забудь правильно типизировать событие и предотвратить действие по умолчанию.

// В обработчике onSubmit выведи в консоль объект нового товара (с id: Date.now(), title, price: Number(price) и inStock).

export const TestFrom = () => {
    interface FormType {
        title: string;
        price: number | string;
        inStock?: boolean;
    }

    function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, title: e.target.value })
    }
    function handleChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, price: e.target.value })
    }

    function onSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.log({...form, id: Date.now(), price: Number(form.price)});
    }

    const [form, setForm] = useState<FormType>({ title: '', price: '', inStock: false })

    return (
        <div style={{ marginTop: '20px' }}>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <input
                    style={{ height: '30px' }}
                    type="text"
                    onChange={handleChangeTitle}
                    placeholder='Введите название товара...'
                />
                <input
                    style={{ height: '30px' }}
                    type="text"
                    onChange={handleChangePrice}
                    placeholder='Введите цену товара...'
                />
                <button
                    style={{ height: '30px' }}
                    type='submit'
                >
                    Добавить товар
                </button>
            </form>
        </div>
    )
}
