import React, {useState} from 'react';
import s from './Buy.modules.scss';


const Buy = (props) => {

    const [buyform, showForm] = useState('1');
    const form = <form>
        <label>
            Имя:
            <input type="text" name="name" />
        </label>
        <label>
            Почта
            <input type="email" name="email" />
        </label>
        <input type="submit" value="Отправить" />
    </form>;

    return (
        <div className={s.buy}>
            <button
                onClick={() => {
                    showForm(form)
                }}
            >Заказать
            </button>
            {form}
        </div>
    )
}
export default Buy;