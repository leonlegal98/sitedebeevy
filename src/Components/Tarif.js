import React from 'react';
import '../Styles/Tarif.css'

function Tarifs() {
    return (
        <div>
            <div className='tarifbl1'>

                <div>
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
                            pour un groupe de 5 à 12 personnes
                        </p>
                        <p>*frais kilométriques en sus, hébergement, frais de repas.</p>
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
                        <p>Devis gratuit, sur simple demande</p>
                    </div>

                </div>
                <img src='/images/tarifimg1.png'/>

            </div>
            <div className='tarifbl2'>
                <div>
                    <h3>Événement</h3>
                    <p>Mariage, anniversaire, départ à la retraite... je propose <br></br>des ateliers créés
                        sur-mesure pour la personne de <br></br>votre choix.
                    </p>
                    <p>Demander un devis gratuit</p>
                </div>
                <div>
                    <h3>Bon cadeau</h3>
                    <p>Envie d'offrir une séance d'atelier d'écriture créative à <br></br> vos proches ? 
                    </p>
                    <p>Contactez-moi.</p>
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

export default Tarifs;
