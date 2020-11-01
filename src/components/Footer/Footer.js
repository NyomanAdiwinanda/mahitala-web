import React from 'react';
import { SocialIcon } from 'react-social-icons';
import LogoMahitala from '../Header/LogoMahitala.png';
import LogoUnpar from './LogoUnpar.png';
import './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className="footer-component">
                <div className="address">
                    <h6 className="mahitala">MAHITALA-UNPAR</h6>
                    <h6>Jalan Ciumbuleuit No. 94, Bandung</h6>
                </div>
                <div className="find-us">
                    <h6>Find us</h6>
                        <SocialIcon 
                            url="https://www.facebook.com/mahitala.unpar"
                            network="facebook"
                            style={{ height: 40, width: 40, marginRight: 5 }}
                            bgColor="#827B82"
                            fgColor="#FFFFFF"
                            target="_blank" 
                        />
                        <SocialIcon 
                            url="https://twitter.com/mahitalaunpar?lang=en"
                            network="twitter" 
                            style={{ height: 40, width: 40, marginRight: 5 }}
                            bgColor="#827B82"
                            fgColor="#FFFFFF"
                            target="_blank"
                        />
                        <SocialIcon 
                            url="https://www.instagram.com/mahitalaunpar/?hl=en"
                            network="instagram" 
                            style={{ height: 40, width: 40, marginRight: 5 }}
                            bgColor="#827B82"
                            fgColor="#FFFFFF"
                            target="_blank"
                        />
                        <SocialIcon 
                            url="https://www.youtube.com/channel/UCAtwNooKtGN3U6chd7fLrkg"
                            network="youtube" 
                            style={{ height: 40, width: 40, marginRight: 5 }}
                            bgColor="#827B82"
                            fgColor="#FFFFFF"
                            target="_blank"
                        />
                        <img src={LogoUnpar} className="unpar" alt="Logo Unpar" />
                        <img src={LogoMahitala} alt="Logo Mahitala" />
                </div>
                <div className="whitespace" />
            </div>
        )
    }
}

export default Footer;