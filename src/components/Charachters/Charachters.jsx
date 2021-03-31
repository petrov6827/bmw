import React from 'react';
import s from './Char.module.scss';


const Charachters = (props) => {
    const productSpec = (
        <div>
            {props.spec.map((spec) =>
                <div
                    className = {s.spec}
                    key = {spec.id}
                >
                    <p>{spec.about}</p>
                    <b>{spec.year}</b>

                </div>
            )}
        </div>
    );

    return (
        <div>
            {productSpec}
        </div>
    );
};


export default Charachters;

