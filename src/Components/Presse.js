import '../Styles/Presse.css';

import React from 'react';
import Bio from './Bio.js';
import Home from './Home.js';

function Presse() {
    return (

        <div className="pressebody">

            <div className='titrepresse'>
                <h1>Presse écrite</h1>
            </div>
            <div className='listeimagepress'>
                <img src='/images/bl4-01.png'/>
                <img src='/images/bl4-02.png'/>
                <img src='/images/bl4-03.png'/>
                <img src='/images/bl4-04.png'/>
                <img src='/images/bl4-05.png'/>
                <img src='/images/bl4-06.png'/>
            </div>

            <div className='titrepressedeux'>
                <h1>Télévision</h1>
            </div>
            <div className='pressbl1'>
                <img src='/images/pressbl1.png'/>
                <div className='pressbl1bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        16/10/2020
                        <br></br>
                        -
                        <br></br>
                        Un reportage de Sylvie Malal sur les ateliers d'écriture en EHPAD diffusé dans
                        le 19/20 de France 3 Alsace
                    </p>
                </div>
            </div>
            <div className='pressbl2'>
                <img src='/images/pressbl2.png'/>
                <div className='pressbl2bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        16/10/2020
                        <br></br>
                        -
                        <br></br>
                        Un reportage de Sylvie Malal sur les ateliers d'écriture en EHPAD diffusé dans
                        le 19/20 de France 3 Alsace
                    </p>
                </div>
            </div>

            <div className='titrepressetrois'>
                <h1>Radio</h1>
            </div>

            <div className='pressbl3'>
                <img src='/images/pressbl2.png'/>
                <div className='pressbl3bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        16/10/2020
                        <br></br>
                        -
                        <br></br>
                        Un reportage de Sylvie Malal sur les ateliers d'écriture en EHPAD diffusé dans
                        le 19/20 de France 3 Alsace
                    </p>
                </div>
            </div>


            <div className='footer'>
                <div className='footerb1'>
                    <img src='/images/logofooter.png'/>
                </div>
                <div className='footerb2'>
                    <h3>Menu</h3>
                    <div className='footerb2b1'>
                        <a>Bio</a>
                        <a>Ateliers</a>
                        <a>Tarifs</a>
                        <a>Presse</a>
                        <a>Contact</a>
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
                            <img src='/images/linkedin.png'/>
                            <img src='/images/facebook.png'/>
                            <img src='/images/instagram.png'/>
                            <img src='/images/youtube.png'/>
                        </div>

                    </div>
                    <div className='footerb3b2'>
                        <h3>Crédits</h3>

                        <p>Webdesign : Hélène Le Gal
                        </p>
                        <p>Web developper : Léon Le Gal</p>
                        <p>Photos : Beevy Jalma, Abdesslam Mirdass</p>

                    </div>

                </div>

            </div>
        </div>

    );
}

export default Presse;
