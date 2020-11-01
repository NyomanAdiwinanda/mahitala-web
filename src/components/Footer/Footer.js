import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import LogoMahitala from '../Header/LogoMahitala.png';
import LogoUnpar from './LogoUnpar.png';
import './Footer.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
});

const useStyles = makeStyles({
    root: {
        marginRight: 10,
    },
    media: {
        float: "right",
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <div className="footer-component">
            <div className="address">
                <h6 className="mahitala">MAHITALA-UNPAR</h6>
                <h6>Jalan Ciumbuleuit No. 94, Bandung</h6>
            </div>
            <div className="find-us">
                <h6>Find us</h6>
                <ThemeProvider theme={theme}>
                    <FacebookIcon fontSize="large" color="primary" className={classes.root} />
                    <TwitterIcon fontSize="large" color="primary" className={classes.root} />
                    <InstagramIcon fontSize="large" color="primary" className={classes.root} />
                    <SubscriptionsIcon fontSize="large" color="primary" className={classes.root} />
                    <img src={LogoUnpar} className="unpar" alt="Logo Unpar" />
                    <img src={LogoMahitala} className={classes.media} alt="Logo Mahitala" />
                </ThemeProvider>
            </div>
            <div className="whitespace" />
        </div>
    )
}