import React from 'react';
import s from './Body.modules.scss';
import Product from "../Product/Product";

const Body = (props) => {
    return (
        <div className={s.body}>
            <div className={s.titlechoose}></div>Выбрать велосипед
            <div className={s.products_wrapper}>
                <Product />
            </div>
        </div>
    )
}
export default Body;