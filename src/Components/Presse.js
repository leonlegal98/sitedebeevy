import '../Styles/Presse.css';

import Bio from './Bio.js';
import Home from './Home.js';
import Footer from './Footer';
import React, {useRef, useState,useEffect} from 'react';

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
                        <button onClick={closeModal}>X</button>
                        {selectedImage && <img src={selectedImage} alt="Image en grand"/>}
                    </div>
                </div>
            )}

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
