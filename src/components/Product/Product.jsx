import React, {useState, useEffect} from 'react';
import s from './Product.module.scss';
// import Charachters from "../Charachters/Charachters";
import bmw1 from "../../images/bmw1.png";
import bmw1_blue from "../../images/bmw1_blue.png";
import bmw2 from "../../images/bmw2.png";




const Products = (props) => {
    const spec = [
        {id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. Планетарная передача Спортивные грипсы для более надежного захвата Гидравлические дисковые тормоза спереди и сзади', year: '2020'},
        {id: 2, about: 'Велосипед BMW с полосами «M Motorsport», ' +
                'Манетки Deore, ' +
            'Седло Selle Royal S1', year: '2021'},
    ]

    const [char, changeChar] = useState(spec[0].about);
    const [price, changePrice] = useState(100000);

    useEffect(() => {
        console.log('render');
    });

    const product = (
        <div>
            <div className={s.pr}>
                <button
                    onClick={() => {
                        changeChar(spec[0].about);
                        changePrice(100000);
                    }}
                    className={s.pr_name}
                >
                    <h3>BMW CRUISE BIKE</h3>
                    <img src={bmw1} />
                </button>
                <button
                    onClick={() => {
                        changeChar(spec[1].about);
                        changePrice(150000);
                    }}
                    className={s.pr_name}
                >
                    <h3>BMW M BIKE</h3>
                    <img src={bmw2} />
                </button>
            </div>
            <div className={s.ch}>
                <div className={s.subtitle}>Характеристики:</div>
                <p className={s.text}>{char}</p>
                <div className={s.subtitle}>Цена: {price} руб.</div>
            </div>
        </div>
    );

    return (
        <div>
            {product}
            <hr/>
        </div>
    );
}

const products = [
    {id: 1, name: 'BMW CRUISE BIKE', image: '../../images/bmw1.png'},
    {id: 2, name: 'BMW M BIKE', image: '../../images/bmw1_blue.png'},
];

export default Products;


