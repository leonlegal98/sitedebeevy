import '../Styles/Home.css';
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';

import Menu from './Menu';
//import soundFile from './path-to-your-sound-file.mp3';

function Home() {

    // const [audio] = useState(new Audio(soundFile)); const playSound = () => {
    // audio.play(); };
    return (
        <div className="homepage">
            <Menu/>

            <div className='henriMichaux'>
                <p>« J’écris pour me parcourir »</p>
                <p className='namehenri'>Henri Michaux</p>
            </div>

            <div className='block1'>

                <p>
                    Bienvenue à vous,</p>
                <p>Auteure, formatrice et animatrice, je propose des ateliers d’écriture
                    créative en présentiel, aux
                    <br/>
                    particuliers, associations et professionnels situés en Alsace ainsi que dans
                    toute la France et tous les pays
                    <br/>
                    francophones. Ouvert.es à tous.tes, mes ateliers d’écriture créative sont un
                    lieu d’expression privilégiée
                    <br/>
                    où chacun.e, aiguillé.e par les pistes spécialement créées pour l’occasion, est
                    invité.e à écrire.</p>

                <p>A l’écoute du groupe comme de chaque participant.e, mon rôle est autant de
                    guider, soutenir, stimuler
                    <br/>
                    que de garantir un cadre respectueux et engageant, favorisant la créativité.
                    Pour écrire en atelier, nul
                    <br/>
                    besoin de savoir ni de don particulier, le désir, accompagné d'une pointe
                    d'audace, suffit.</p>
                <p>
                    Alors sautez le pas et rejoignez-moi dans mes ateliers où respect, partage,
                    <br/>
                    écoute et créativité sont au rendez-vous.
                </p>
                <div className='b1-sect1'>
                    <img src='/images/imageportrait.png'/>
                    <div className='liensect1img'>
                        <a className='beevylien' href='#'>Beevy Jalma</a>
                        <div>
                            <img src='/images/linkedin.png'/>
                            <img src='/images/facebook.png'/>
                            <img src='/images/instagram.png'/>
                            <img src='/images/youtube.png'/>

                        </div>
                    </div>
                </div>

            </div>

            <div className='block2'>
                <div className="image-container">
                    <img className='imagebook' src="/images/book001.png" // onClick={playSound
               // }} //     style={{} //     cursor: 'pointer'
                        // }}
                        alt="Image"/>
                    <h1 className='textimagebl2'>Cliquez sur
                        <br/>
                        les images</h1>
                    <p className='textbl2'>Des surprises vous attendent à chaque page</p>
                </div>
                <div className="text-container">
                    <h1 className='titrec2'>Ateliers d’écriture</h1>
                    <p className='parac2'>
                        Les ateliers que je propose se construisent
                        <br/>
                        différemment s’ils s’adressent à des particuliers ou
                        <br/>
                        à des groupes de professionnels. Dans les deux cas,
                        <br/>
                        il s’agit d’atelier d’écriture créative...
                    </p>
                    <div className='lienbl2'>
                        <a href='#'>Découvrir</a>
                        <a href='#'>Tarifs</a>

                    </div>
                </div>
            </div>
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
                        <h3>« Pour tous.tes ceux/celles qui veulent écrire et se réinventer »</h3>
                        <p>Félix
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='car1slide1'>
                        <h3>« De beaux moments de partage et d'émotions »</h3>
                        <p>Judith</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='car1slide1'>
                        <h3>« Merci à Beevy pour son écoute et sa douceur »</h3>
                        <p>Justine</p>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='block3'>
                <img className='imgbl3' src='/images/homebl3.png'/>
                <h1 className='textbl3'>Ils me font confiance</h1>
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
                            <h3>« Pour tous.tes ceux/celles qui veulent écrire et se réinventer »</h3>
                            <p>Félix
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« De beaux moments de partage et d'émotions »</h3>
                            <p>Judith</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car1slide1'>
                            <h3>« Merci à Beevy pour son écoute et sa douceur »</h3>
                            <p>Justine</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='block4'>
                <img src='/images/bl4-01.png'/>
                <img src='/images/bl4-02.png'/>
                <img src='/images/bl4-03.png'/>
                <img src='/images/bl4-04.png'/>
                <img src='/images/bl4-05.png'/>
                <img src='/images/bl4-06.png'/>
            </div>
            <div className='block5'>
                <h1 className='titrebl5'>Suivez-moi sur Instagram</h1>
                <p className='textbl5'>Pour être au courant de toute mon actu et des ateliers d’écriture à venir</p>
                <div className='imgbl5'>
                    <img src="/images/imgbl5-01.png"/>
                    <img src="/images/imgbl5-02.png"/>
                    <img src="/images/imgbl5-03.png"/>
                </div>
                <a className='cparici' href='#'>C’est par ici</a>
            </div>
            <div className='footer'>
                <div className='footerb1'>
                    <img src='/images/logofooter.png'/>
                </div>
                <div className='footerb2'>
                    <h3>Ateliers d'écriture</h3>
                    <div className='footerb2b1'>
                        <a>Découvrir</a>
                        <a>Agenda</a>
                        <a>Tarifs</a>
                    </div>

                    <div className='footerb2b2'>
                        <a>Mentions légales</a>
                        <a>CGV</a>
                    </div>
                </div>
                <div className='footerb3'>
                    <div className='footerb3b1'>
                        <h3>Extraits</h3>
                        <div>
                            <a>Textes d’Atelier</a>
                            <a>Médias</a>
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
                <div className='footerb4'>
                    <h3>Contact</h3>
                    <p>Email</p>
                    <div className='socialfooter'>
                        <img src='/images/linkedin.png'/>
                        <img src='/images/facebook.png'/>
                        <img src='/images/instagram.png'/>
                        <img src='/images/youtube.png'/>
                    </div>

                </div>
                <div className='footerb5'>

                    <img src='/images/logofooterresp.png'/>

                </div>

            </div>
        </div>

    );
}

export default Home;
