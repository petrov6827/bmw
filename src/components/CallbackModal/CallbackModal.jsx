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
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 4),
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
                aria-labelledby="CallbackModal-modal-title"
                aria-describedby="CallbackModal-modal-description"
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
                    <form action="/callback.php" method="get" className={classes.paper} id="callbackForm">
                        <FormGroup className={s.callback}>
                            <FormControl>
                                <InputLabel htmlFor="name">Имя</InputLabel>
                                <Input type="text" id="name" aria-describedby="my-helper-text"/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="phone">Телефон</InputLabel>
                                <Input type="text" id="phone" aria-describedby="my-helper-text"/>
                                <FormHelperText id="my-helper-text">Для обратного звонка укажите Ваш номер
                                    телефона.</FormHelperText>
                            </FormControl>

                        </FormGroup>
                        <Button className={s.submit} variant="contained" color="primary" type="submit">Заказать
                            звонок</Button>
                    </form>
                </Fade>
            </Modal>
        </ButtonGroup>
    )
};


export default CallbackModal;