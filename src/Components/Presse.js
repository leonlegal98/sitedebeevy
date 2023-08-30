import '../Styles/Presse.css';

import React from 'react';
import Bio from './Bio.js';
import Home from './Home.js';
import Footer from './Footer';

function Presse() {
    return (

        <div className="pressebody">

            <div className='titrepresse'>
                <h1>Presse écrite</h1>
            </div>
            <div className='listeimagepress'>
                <img src='/images/1.png'/>
                <img src='/images/2.png'/>
                <img src='/images/3.png'/>
                <img src='/images/4.png'/>
                <img src='/images/5.png'/>
                <img src='/images/6.png'/>
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
                        <span>16/10/2020</span>
                        <br></br>
                        -
                        <br></br>
                        Un reportage de Sylvie Malal sur les ateliers d'écriture en EHPAD diffusé dans
                        le 19/20 de France 3 Alsace
                    </p>
                </div>
            </div>
            <div className='pressbl2'>
                <img src='/images/press-02.png'/>
                <div className='pressbl2bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>16/10/2020</span>
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
                <img src='/images/press-03.png'/>
                <div className='pressbl3bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>16/10/2020</span>
                        <br></br>
                        -
                        <br></br>
                        Un reportage de Sylvie Malal sur les ateliers d'écriture en EHPAD diffusé dans
                        le 19/20 de France 3 Alsace
                    </p>
                </div>
            </div>


            <Footer/>
        </div>

    );
}

export default Presse;
