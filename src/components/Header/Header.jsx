import React from 'react';
import s from './Header.module.scss';
import logo from "../../images/BMW_Grey_Logo.svg";
import {Button, ButtonGroup, FormControl, FormGroup, FormHelperText, Input, InputLabel, Link} from "@material-ui/core";
import { createMuiTheme, makeStyles  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CallbackModal from "../CallbackModal/CallbackModal";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c69d4',
        },
    }
});


const Header = (props) => {
    return (
        <div className={s.header}>
            <ThemeProvider theme={theme}>
            <div className={s.header_left}>
                <img src={logo} className={s.logoheader} alt="logo"/>
                <Link href="tel:+79191231212" color="primary">
                    {/*<img src={} alt="tel"/>*/}
                    +7 919 123 12 12
                </Link>
            </div>
                <CallbackModal />
            </ThemeProvider>
        </div>
    );
};

export default Header;

