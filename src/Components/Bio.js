import Menu from './Menu';
import '../Styles/Bio.css';
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import Footer from './Footer';

function Bio() {
    return (
        <div className='biobody'>
            <div className='biorepon'>
                <h2>BIO</h2>
            </div>
            <div className='henriMichaux'>
                <p className='pourparcour'>« J’écris pour me parcourir »</p>
                <p className='namehenri'>Henri Michaux</p>
            </div>
            <div className='section1bio'>

                <div className='sect1bio-s1'>
                    <h2>Saïgon</h2>
                    <div className='linesect1bio'></div>
                    <h2>Strasbourg</h2>

                </div>
                <div className='sect1bio-s2'>
                    <h3>« Qui ne connaît pas de langues étrangères ne connaît rien de la <br></br> sienne »</h3>
                    <p>Née d’un père indien et d’une mère vietnamienne, j’ai vu le jour à Saïgon. Le
                        mythe familial raconte <br></br> qu’à l’âge d’un an, je parlais déjà et que ma première
                        phrase fut une question.</p>
                    <h3>« Écrire c’est se mettre en danger »</h3>
                    <p>Mes premiers souvenirs d’écriture remontent à l’école primaire. J’étais en
                        classe de CE2, j’avais huit ans,<br></br> je jouais à l’élastique, je mangeais des
                        sandwichs au porc laqué à la récréation, Nicolas était <br></br> amoureux de moi et ma
                        meilleure amie s’appelait Audrey. Cette année-là, l’enseignante nous a <br></br> demandé
                        d’écrire un poème pour la fête des pères. Quelques jours plus tard, j’ai lu mon
                        poème à voix <br></br> haute, devant toute la classe. Je suis restée assise et je me
                        souviens avoir eu peur qu’on me demande <br></br> ce qu’en avait pensé mon père. Mon père
                        n’a jamais entendu ce poème. Ce jour-là, sous le regard <br></br> approbateur de mon
                        enseignante et les applaudissements de mes camarades, j’ai fait la découverte <br></br> du
                        feu: les mots, frottés les uns contre les autres, pouvaient produire des
                        étincelles.</p>
                    <h3>« Écrire c’est aussi se taire, hurler sans bruit »</h3>
                    <p>En 2009, j’intègre un service d’investigation éducative. Pendant des années,
                        je retrace le parcours <br></br> d’hommes et de femmes aux vies cabossées. Des enfances
                        disparues, des camisoles de secrets, des <br></br> corps maltraités... Des milliers de
                        mots pour tenter de mettre en ordre le chaos de ces existences <br></br> morcelées.</p>
                    <h3>« L’écriture est le seul espace de liberté absolue »</h3>
                    <p>À la naissance de mes enfants, j’invente des histoires pour eux. Certaines
                        sont contées, d'autres <br></br> écrites. Au même moment, je découvre les ateliers
                        d’écriture.</p>
                    <h3>« Écrire c’est se jeter dans le vide »</h3>
                    <p>Durant le premier confinement, j’envoie des cartes à mes proches. Ma tante
                        vietnamienne me <br></br> téléphone pour me remercier. Au bout du fil, elle se réjouit de
                        ma situation « Tu as de la chance de <br></br> pouvoir travailler à la maison. Et en plus,
                        tu as la sécurité de l’emploi ! » Et là, dans ma langue <br></br> maternelle, une réponse
                        surgit, « Je vais arrêter Tata ». «Ah bon? Mais pour faire quoi ? » Écrire.</p>
                    <p>En septembre 2020, je quitte mon poste d’éducatrice au service
                        d’investigation pour me consacrer <br></br> pleinement à l’écriture. Depuis, j’écris et «
                        je fais écrire ».</p>
                </div>

            </div>
            <div className='section3bio'>
                <h1 className='textbiosect3'>Ils me font confiance</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true
                }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='car3slide2'>
                            <img className='car2imgsize' src='/images/car2im1.png'/>
                            <p>Dans le cadre du dispositif national “La classe, l'œuvre”, le Labo des <br></br>
                                Histoires- Grand Est a organisé le cycle d’ateliers d’écriture “Sur les <br></br> traces
                                de Théodore Deck” en partenariat avec le Musée consacré <br></br> au céramiste et le
                                collège Mathias Grünewald de Guebwiller.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car3slide2'>
                            <img className='car2imgsize' src='/images/car2im2.png'/>
                            <p>Depuis juin 2022, j’interviens sur le territoire de La petite Pierre <br></br> auprès
                                d’assistantes maternelles. L’occasion pour ces <br></br> professionnelles de faire récit
                                de leurs expériences et de leurs <br></br> parcours. “L'atelier de Beevy, c'est le moment
                                du lâcher prise” <br></br> Anne Lamothe, Professionnelle du Relais Petite Enfance
                                d'Ingwiller</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car3slide2'>
                            <img className='car2imgsize' src='/images/car2im3.png'/>
                            <p>En collaboration avec Actemo Théâtre et Le Centre Hospitalier <br></br> d’Erstein. «
                                Une série d'ateliers d'écriture tout en émotions, poésie <br></br> et sensibilité » Céline
                                Modéré Adam, responsable du relais culturel
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car3slide2'>
                            <img className='car2imgsize' src='/images/car2im4.png'/>
                            <p>Depuis mars 2020, un atelier d'écriture créative par mois est <br></br> proposé aux
                                soignantes de l'EHPAD ABRAPA.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car3slide2'>
                            <img className='car2imgsize' src='/images/car2im5.png'/>
                            <p>« Cet atelier à permis aux participants de renouer avec les autres,<br></br> de
                                retrouver confiance » Sabrina Helbling, co-administratice
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='car3slide2'>
                            <img className='car2imgsize' src='/images/car2im6.png'/>
                            <p>Des ateliers d'écriture proposés à un public de migrants du centre <br></br> de
                                Ferrette. L’occasion d’aborder les thèmes de l'égalité, de la  <br></br>liberté, de la
                                justice avec des hommes et des <br></br> femmes venus des quatre coins du monde.
                            </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <a href='confiance'>Voir plus</a>
            </div>
            <div className='block5'>
                <h1 className='titrebl5'>Suivez-moi sur Instagram</h1>
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

export default Bio;
