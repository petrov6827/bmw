import React from 'react';
import s from './Product.module.scss';
import bmw1 from "../../images/bmw1.png";
import bmw1_blue from "../../images/bmw1_blue.png";
import bmw2 from "../../images/bmw2.png";
import Charachters from "../Charachters/Charachters";

const Product = (props) => {
    return (
        <div className={s.product}>
            <div className={s.product_name}>
                {vel.vel1.name}
            </div>
            <div className={s.product_image}>
                {vel.vel1.image}
            </div>
            <div className={s.product_char}>
                <Charachters />
            </div>
        </div>
    );
};

const vel = {
    vel1: [
        { id: 1, name: 'BMW CRUISE BIKE', image: 'bmw1' },
        { id: 2, name: 'BMW CRUISE BIKE', image: 'bmw1_blue' },
        { id: 3, name: 'BMW M BIKE', image: 'bmw2' },
    ],
}

// const vel = {
//     vel1: [
//         { id: 1, name: 'BMW CRUISE BIKE', image: 'bmw1' },
//         { id: 2, name: 'BMW CRUISE BIKE', image: 'bmw1_blue' },
//     ],
//     vel2: [
//         { id: 3, name: 'BMW M BIKE', image: 'bmw2' },
//     ]
// }

export default Product;

