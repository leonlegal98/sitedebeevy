import '../Styles/Presse.css';

import Bio from './Bio.js';
import Home from './Home.js';
import Footer from './Footer';
import React, {useRef, useState, useEffect} from 'react';

function Presse() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageClick = (image) => {
    const imagesToShow = imageAssociations[image];
    setSelectedImages(imagesToShow);
    setModalOpen(true);
    };

    const closeModal = () => {
    setSelectedImages([]);
    setModalOpen(false);
    };
    const imageAssociations = {
        '/images/1.png': '/images/ArticlelAlsace_1.jpg',
        '/images/2.png': [
            '/images/EhpadErstein_1.jpg',
            '/images/DNA_1_1.jpg', // Ajoutez ici le chemin de la deuxième image
        ],
        '/images/3.png': '/images/Eurometropole_1.jpg',
        '/images/4.png': '/images/BulletinHoenheim_1.jpg',
        '/images/5.png': [
            '/images/page01_1.jpg',
            '/images/page02_1.jpg',
            '/images/page03_1.jpg',
            '/images/page04_1.jpg',
            '/images/page05_1.jpg',
            '/images/page06_1.jpg',
            '/images/page07_1.jpg',
            '/images/page08_1.jpg',
            '/images/page09_1.jpg',
            '/images/page10_1.jpg',
            '/images/page11_1.jpg',
            '/images/page12_1.jpg',
            '/images/page13_1.jpg',
            '/images/page14_1.jpg',
            '/images/page15_1.jpg',
            '/images/page16_1.jpg',
            '/images/page17_1.jpg',

        ],
        '/images/6.png': '/images/article_1.jpg',
        // Ajoutez ici les associations pour vos images
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
      <div className="modal-images">
        {Array.isArray(selectedImages) ? (
          selectedImages.map((image, index) => (
            <img key={index} src={image} alt={`Image en grand`} />
          ))
        ) : (
          <img src={selectedImages} alt={`Image en grand`} />
        )}
      </div>
    </div>
  </div>
)}

            <div className='titrepressedeux'>
                <h1>Télévision</h1>
            </div>
            <div className='pressbl1'>
                <div>
                    
                <a href='https://www.youtube.com/watch?v=ehSTKBNhjj0' target="_blank">
                <img src='/images/pressbl1.png'/>
                </a>
                </div>
                
                
                <div className='pressbl1bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>16/10/2020</span>
                        <br></br>
                        -
                        <br></br>
                        <a href='https://www.youtube.com/watch?v=ehSTKBNhjj0' target="_blank">Un reportage de Sylvie Malal</a> sur les ateliers d'écriture en EHPAD diffusé dans
                        le 19/20 de France 3 Alsace
                    </p>
                </div>
            </div>
            <div className='pressbl2'>
                <div>
                <a href='https://www.youtube.com/watch?v=5XiJvngx5Ew' target="_blank">
                <img src='/images/press-02.png'/>
                </a>
                </div>
               
                <div className='pressbl2bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>13/12/2021</span>
                        <br></br>
                        -
                        <br></br>
                        <a href='https://www.youtube.com/watch?v=5XiJvngx5Ew' target="_blank">Un reportage de Jean-Marc Schaefer</a> pour TV Erstein sur les ateliers d’écriture <br></br>au Centre Hospitalier 
                    </p>
                </div>
            </div>

            <div className='titrepressetrois'>
                <h1>Radio</h1>
            </div>

            <div className='pressbl3'>
                <div>
                    <a href='https://www.youtube.com/watch?v=PKGzcsYY7Ys' target="_blank">
                <img src='/images/press-03.png'/>
                </a>
                </div>
                
                <div className='pressbl3bl2'>
                    <h3>Les ateliers d'écriture en confinement
                    </h3>
                    <p>
                        <span>01/03/2021</span>
                        <br></br>
                        -
                        <br></br>
                        <a href='https://www.youtube.com/watch?v=PKGzcsYY7Ys' target="_blank">Une chronique d'Olivier Vogel</a>, journal de  7 heures, sur France Bleu Alsace
                    </p>
                </div>
            </div>

            <Footer/>
        </div>

    );
}

export default Presse;
