import '../Styles/Footer.css';
import '../Styles/Menu.css';
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';




function Footer() {
    return (

        <div className="">
             <div className='footer'>
                <div className='footerb1'>
                    <img src='/images/logofooter.png'/>
                </div>
                <div className='footerb2'>
                    <h3>Menu</h3>
                    <div className='footerb2b1'>
                        <a href='bio'>Bio</a>
                        <a href='atelier'>Ateliers</a>
                        <a href='tarif'>Tarifs</a>
                        <a href='presse'>Presse</a>
                        <a href='contact'>Contact</a>
                    </div>

                    <div className='footerb2b2'>
                        <a>Mentions légales</a>
                        <a>CGV</a>
                    </div>
                </div>
                <div className='footerb3'>
                    <div className='footerb3b1'>
                        <h3>Contact</h3>
                        <p>Email</p>
                            <div className='socialfooter'>
                            <Link to="https://www.linkedin.com/in/beevy-jalma-11382b1b9/">
                            <img src='/images/linkedin.png'/>
                            </Link>
                            <Link to="https://www.facebook.com/latelierdebeevy">
                            <img src='/images/facebook.png'/>
                            </Link>
                            <Link to="https://www.instagram.com/ecriturecreative_beevy/">
                            <img src='/images/instagram.png'/>
                            </Link>
                            <Link to="/">
                            <img src='/images/youtube.png'/>
                            </Link>
                        </div>

                    </div>
                    <div className='footerb3b2'>
                        <h3>Crédits</h3>

                        <p>Webdesign : <a href='https://www.behance.net/helenelega4b4d'>Hélène Le Gal</a>
                        </p>
                        <p>Web developper : <a href='https://www.linkedin.com/in/l%C3%A9on-le-gal/'>Léon Le Gal</a></p>
                        <p>Photos : Beevy Jalma, Abdesslam Mirdass, <a href='https://ericolivier.myportfolio.com/accueil-1'>Eric Olivier</a></p>

                    </div>

                </div>
                

            </div>
        </div>

    );
}

export default Footer;