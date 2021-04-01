import React from 'react';
import s from './Char.module.scss';


const Charachters = (props) => {
    const productSpec = (
        <div className = {s.spec}
             key = {spec[0].id}>
            <p>id: {spec[0].id}</p>
            <p>{spec[0].about}</p>
            <b>{spec[0].year}</b>
        </div>
    );

    return (
        <div>
            {productSpec}
        </div>
    );
};

const spec = [
    {id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. ', year: '2020'},
    {id: 2, about: 'Велосипед BMW с полосами «M Motorsport»', year: '2021'},
]


export default Charachters;

