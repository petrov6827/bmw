import React from 'react';
import { useState } from 'react';
import s from "../CallbackModal/Callback.module.scss";
import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { send, init } from 'emailjs-com';
init("user_CfZFw9QkS0gi82qgU6JU5");

const schema = yup.object().shape({
    phone: yup.number().positive().integer().required(),
});

const Callback = (props) => {
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4, 4, 4),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (d) => {
        alert(JSON.stringify(d));
    }

    return (
        <>
            <Button variant="text" color="primary" href="#callbackModal" type="button"
                onClick={handleOpen}>
                Заказать обратный звонок
            </Button>
            <Modal
                aria-labelledby="CallbackModal-modal-title"
                aria-describedby="CallbackModal-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Fade in={open}>
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.paper} id="callbackForm" >
                        <div className={s.close_wrapper}><span className={s.close} onClick={handleClose}></span></div>
                        <FormGroup className={s.callback}>
                            <FormControl>
                                <InputLabel htmlFor="name">Имя</InputLabel>
                                <Input type="text" {...register("name")} id="name" aria-describedby="my-helper-text" autoFocus />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="phone">Телефон</InputLabel>
                                <Input type="text" {...register("phone", { required: true })} id="phone" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">&nbsp;{errors.phone?.type === 'required' && "Введите номер телефона"}</FormHelperText>
                            </FormControl>
                        </FormGroup>
                        <Button className={s.callback_submit} variant="contained" color="primary" type="submit">Заказать
                            звонок</Button>
                    </form>
                </Fade>
            </Modal>
        </>
    )
};

export default Callback;