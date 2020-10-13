import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import caving from './caving.jpg';
import climbing from './climbing.jpg';
import diving from './diving.JPG';
import mountaineering from './mountaineering.jpg';
import pmt from './pmt.jpg';
import rafting from './rafting.JPG';
import './Featured.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EFC501',
        },
    },
});

class Featured extends React.Component {
    render() {
        return (
            <div className="featured-component">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider"
                        src={climbing}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Ekspedisi Pemanjatan Tebing Tontonan</h3>
                        <p>Wandering Season 2013</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Story</h6>
                            </Button>
                        </ThemeProvider>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider"
                        src={caving}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Ekspedisi Penelusuran Gua Tn. Aketajawe Lolobata</h3>
                        <p>Wandering Season 2019</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Story</h6>
                            </Button>
                        </ThemeProvider>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider"
                        src={mountaineering}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Ekspedisi Pendakian Gunung Sibela</h3>
                        <p>Wandering Season 2015</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Story</h6>
                            </Button>
                        </ThemeProvider>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider"
                        src={rafting}
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <h3>Ekspedisi Pengarutan Sungai Bongka</h3>
                        <p>Wandering Season 2014</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Story</h6>
                            </Button>
                        </ThemeProvider>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider"
                        src={diving}
                        alt="Fifth slide"
                        />
                        <Carousel.Caption>
                        <h3>Ekspedisi Penyelaman Laut Labengki</h3>
                        <p>Wandering Season 2014</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Story</h6>
                            </Button>
                        </ThemeProvider>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider"
                        src={pmt}
                        alt="Sixth slide"
                        />
                        <Carousel.Caption>
                        <h3>Ekspedisi Pengamatan Masyarakat Tradisional Suku Nuaulu</h3>
                        <p>Wandering Season 2016</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                <h6>Read Story</h6>
                            </Button>
                        </ThemeProvider>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Featured;