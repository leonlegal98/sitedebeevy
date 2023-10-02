import '../Styles/Home.css';
import React, { useState, } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination,} from 'swiper/modules';
import Footer from './Footer';
import soundFile from '../sonAccueil/coeur.mp3';
import soundFile2 from '../sonAccueil/crayon.mp3';
import soundFile3 from '../sonAccueil/chapeau.mp3';
import { Helmet } from 'react-helmet';

function Home() {
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
        '/images/bl4-01.png': '/images/ArticlelAlsace_1.jpg',
        '/images/bl4-02.png': [
            '/images/EhpadErstein_1.jpg',
            '/images/DNA_1_1.jpg', 
        ],
        '/images/bl4-03.png': '/images/BulletinHoenheim_1.jpg',
        '/images/bl4-04.png': '/images/Eurometropole_1.jpg',
        '/images/bl4-05.png': [
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
        '/images/bl4-06.png': '/images/article_1.jpg',
        // Ajoutez ici les associations pour vos images
    };
    
   
    const [audio] = useState(new Audio(soundFile));
    const playSound = () => {
        audio.play();
    };
    const [audio2] = useState(new Audio(soundFile2));
    const playSound2 = () => {
        audio2.play();
    };
    const [audio3] = useState(new Audio(soundFile3));
    const playSound3 = () => {
        audio3.play();
    };
    return (
        <div className="homepage">
            <Helmet>
                <meta name="description" content="Home site de Beevy" />
        </Helmet>
            <div className="menuleftrespon">
                <Link to="/">
                    <img className='logoim1' src="/images/logo.png" alt="Image 1"/>
                </Link>
            </div>

            <div className='block1'>

                <h3 className='oo'>« Écrire et se réinventer »</h3>

                <p>Vous aimez écrire? Vous ne savez pas par quoi commencer ni comment?
                    <br></br>
                    Rejoignez-moi dans mes ateliers d’écriture.

                </p>
                <p>Vous y trouverez un espace de créativité unique, un lieu préservé, dédié au
                    partage et aux mots.<br></br>
                    Guidé.es par les pistes d’écriture spécialement conçues pour l’occasion, vous
                    serez accompagné.es <br></br>
                    tout au long du processus. Votre créativité se déploiera hors des sentiers
                    connus, pour votre plaisir <br></br>
                    comme celui de vos pairs. Les échanges en groupe comme la lecture des textes
                    vous donneront <br></br>
                    l’opportunité d’avoir de précieux retours sur vos écrits. En toute
                    bienveillance.</p>
                <p>
                    Vous hésitez? Un seul conseil : essayez ! Et si vous hésitez encore,
                    laissez-vous porter par ces mots <br></br>
                    de Christian Bobin «La vie est la maîtresse, j’essaie juste d’être au
                    rendez-vous.»
                </p>
                <p>
                    A très bientôt,
                </p>
                <div className='b1-sect1'>
                    <img className='beevyphto' alt='photo beevy' src='/images/beevyphoto.png'/>
                    <div className='liensect1img'>
                        <a className='beevylien' href='#'>Beevy Jalma</a>
                        <div className='homemargeimage'>
                            <Link to="https://www.linkedin.com/in/beevy-jalma-11382b1b9/" target="_blank">
                                <img src='/images/linkedin.png' alt='linkedn'/>
                            </Link>
                            <Link to="https://www.facebook.com/latelierdebeevy" target="_blank">
                                <img src='/images/facebook.png' alt='facebook'/>
                            </Link>
                            <Link to="https://www.instagram.com/latelierdebeevy/" target="_blank">
                                <img src='/images/instagram.png' alt='instagram'/>
                            </Link>
                            <Link to="https://www.youtube.com/@LatelierdeBeevy" target="_blank">
                                <img src='/images/youtube.png' alt='youtube'/>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>

            <div className='block2'>
                <div className="image-container">
                    <img
                        className='imagebook'
                        src="/images/imagebook.png"
                        onClick={playSound}
                        style={{
                        cursor: 'pointer'
                    }}
                        alt="Image"/>
                    <h1 className='textimagebl2'>Cliquez sur
                        <br/>
                        les images</h1>
                    <p className='textbl2'>Des surprises vous attendent à chaque page</p>
                </div>
                <div className="text-container">
                    <h1 className='titrec2'>Ateliers
                        <br></br>
                        d’écriture</h1>
                    <p className='parac2'>
                        C’est avant tout une expérience à vivre. Pour vous donner une image, je compare
                        souvent les ateliers d’écriture aux recettes de cuisine ou aux entraînements
                        sportifs. Avant d’écrire, on se prépare.
                    </p>
                    <div className='lienbl2'>

                        <a href='/atelier'>Découvrir</a>
                        <a href='/texteatelier'>Textes d'ateliers</a>
                        <a href='/tarif'>Tarifs</a>

                    </div>
                </div>
            </div>
            <div className='chapresphome'>
                <img src='/images/chapeau.png' onClick={playSound3}
                    style={{
                    cursor: 'pointer'
                }}/>
            </div>
            <div className='homefisrtcarousel'>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true
                }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« Trois heures qui sont passées comme un enchantement »</h3>
                            <p>Sonia
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« A découvrir absolument ! »</h3>
                            <p>Guillaume</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« Oublier l’angoisse de la page blanche ! »</h3>
                            <p>Marie-Christine</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« Cet atelier m’a fortement comblé »</h3>
                            <p>Félix
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« Une parenthèse <br></br>enchantée »</h3>
                            <p>Myriam</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='block3'>
                <img
                    onClick={playSound2}
                    style={{
                    cursor: 'pointer',
                    
                }}
                    className='imgbl3responsive'
                    src='/images/beevygroupe.png'/>
                    <img
                    onClick={playSound2}
                    style={{
                    cursor: 'pointer'
                }}
                    className='imgbl3'
                    src='/images/groupphoto.png'/>
                <h1 className='textbl3'>Ils me font confiance</h1>
                <div className='homesecondcarousel'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true
                    }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper2">
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img alt='image carrouselle' className='car2imgsize' src='/images/car2im1.png'/>
                                <p>Dans le cadre du dispositif national “La classe, l'œuvre”, le Labo des
                                    Histoires- Grand Est a organisé le cycle d’ateliers d’écriture “Sur les traces
                                    de Théodore Deck” en partenariat avec le Musée consacré au céramiste.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img alt='image carrouselle' className='car2imgsize' src='/images/car2im2.png'/>
                                <p>"L'atelier de Beevy, c'est le moment du lâcher prise" Anne Lamothe, 
                                    professionnelle du Relais Petite Enfance d'Ingwiller</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img alt='image carrouselle' className='car2imgsize' src='/images/car2im3.png'/>
                                <p>En collaboration avec Actemo Théâtre et Le Centre Hospitalier d’Erstein. «
                                    Une série d'ateliers d'écriture tout en émotions, poésie et sensibilité » Céline
                                    Modéré Adam, responsable du relais culturel
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img alt='image carrouselle' className='car2imgsize' src='/images/car2im4.png'/>
                                <p>Depuis mars 2020, un atelier d'écriture créative par mois est proposé aux
                                    soignantes de l'EHPAD ABRAPA.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img alt='image carrouselle' className='car2imgsize' src='/images/car2im5.png'/>
                                <p>« Cet atelier à permis aux participants de renouer avec les autres de
                                    retrouver confiance » Sabrina Helbling, co-administratice
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img alt='image carrouselle' className='car2imgsize' src='/images/car2im6.png'/>
                                <p>Des ateliers d'écriture proposés à un public de migrants du centre de
                                    Ferrette. L’occasion d’aborder les thèmes de l'égalité, de la liberté, de la
                                    justice avec des hommes et des femmes venus des quatre coins du monde.
                                </p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <a href='confiance'>Voir plus</a>
                </div>
            </div>

            <div className='block4'>
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

            <div className='block5'>
                <h1 className='titrebl5'>Suivez-moi sur les réseaux</h1>
                <p className='textbl5'>Pour être au courant de toute mon actu et des ateliers d’écriture à venir</p>
                <div className='imgbl5'>
                    <img alt='img reseaux sociaux' src="/images/imgbl5-01.png"/>
                    <img  alt='img reseaux sociaux' src="/images/imgbl5-02.png"/>
                    <img  alt='img reseaux sociaux' src="/images/imgbl5-03.png"/>
                </div>
                <div className='reseausocaiuxhome'>
                    <a className='cparici' href='https://www.instagram.com/latelierdebeevy/'>Instagram &gt;</a>
                    <a className='cparici' href='https://www.facebook.com/latelierdebeevy'>Facebook &gt;</a>
                </div>

            </div>
            <Footer/>
            <style>
                {
                    ` @media screen and (max-width:868px) {
                        /* Styles réactifs pour une largeur d'écran maximale de 868 pixels */
                        .mySwiper2 .swiper-button-next,
                        .mySwiper2 .swiper-button-prev {
                            top: 30% !important;
                            /* Ajustez la valeur pour les écrans plus petits */
                        }
                    }
                     `
                }</style>

        </div>
    );
}

export default Home;
