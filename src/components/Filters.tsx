import React from "react"
// import components
import { Select } from "antd"
// import types
import { FilterType, SortMethodsType } from './../types/index';


interface FiltersProps {
    filter: FilterType;
    setFilter: (arg: FilterType) => void;
}

export const Filters = ({ setFilter, filter }: FiltersProps) => {
    return (
        <div className='filters'>
            <Select
                defaultValue='Сортировка'
                options={[
                    { label: 'По рейтингу', value: 'rate' },
                    { label: 'По названию', value: 'title' },
                    { label: 'Дешевле', value: 'priceUp' },
                    { label: 'Дороже', value: 'priceDown' },
                ]}
                onChange={value => setFilter({ ...filter, sortMethod: value as SortMethodsType })}
                className={'mySelect'}
            />
            <Select
                defaultValue='Группировка'
                options={[
                    { label: 'Отсутствует', value: '' },
                    { label: 'По категориям', value: 'category' },
                ]}
                onChange={value => setFilter({ ...filter, groupBy: value })}
                className={'mySelect'}
            />
        </div>
    )
}





































// import s from './Filters.module.css';
// import { Popover } from 'antd';
// import sortArrows from '/src/assets/sortArrows.png';
// import { useState } from 'react';

// export const Filters = ({ visible, setVisible, setFilter, filter }) => {

//     const sortOptions = [
//         { name: 'По рейтингу', value: 'rate' },
//         { name: 'По названию', value: 'title' },
//         { name: 'Дешевле', value: 'title' },
//         { name: 'Дороже', value: 'title' },
//     ]

//     const [selectedSort, setSelectedSort] = useState('Сортировка');
//     const [selectedGroupBy, setSelectedGroupBy] = useState('');

//     const sort = (
//         <>
//             {sortOptions.map((item) =>
//                 <div
//                     className={`${s.contentOption} ${selectedSort === item.name ? s.activeOption : ''}`}
//                     value={item.value}
//                     onClick={() => {
//                         setFilter({ ...filter, sortMethod: item.value });
//                         setSelectedSort(item.name);
//                         setVisible(false);
//                     }}>
//                     {item.name}
//                 </div>
//             )}
//         </>
//     )

//     const handleOpenChange = (newVisible) => {
//         setVisible(newVisible)
//     }

//     return (
//         <Popover
//             onOpenChange={handleOpenChange}
//             open={visible}
//             content={sort}
//             zIndex='50'
//             trigger='click'
//             placement='bottom'
//         >
//             <div className={`${s.filter} ${selectedSort !== 'Сортировка' ? s.active : ''} `}>
//                 <img
//                     src={sortArrows}
//                     alt="Сортировка"
//                 />
//                 {selectedSort}
//             </div>
//         </Popover>
//     )
// }
