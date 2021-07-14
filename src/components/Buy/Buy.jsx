import React, {useState} from 'react';
import s from './Buy.module.scss';
import {Button, FormGroup, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';

const Buy = (props) => {
    const [form, showForm] = useState();
    const buyForm = <FormGroup className={s.buyform}>
        <FormControl>
            <InputLabel htmlFor="name">Имя</InputLabel>
            <Input id="name" aria-describedby="my-helper-text"/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" aria-describedby="my-helper-text"/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="phone">Телефон</InputLabel>
            <Input id="phone" aria-describedby="my-helper-text"/>
            <FormHelperText id="my-helper-text"><p>&nbsp;</p></FormHelperText>
        </FormControl>
        <Button className={s.submit} variant="contained" color="primary" type="submit" value="Отправить">Оставить
            заявку</Button>
    </FormGroup>
    return (
        <div className={s.buy}>
                <Button variant="contained" color="primary"
                        onClick={() => {
                            showForm(buyForm)
                        }}
                >Заказать
                </Button>
            {form}
        </div>
    )
}

export default Buy;