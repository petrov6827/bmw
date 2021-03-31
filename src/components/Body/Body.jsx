import React from 'react';
import s from './Body.modules.scss';
import Product from "../Product/Product";
import bmw1 from "../../images/bmw1.png";
import bmw1_blue from "../../images/bmw1_blue.png";
import bmw2 from "../../images/bmw2.png";

const Body = (props) => {
    const vel = {
        vel1: [
            { id: 1, name: 'BMW CRUISE BIKE', image: 'bmw1' },
            { id: 2, name: 'BMW CRUISE BIKE', image: 'bmw1_blue' },
            { id: 3, name: 'BMW M BIKE', image: 'bmw2' },
        ],
    }

    // let products = vel.vel1.map((pr) => (
    //     <Product name={pr.name} image={pr.image} />
    // ))

    return (
        <div className={s.body}>
            <div className={s.titlechoose}>Выберите велик</div>
            <div className={s.products_wrapper}>
                <Product />
            </div>
        </div>
    )
}
export default Body;