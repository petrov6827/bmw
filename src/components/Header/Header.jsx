import React from 'react';
import s from './Header.module.scss';
import logo from "../../images/logo.svg";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src={logo} className={s.logoheader} alt="logo" />
            </div>
            <div className={s.header_link}> Оплата</div>
            <div className={s.header_link}> Доставка</div>
            <div className={s.header_link}> Контакты</div>
        </div>
    );
};


export default Header;

