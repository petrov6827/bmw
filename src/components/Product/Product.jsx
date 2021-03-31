import React from 'react';
import s from './Product.module.scss';
import Charachters from "../Charachters/Charachters";
import bmw1 from "../../images/bmw1.png";
import bmw1_blue from "../../images/bmw1_blue.png";
import bmw2 from "../../images/bmw2.png";


const ProductList = (props) => {
    const product = (
        <div>
            <div className={s.pr}>
                {
                    props.products.map((product) =>
                        <button
                            onClick={(e) => this.showspec(product.id, e)}
                            // onClick={choosebike}
                            className={s.pr_name}
                            key={product.id}
                        >
                            <h3>{product.name}</h3>
                            <img src={product.image}/>
                        </button>
                    )}
            </div>

            <div>
                <Charachters spec={spec}/>
            </div>

        </div>
    );

    return (
        <div>
            {product}
            <hr/>
        </div>
    );
}

const spec = [
    {id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. ', year: '2020'},
    {id: 2, about: 'Велосипед BMW с полосами «M Motorsport»', year: '2021'},
]

export default ProductList;

// const vel = {
//     vel1: [
//         { id: 1, name: 'BMW CRUISE BIKE', image: 'bmw1' },
//         { id: 2, name: 'BMW CRUISE BIKE', image: 'bmw1_blue' },
//     ],
//     vel2: [
//         { id: 3, name: 'BMW M BIKE', image: 'bmw2' },
//     ]
// }


