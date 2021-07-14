import React from 'react';
import s from './Delivery.module.scss';

const Delivery = () => {
    return <div className={s.del}>
        <div className={s.subtitle}><h3>Оплата и доставка:</h3></div>
        <div className={s.text}>
            Доставка по России (Заказы отправляются после 100% предоплаты):<br/>
            <ul>
                <li>- Транспортной компанией</li>
                <li>- Почтой России</li>
                <li>- Курьерской службой доставки СДЭК</li>
            </ul>
        </div>
    </div>
};

export default Delivery;
