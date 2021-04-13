import React from 'react';
import s from "../CallbackModal/CallbackModal.module.scss";
import {Button, ButtonGroup, FormControl, FormGroup, FormHelperText, Input, InputLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const CallbackModal = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ButtonGroup>
            <Button variant="text" color="primary" href="#callbackModal" type="button"
                    onClick={handleOpen}>
                Заказать обратный звонок
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <FormGroup className={s.callback}>
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
                                <FormHelperText id="my-helper-text">Для обратного звонка укажите Ваш номер телефона.</FormHelperText>
                            </FormControl>
                            <Button className={s.submit} variant="contained" color="primary" type="submit">Заказать звонок</Button>
                        </FormGroup>
                    </div>
                </Fade>
            </Modal>
        </ButtonGroup>
    )
};

export default CallbackModal;