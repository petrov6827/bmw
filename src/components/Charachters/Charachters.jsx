import React from 'react';
import s from './Char.module.scss';


const Charachters = (props) => {
    return (
        <div className={s.product}>
            <div className={s.char}>
                {Char.about}
            </div>
            <div className={s.char}>
                {Char.year}
            </div>
        </div>
    );
};

const Char = {
    about: 'Велосипед BMW Cruise из коллекции 2019 года. Разработанный в сотрудничестве с компанией Designworks изящный дизайн рамы соответствует моде на велосипеды-фиксы. Оснащён удобной планетарной передачей, преимуществами которой являются простота технического обслуживания и износоустойчивость. Спортивные грипсы для более надежного захвата. Гидравлические дисковые тормоза спереди и сзади.',
    year: '2020'
}

export default Charachters;

