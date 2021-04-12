import React from 'react';
import s from './Delivery.module.scss';

const Delivery = () => {
    return <div className={s.del}>
        <div className={s.subtitle}>Оплата и доставка:</div>
        <div className={s.text}>
            Доставка по России (Заказы отправляются после 100% предоплаты):<br/>
            - Транспортной компанией<br/>
            - Почтой России<br/>
            - Курьерской службой доставки СДЭК<br/>
        </div>
    </div>
};

export default Delivery;
