import React, {useState, useEffect} from 'react';
import s from './Product.module.scss';
// import Charachters from "../Charachters/Charachters";
import bmw1 from "../../images/bmw1.png";
import bmw1_blue from "../../images/bmw1_blue.png";
import bmw2 from "../../images/bmw2.png";


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
            link: 'https://www.vedomosti.ru/auto/articles/2016/09/01/655355-bmw-cruise-m-bike'
        },
        {
            id: 2,
            about: mBikeChar,
            link: 'https://www.vedomosti.ru/auto/articles/2016/09/01/655355-bmw-cruise-m-bike'
        },
    ]

    const [char, changeChar] = useState(spec[0].about);
    const [price, changePrice] = useState(100000);
    const [color, changeColor] = useState(bmw1);

    // useEffect(() => {
    //     console.log('render');
    // });

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
                    <img src={color}/>
                    <div>
                        <button
                            onClick={() => {
                                changeColor(bmw1)
                            }}>серебристый
                        </button>
                        <button
                            onClick={() => {
                                changeColor(bmw1_blue)
                            }}>синий
                        </button>

                    </div>

                </button>

                <button
                    onClick={() => {
                        changeChar(spec[1].about);
                        changePrice(150000);
                    }}
                    className={s.pr_name}
                >
                    <h3>BMW M BIKE</h3>
                    <img src={bmw2}/>
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
        </div>
    );
}

const products = [
    {id: 1, name: 'BMW CRUISE BIKE', image: '../../images/bmw1.png'},
    {id: 2, name: 'BMW M BIKE', image: '../../images/bmw1_blue.png'},
];

export default Products;


