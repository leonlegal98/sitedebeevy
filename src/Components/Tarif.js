import React, {useRef, useState} from 'react';
import '../Styles/Tarif.css'
import Footer from './Footer';
import soundtarif from '../sonTarif/cartonvert.mp3'

function Tarifs() {
    const [audio] = useState(new Audio(soundtarif));
    const tarifplaysound = () => {
        audio.play();
    };
    return (
        <div>
            <div className='tarifbl1'>

                <div className='tarifblocleft'>
                    <div className='tarifparticulier'>

                        <h3>
                            Tarifs particuliers
                        </h3>
                        <div className='particuliernametarif'>
                            <p>Atelier en journée entière</p>
                            <p>Atelier en demi-journée</p>
                        </div>
                        <div className='particulierprice'>
                            <h3>
                                105€
                            </h3>
                            <h3>
                                55€
                            </h3>
                        </div>
                    </div>
                    <div className='tarifpro'>

                        <h3>
                            Tarifs pro
                        </h3>
                        <p>Les tarifs varient en fonction de la commande et du lieu* <br></br> Exemple de tarifs
                            pour un groupe de 5 à 12 personnes <br></br>
                            <span className='kilometriques'>*frais kilométriques en sus, hébergement, frais de repas.</span>
                        </p>
                    
                        <div className='pronametarif'>
                            <p>Atelier de 2h à partir de</p>
                            <p>Atelier de 3h à partir de</p>
                        </div>
                        <div className='proprice'>
                            <h3>
                                395€
                            </h3>
                            <h3>
                                575€
                            </h3>
                        </div>
                        <p><a className='devisgratuit' href='contact'>Devis gratuit</a>, sur simple demande</p>
                    </div>

                </div>
                <img className='imagetarifb1' src='/images/tarifimg1.png' onClick={tarifplaysound}
                        style={{
                        cursor: 'pointer'
                    }}/>

            </div>
            <div className='tarifbl2'>
                <div>
                    <h3>Événement</h3>
                    <p>Mariage, anniversaire, départ à la retraite... je propose <br></br>des ateliers créés
                        sur-mesure pour la personne de <br></br>votre choix.
                    </p>
                   <a className='lientarif' href='contact'>Demandez un devis gratuit</a>
                </div>
                <div>
                    <h3>Bon cadeau</h3>
                    <p>Envie d'offrir une séance d'atelier d'écriture créative à <br></br> vos proches ? 
                    </p>
                    <a className='lientarif' href='contact'>Contactez-moi.</a>
                </div>

            </div>

           
            <Footer/>
        </div>
    );
}

export default Tarifs;
