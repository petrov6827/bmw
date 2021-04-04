import React, {useState} from 'react';
import s from './Char.module.scss';


const Charachters = (props) => {
    const [char, changeChar] = useState(spec[0].about);
    const [price, changePrice] = useState(100000);

    const productSpec = (
    <div>
        <div className={s.subtitle}>Характеристики:</div>
        <p>{char}</p>
        <div className={s.subtitle}>Цена: {price} руб.</div>
    </div>
    )

    return (
        <div>
            {productSpec}
        </div>
    );
};

const spec = [
    {id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. ', year: '2020'},
    {id: 2, about: 'Велосипед BMW с полосами «M Motorsport»', year: '2021'},
]


export default Charachters;

