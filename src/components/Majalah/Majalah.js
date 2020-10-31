import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './Majalah.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EFC501',
        },
    },
});

class Majalah extends React.Component{
    render() {
        return (
            <div className="majalah-component">
                <div className="title">
                    <h3>Majalah</h3>
                    <p>Majalah Mahitala Vol. 07</p>
                </div>
                <div className="content-container">
                    <div className="cover"/>
                    <div className="description">
                        <p>Dalam edisi ini kami akan berbagi cerita perjalanan 
                            Penelusuran Gua Matalawa di Surga Timur, beratnya medan 
                            pendakian Gunung Balease, arus Sungai Seblat yang belum 
                            terjamah, keindahan bawah laut Kepulauan Joronga dan 
                            Talaud, tingginya pemanjatan tebing di Gunung Fatuleu, 
                            hingga pesona indahnya alam dan kebudayaan Suku Aru.
                            <br/>
                            <br/>
                            Edisi ini juga menceritakan tentang pendakian dua gunung 
                            terakhir dan keberhasilan srikandi kami dalam menyelesaikan 
                            misi seven summits dan perjalanan anggota-anggota Mahitala 
                            lainnya.
                        </p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Online</h6>
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Majalah;