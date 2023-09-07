import '../Styles/Presse.css';

import Bio from './Bio.js';
import Home from './Home.js';
import Footer from './Footer';
import React, {useRef, useState, useEffect} from 'react';

function Presse() {
    const [modalOpen,
        setModalOpen] = useState(false);
    const [selectedImage,
        setSelectedImage] = useState(null);

    const imageAssociations = {
        '/images/1.png': '/images/ArticlelAlsace_1.jpg',
        '/images/2.png': '/images/EhpadErstein_1.jpg',
        '/images/3.png': '/images/Eurometropole_1.jpg',
        '/images/4.png': '/images/BulletinHoenheim_1.jpg',
        '/images/5.png': '/images/page01_1.jpg',
        '/images/6.png': '/images/article_1.jpg',
        // Ajoutez ici les associations pour vos images
    };

    const handleImageClick = (image) => {
        setSelectedImage(imageAssociations[image]);
        setModalOpen(true);
    };
    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };
    return (

        <div className="pressebody">

            <div className='titrepresse'>
                <h1>Presse écrite</h1>
            </div>
            <div className='listeimagepress'>
                {Object
                    .keys(imageAssociations)
                    .map((image, index) => (<img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        onClick={() => handleImageClick(image)}/>))}
            </div>
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <div className="modal-header">
                            <button className="close-button" onClick={closeModal}>X</button>
                        </div>
                        {selectedImage && <img src={selectedImage} alt="Image en grand"/>}
                    </div>
                </div>
            )}

            <div className='titrepressedeux'>
                <h1>Télévision</h1>
            </div>
            <div className='pressbl1'>
                <div>
                <img src='/images/pressbl1.png'/>
                </div>
                
                
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
                <div>
                <img src='/images/press-02.png'/>
                </div>
               
                <div className='pressbl2bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>13/12/2021</span>
                        <br></br>
                        -
                        <br></br>
                        Un reportage de Jean-Marc Schaefer pour TV Erstein sur les ateliers d’écriture <br></br>au Centre Hospitalier 
                    </p>
                </div>
            </div>

            <div className='titrepressetrois'>
                <h1>Radio</h1>
            </div>

            <div className='pressbl3'>
                <div>
                <img src='/images/press-03.png'/>
                </div>
                
                <div className='pressbl3bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>01/03/2021</span>
                        <br></br>
                        -
                        <br></br>
                        Une chronique d'Olivier Vogel, journal de  7 heures, sur France Bleu Alsace
                    </p>
                </div>
            </div>

            <Footer/>
        </div>

    );
}

export default Presse;
