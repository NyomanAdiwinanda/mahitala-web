import React from 'react';
import NotesIcon from '@material-ui/icons/Notes';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LogoMahitala from './LogoMahitala.png';
import './Header.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
});

class Header extends React.Component {
    render() {
        return (
            <div className="header-component">
                <div className="menu">
                    <ThemeProvider theme={theme}>
                        <NotesIcon fontSize="large" color="primary" />
                    </ThemeProvider>
                </div>
                <img src={LogoMahitala} alt="Logo Mahitala" />
                <div className="search">
                    <ThemeProvider theme={theme}>
                        <SearchIcon fontSize="large" color="primary" />
                    </ThemeProvider>
                </div>
            </div>
        )
    }
}

export default Header;