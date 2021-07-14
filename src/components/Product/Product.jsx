import React, {useState} from 'react';
import s from './Product.module.scss';
import bmw1 from "../../images/bmw1.png";
import bmw1_blue from "../../images/bmw1_blue.png";
import bmw2 from "../../images/bmw2.png";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Button, ButtonGroup} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c69d4',
        },
    }
});

const Products = (props) => {

    const cruiseChar = <ul>
        <li>Рама: алюминий.</li>
        <li>Стойка седла и под рулевой вал выполнены из карбона.</li>
        <li>Вилка: SR Suntour XCRRL-R с дистанционной блокировкой жёсткости.</li>
        <li>Механизм переключения Shimano Deore/XT (30 передач).</li>
        <li>Седло: Selle Royal Setta S1.</li>
        <li>Руль: Velo VLG-719 Round grips, эргономичные короткие спортивные ручки Herrmanns DD33.</li>
        <li>Ободья: Rodi Airline Plus, 28".</li>
        <li>Шины Continental Cruise CONTACT со вставками из кевлара и светоотражающими полосами.</li>
        <li>Тормоза: гидравлические дисковые Shimano BR-M395, диаметр дисков 180 мм. спереди и 160 мм. сзади.</li>
        <li>Масса: 14,8 кг.</li>
    </ul>

    const mBikeChar = <ul>
        <li>Рама: алюминий.</li>
        <li>Тормоза: Shimano 180 мм (передние), 160 мм (задние).</li>
        <li>Вилка: карбон.</li>
        <li>Седло: Selle Royal Mach 2, черное.</li>
        <li>Переключатель: Shimano SLX / XT, 11 скоростей (цепная передача).</li>
        <li>Шины: Continental Grand Sport Extra.</li>
        <li>Ободья: Rody Airline Corsa 28", черные.</li>
        <li>Грипсы: Ergon GE-1.</li>
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
                    }}
                >
                    <h3>BMW CRUISE BIKE</h3>
                    <img src={color} alt="M Cruise Bike"/>
                    <div className={s.btns_wrapper}>
                        <ButtonGroup className={s.btns_group}>
                            <Button variant="contained" color="default"
                                onClick={() => {
                                    changeColor(bmw1)
                                }}>серебристый
                            </Button>
                            <Button variant="contained" color="primary"
                                onClick={() => {
                                    changeColor(bmw1_blue)
                                }}>синий
                            </Button>
                        </ButtonGroup>
                    </div>
                </Button>


                <Button className={s.pr_btn} variant="outlined" color="primary"
                    onClick={() => {
                        changeChar(spec[1].about);
                        changePrice(150000);
                    }}
                >
                    <h3>BMW M BIKE</h3>
                    <img src={bmw2} alt="M Bike"/>
                </Button>
                </ThemeProvider>
            </div>

                <div className={s.ch}>
                    <div className={s.subtitle}>Характеристики:</div>
                    <div className={s.text}>{char}</div>
                    <div className={s.subtitle_price}>Цена: {price} руб.</div>
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


