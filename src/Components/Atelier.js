import '../Styles/Atelier.css';

import React  , { useState }from 'react';
import Bio from './Bio.js';
import Home from './Home.js';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';

function Atelier() {
    const [contentStates, setContentStates] = useState({});

    const toggleContent = (id) => {
        setContentStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    const textData = [
        {
            id: 'text1',
            title: '« Je n’ai jamais participé à un atelier d’écriture, est-ce accessible aux débutants ? »',
            content: 'Oui, tous les ateliers sont accessibles aux débutant.es.'
        },
        {
            id: 'text2',
            title: '« Je fais des fautes d’orthographe, est-ce grave ? »',
            content: 'Il serait dommage de vous priver d’un atelier d’écriture pour des raisons orthographiques ou grammaticales. À ce sujet, Bukowski disait : <q>Je n’ai pas prêté beaucoup d’attention à la grammaire, et quand j’écris c’est surtout par amour du mot, de la tonalité, comme un peintre jetant ses couleurs sur la toile. (...) Une écriture qui vient du sang plutôt que de l’intellect.</q>'
        },
        {
            id: 'text3',
            title: '« Pour participer à une séance, faut-il s’inscrire à tous les ateliers ? »',
            content: 'Non, vous pouvez vous inscrire à une seule séance. Les ateliers proposés sont indépendants les uns des autres.'
        },
        {
            id: 'text4',
            title: '« Y a-t-il quelque chose à savoir avant de participer? »',
            content: 'Aucune connaissance n’est requise pour participer à un atelier.'
        },
        {
            id: 'text5',
            title: '« Suis-je obligé.e de lire mon texte en groupe? »',
            content: 'Il n’y a aucune obligation en la matière, chacun.e est libre de lire ou non son texte en atelier.'
        },
        {
            id: 'text6',
            title: '« Que dois-je emmener ? »',
            content: 'De quoi écrire. En cas d’oubli, je mets à disposition feuilles blanches et stylos.'
        },
        {
            id: 'text7',
            title: '« Qu’est-ce que ça va m’apporter ? »',
            content: 'A cette question, vous seul.e pouvez répondre.'
        },
        {
            id: 'text8',
            title: '« Est-ce que je vais apprendre quelque chose ? »',
            content: 'Même réponse que précédemment. Et j’ajouterai : je ne sais pas si vous allez « apprendre quelque chose », mais je suis convaincue que vous aurez vécu un moment unique.'
        },
        {
            id: 'text9',
            title: '« Ça se passe où et quand ? »',
            content: 'Les ateliers d’écriture créative destinés aux particuliers se déroulent le samedi, une fois par mois, dans un lieu historique (inscrit au patrimoine mondial de l’Unesco), situé au cœur de la Grande-île de Strasbourg. La salle est accessible aux personnes à mobilité réduite. Pour les établissements faisant appel à mes services, je m’en remets à la structure pour mettre à disposition une salle adaptée à la bonne tenue de la séance.'
        },
        {
            id: 'text10',
            title: '« Je fais des fautes d’orthographe, est-ce grave ? »',
            content: 'Il serait dommage de vous priver d’un atelier d’écriture pour des raisons orthographiques ou grammaticales. À ce sujet, Bukowski disait : <q>Je n’ai pas prêté beaucoup d’attention à la grammaire, et quand j’écris c’est surtout par amour du mot, de la tonalité, comme un peintre jetant ses couleurs sur la toile. (...) Une écriture qui vient du sang plutôt que de l’intellect.</q>'
        },
        
        // Ajoutez d'autres objets de données ici pour chaque texte supplémentaire
    ];

    return (

        <div className="atelierbody">
            <div className='ateliersect1'>
                <div className='ateliersect1b1'>
                    <h1>Un atelier d’écriture c’est quoi ?</h1>
                    <p>Un atelier d'écriture réunit des personnes désireuses d'écrire. Le respect,
                        l'écoute et la bienveillance sont essentiels pour le bon déroulement de ces
                        ateliers. Les ateliers créatifs s'adressent à des particuliers et à des groupes
                        de professionnels.</p>
                    <p>J’adopte une approche oulipienne, utilisant des contraintes pour stimuler la
                        créativité et offrir des perspectives inédites. Cette approche permet aux
                        participants de sortir de leurs habitudes et de découvrir de nouvelles voies.</p>
                    <p>J’interviens auprès de différents secteurs, notamment éducatif, médico-social
                        et de la santé, afin de soutenir ceux qui prennent soin des autres.</p>
                    <div className='liensect1'>
                        <a>Textes d’ateliers</a>
                        <a>Tarifs</a>
                    </div>
                    <div className='bioateletierbaudelaire'>
                        <h4>« Parce que la forme est contraignante, l'idée jaillit plus intense »</h4>
                        <p>
                            Charles Baudelaire</p>
                    </div>
                </div>

                <img src="/images/atelier-01.png" alt="Image 1"/>
            </div>

            <div className='ateliersect2'>

                <img src="/images/atelier-02.png" alt="Image 2"/>
                <div className='ateliersect2b2'>
                    <h1>Pour tous, sans aucune restriction.</h1>
                    <p>En atelier d’écriture, « il n’y a pas de hors-sujet car » comme le disait
                        Odile Neumayer, « c’est vous le sujet. ». Nous sommes tous capables d’écrire.
                        Ici, le moteur est le désir, l’idée est de prendre plaisir.
                    </p>
                </div>
            </div>
            <div className='ateliersect3'>
                <div className='ateliersect3b1'>
                    <h1>Où ?</h1>
                    <p>A Strasbourg, dans le Bas-Rhin (Alsace/Grand Est) ainsi que dans toute la
                        France. Mobile, je peux également me déplacer à l’étranger, dans tout pays
                        francophone.</p>
                    <p>
                        Les ateliers se déroulent en « présentiel » ou en « visio ». Le nombre de
                        participants est de douze personnes maximum. Ce nombre limité favorise les
                        échanges de qualité et le partage en toute confiance.
                    </p>
                    <h1>Durée</h1>
                    <p>La durée minimum d’un atelier est d’une heure. Je propose également des
                        ateliers de deux ou trois heures, en demi-journée ou journée entière, ainsi que
                        des sessions d’ateliers d’écriture pouvant s’inscrire dans les plans de
                        formation des établissements.
                    </p>
                    <p>
                        A compter de 2024, je proposerai des stages d’accompagnement à l’écriture. D’une
                        durée de trois à cinq jours, ces sessions, organisées une à deux fois par an,
                        accueilleront un maximum de dix participants.
                    </p>
                </div>
                <img src="/images/atelier-03.png" alt="Image 3"/>
            </div>
            <div className='ateliersect4'>
            <img src="/images/atelier-04.png" alt="Image 3"/>

                <div className='ateliersect4b1'>
                    <h1>Ma spécialité</h1>
                    <p>Mes années d’éducatrice spécialisée, doublées de mon cheminement personnel et
                        thérapeutique, m’ont permis de développer des qualités d’écoute, de
                        bienveillance, de respect et d’accueil de l’autre. L’engagement sincère qui
                        était le mien dans l’exercice de mes fonctions précédentes se retrouve dans les
                        ateliers d’écriture que j’anime, mis au service des écrivants que je rencontre.</p>
                    <p>Grâce à mon expérience et à ma formation, je suis outillée pour animer des
                        ateliers auprès de divers professionnels, notamment du secteur sanitaire,
                        médico-social et éducatif. Dans le cadre de " plan de formation ", des sessions
                        d’ateliers d’écriture peuvent être organisées avec des thèmes définis au
                        préalable par les équipes comme par exemple : " la bientraitance ", " comment
                        faire récit de la souffrance "ou encore " mettre en mots les missions des
                        professionnels, de l'exécution à la pensée ".</p>
                </div>
            </div>
            <div className='ateliersection5'>
                <h1 className='textateliersect5'>Ils me font confiance</h1>
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
                <a>Voir plus</a>
            </div>
            
            <div className='faqatelier'>
                {textData.map((item) => (
                <div key={item.id}>
                    <h4 className="textfooteratelier">
                        {item.title}
                        <button
                            className={`toggle-button-atelier ${contentStates[item.id] ? 'minus' : ''}`}
                            onClick={() => toggleContent(item.id)}
                        >
                            {contentStates[item.id] ? '-' : '+'}
                        </button>
                    </h4>
                    <div className={`toggle-content-atelier ${contentStates[item.id] ? 'show' : ''}`}>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
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

export default Atelier;
