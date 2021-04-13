import React, {useState} from 'react';
import s from './Buy.module.scss';
import {Button, FormGroup, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';


import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#1c69d4',
//         },
//     },
// });


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
            <FormHelperText id="my-helper-text">Для оформления заказа укажите Ваш номер телефона.</FormHelperText>
        </FormControl>
        <Button className={s.submit} variant="contained" color="primary" type="submit" value="Отправить">Оставить
            заявку</Button>
    </FormGroup>

    return (
        <div className={s.buy}>

            {/*<ThemeProvider theme={theme}>*/}
                <Button variant="contained" color="primary"
                        onClick={() => {
                            showForm(buyForm)
                        }}
                >Заказать
                </Button>
            {/*</ThemeProvider>*/}
            {form}
        </div>


    )
}

export default Buy;