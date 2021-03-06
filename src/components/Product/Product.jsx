import React, {useState} from 'react';
import s from './Product.module.scss';
import bmw1 from "../../images/cruise-white.png";
import bmw1_blue from "../../images/cruise-blue.png";
import bmw2 from "../../images/m-bike.png";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Button, ButtonGroup} from "@material-ui/core";
import Buy from './../Buy/Buy';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c69d4',
        },
    }
});
const buy = <Buy />;
const Products = (props) => {

    const cruiseChar = <ul>
        <li>Рама: алюминий.</li>
        <li>Тормоза: гидравлические дисковые Shimano BR-M395 180 мм (передние), 160 мм (задние).</li>
        <li>Вилка: SR Suntour XCR RL-R с дистанционной блокировкой жёсткости.</li>
        <li>Седло: Selle Royal Setta S1.</li>
        <li>Стойка седла и под рулевой вал выполнены из карбона.</li>
        <li>Переключатель: Shimano Deore/XT (30 передач).</li>
        <li>Руль: Velo VLG-719 Round grips, эргономичные короткие спортивные ручки Herrmanns DD33.</li>
        <li>Ободья: Rodi Airline Plus, 28".</li>
        <li>Шины Continental Cruise CONTACT со вставками из кевлара и светоотражающими полосами.</li>
        <li>Масса: 14,8 кг.</li>
    </ul>
    const mBikeChar = <ul>
        <li>Рама: алюминий.</li>
        <li>Тормоза: гидравлические дисковые Shimano BR-M395 180 мм (передние), 160 мм (задние).</li>
        <li>Вилка: SR Suntour XCR RL-R с дистанционной блокировкой жёсткости.</li>
        <li>Седло: Selle Royal Mach 2, черное.</li>
        <li>Переключатель: Shimano SLX / XT, 11 скоростей (цепная передача).</li>
        <li>Грипсы: Ergon GE-1.</li>
        <li>Ободья: Rody Airline Corsa 28", черные.</li>
        <li>Шины: Continental Grand Sport Extra.</li>
        <li>Масса: 12,5 кг.</li>
    </ul>
    const spec = [
        {
            id: 1,
            about: cruiseChar,
            link: ''
        },
        {
            id: 2,
            about: mBikeChar,
            link: ''
        },
    ]

    const [char, changeChar] = useState(spec[0].about);
    const [price, changePrice] = useState(100000);
    const [color, changeColor] = useState(bmw1);
    const [image, changeColorMobile] = useState(bmw1);

    const product = (
        <div className={s.container}>
            <div className={s.title}><h1>Оригинальные велосипеды BMW в России</h1></div>
            <h3 className={s.subtitle_choose}>Выберите велосипед:</h3>
            <div className={s.pr}>
                <ThemeProvider theme={theme}>
                <Button className={s.pr_btn} variant="outlined" color="primary"
                    onClick={() => {
                        changeChar(spec[0].about);
                        changePrice(100000);
                        changeColorMobile(bmw1);
                    }}
                >
                    <h3>BMW CRUISE BIKE</h3>
                    <img src={color} alt="M Cruise Bike"/>
                    <div className={s.btns_wrapper}>
                        <ButtonGroup className={s.btns_group}>
                            <Button variant="contained" color="default"
                                onClick={() => {
                                    changeColor(bmw1);
                                    // changeColorMobile(bmw1);
                                }}>серебристый
                            </Button>
                            <Button variant="contained" color="primary"
                                onClick={() => {
                                    changeColor(bmw1_blue);
                                    // changeColorMobile(bmw1_blue);
                                }}>синий
                            </Button>
                        </ButtonGroup>
                    </div>
                </Button>


                <Button className={s.pr_btn} variant="outlined" color="primary"
                    onClick={() => {
                        changeChar(spec[1].about);
                        changePrice(150000);
                        changeColorMobile(bmw2);
                    }}
                >
                    <h3>BMW M BIKE</h3>
                    <img src={bmw2} alt="M Bike"/>
                </Button>
                </ThemeProvider>
                
            </div>
            <div className={s.bikeimage__mobile}><img src={image} alt=""/></div>

            <div className={s.ch}>
                <div className={s.ch_wrapper}>
                    <div className={s.subtitle}><h3>Характеристики:</h3></div>
                    <div className={s.text}>{char}</div>
                    <div className={s.subtitle_price}>Цена: {price} руб.</div>
                </div>
                <div className={s.buy_wrapper}>{buy}</div>
            </div>
        </div>
    );

    return (
        <div>
            {product}
        </div>
    );

}

export default Products;


