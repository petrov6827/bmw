import React from 'react';
import s from './Product.module.scss';
import bmw1 from "../../images/bmw1.png";

const Product = (props) => {
    return (
        <div className={s.product}>
            <div className={s.product_image}>
                <img src={bmw1} alt="bmw1" />
            </div>
        </div>
    );
};

export default Product;

