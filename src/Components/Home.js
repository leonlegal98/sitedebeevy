import '../Styles/Home.css';
import React, {useRef, useState, useEffect} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import Menu from './Menu';
import Footer from './Footer';
import soundFile from '../sonAccueil/coeur.mp3';
import soundFile2 from '../sonAccueil/crayon.mp3';

function Home() {
    const [modalOpen,
        setModalOpen] = useState(false);
    const [selectedImage,
        setSelectedImage] = useState(null);

    const imageAssociations = {
        '/images/bl4-01.png': '/images/ArticlelAlsace_1.jpg',
        '/images/bl4-02.png': '/images/EhpadErstein_1.jpg',
        '/images/bl4-03.png': '/images/Eurometropole_1.jpg',
        '/images/bl4-04.png': '/images/BulletinHoenheim_1.jpg',
        '/images/bl4-05.png': '/images/page01_1.jpg',
        '/images/bl4-06.png': '/images/article_1.jpg',
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

    const [audio] = useState(new Audio(soundFile));
    const playSound = () => {
        audio.play();
    };
    const [audio2] = useState(new Audio(soundFile2));
    const playSound2 = () => {
        audio2.play();
    };
    return (
        <div className="homepage">
            <div className="menuleftrespon">
                    <Link to="/">
                        <img className='logoim1' src="/images/logo.png" alt="Image 1"/>
                    </Link>
                </div>

            <div className='block1'>

                <h3 className='oo'>« Écrire et se réinventer »</h3>

                <p>Vous aimez écrire ? Vous ne savez pas par quoi commencer ni comment commencer ?
                    <br></br>
                    Rejoignez-moi dans mes ateliers d’écriture.

                </p>
                <p>Vous y trouverez un espace de créativité unique, un lieu préservé, dédié au
                    partage et aux mots.<br></br>
                    Guidé.es par les pistes d’écriture spécialement conçues pour l’occasion, vous
                    serez accompagné.es
                    <br></br>
                    tout au long du processus. Votre créativité se déploiera hors des sentiers
                    connus, pour votre plaisir
                    <br></br>
                    comme celui de vos pairs. Les échanges en groupe comme la lecture des textes
                    vous donneront
                    <br></br>
                    l’opportunité d’avoir de précieux retours sur vos écrits. En toute
                    bienveillance.</p>
                <p>
                    Vous hésitez? Un seul conseil : essayez ! Et si vous hésitez encore,
                    laissez-vous porter par ces mots
                    <br></br>
                    de Christian Bobin «La vie est la maîtresse, j’essaie juste d’être au
                    rendez-vous.»
                </p>
                <p>
                    A très bientôt,
                </p>
                <div className='b1-sect1'>
                    <img src='/images/beevyphoto.png'/>
                    <div className='liensect1img'>
                        <a className='beevylien' href='#'>Beevy Jalma</a>
                        <div className='homemargeimage'>
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
                        C’est avant tout une expérience à vivre. Pour vous
                        <br></br>
                        donner une image, je compare souvent les ateliers
                        <br></br>
                        d’écriture aux recettes de cuisine ou aux
                        <br></br>
                        entraînements sportifs. Avant d’écrire, on se
                        <br></br>
                        prépare.
                    </p>
                    <div className='lienbl2'>

                        <a href='/atelier'>Découvrir</a>
                        <a href='/texteatelier'>Textes d'ateliers</a>
                        <a href='/tarif'>Tarifs</a>

                    </div>
                </div>
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
                            <h3>« Une parenthèse enchantée »</h3>
                            <p>Myriam</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='block3'>
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
                        className="mySwiper">
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img className='car2imgsize' src='/images/car2im1.png'/>
                                <p>Dans le cadre du dispositif national “La classe, l'œuvre”, le Labo des
                                    Histoires- Grand Est a organisé le cycle d’ateliers d’écriture “Sur les traces
                                    de Théodore Deck” en partenariat avec le Musée consacré au céramiste.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img className='car2imgsize' src='/images/car2im2.png'/>
                                <p>Depuis juin 2022, j’interviens sur le territoire de La petite Pierre auprès
                                    d’assistantes maternelles. L’occasion pour ces professionnelles de faire récit
                                    de leurs expériences et de leurs parcours. “L'atelier de Beevy, c'est le moment
                                    du lâcher prise” Anne Lamothe, Professionnelle du Relais Petite Enfance
                                    d'Ingwiller</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img className='car2imgsize' src='/images/car2im3.png'/>
                                <p>En collaboration avec Actemo Théâtre et Le Centre Hospitalier d’Erstein. «
                                    Une série d'ateliers d'écriture tout en émotions, poésie et sensibilité » Céline
                                    Modéré Adam, responsable du relais culturel
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img className='car2imgsize' src='/images/car2im4.png'/>
                                <p>Depuis mars 2020, un atelier d'écriture créative par mois est proposé aux
                                    soignantes de l'EHPAD ABRAPA.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img className='car2imgsize' src='/images/car2im5.png'/>
                                <p>« Cet atelier à permis aux participants de renouer avec les autres de
                                    retrouver confiance » Sabrina Helbling, co-administratice
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='car1slide2'>
                                <img className='car2imgsize' src='/images/car2im6.png'/>
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
                        {selectedImage && <img src={selectedImage} alt="Image en grand"/>}
                    </div>
                </div>
            )}
            <div className='block5'>
                <h1 className='titrebl5'>Suivez-moi sur les réseaux</h1>
                <p className='textbl5'>Pour être au courant de toute mon actu et des ateliers d’écriture à venir</p>
                <div className='imgbl5'>
                    <img src="/images/imgbl5-01.png"/>
                    <img src="/images/imgbl5-02.png"/>
                    <img src="/images/imgbl5-03.png"/>
                </div>
                <div className='reseausocaiuxhome'>
                    <a className='cparici' href='https://www.instagram.com/ecriturecreative_beevy/'>Instagram &gt;</a>
                    <a className='cparici' href='https://www.facebook.com/latelierdebeevy'>Facebook &gt;</a>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default Home;
