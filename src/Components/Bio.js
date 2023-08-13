import Menu from './Menu';
import '../Styles/Bio.css';
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
function Home() {
    return (
        <div className=''>
            <Menu/>
            <div className=''>
                <p>« J’écris pour me parcourir »</p>
                <p className=''>Henri Michaux</p>
            </div>
            <div className='block1'>

                <div className='bl1-s1'>
                    <h2>2011</h2>
                    <div></div>
                    <h2>2023</h2>

                </div>
                <div className='bl1-s2'>
                    <p>
                        A la naissance de mes enfants, j’invente des histoires pour eux. Certaines sont
                        contées, d'autres écrites. Énoncés à l'oral ou noircis sur une feuille blanche,
                        ces récits développent mon imaginaire. Ma vie s’intensifie. A partir de 2012, je
                        participe à de nombreux ateliers d’écriture notamment chez Aleph. 2019 marque un
                        tournant pour moi : je commence à animer des ateliers d’écriture. Parallèlement,
                        je me forme à l’animation d’ateliers auprès d’Isabelle Foreau, animatrice
                        d’ateliers confirmée. A compter d’avril 2020, j’interviens auprès de
                        professionnels d’Ehpad. Nous participons au concours « journal de bord de
                        confinement » organisé par la maison d’auto-édition Librinova. Nous remportons
                        le titre de lauréat. En septembre 2020, je quitte mon poste d’éducatrice
                        spécialisée pour me consacrer pleinement à l’écriture. Depuis, j’écris et « je
                        fais écrire ». Les ateliers d’écriture auprès de professionnels soignants en
                        Ehpad se poursuivent et à ce jour, j’interviens également au sein de
                        collectivités territoriales, d’écoles, - ESEIS - et d’associations (voir "Ils me
                        font confiance"). Je collabore aussi avec des acteurs de la scène théâtrale,
                        comme la Compagnie ACTEMO Théâtre ou encore le « Théâtre des mots » des Ateliers
                        des Malteries, dont les projets artistiques intègrent mes ateliers d'écriture
                        comme support à la création. En janvier 2021, j’intègre la formation « écriture
                        théâtrale » chez Aleph, animée par Catherine Benhamou ( lauréate du grand prix
                        ARTCENA 2020 ). En 2022, je renoue avec l'écriture et le jeu théâtral par le
                        biais d'ateliers et de stages à l'Espace K, au TAPS- Théâtre Actuel et Public de
                        Strasbourg, chez « Artists in Action » (Paris) ou encore lors de l’Université
                        d’Été Européenne (Pont à Mousson). Parallèlement, je continue de participer à
                        différents ateliers d’écriture, notamment à l’école « Les Mots » (David Thomas,
                        Elsa Flageul ) , ainsi qu’à « la clinique philosophique du burn-out des
                        soignants » dispositif animé par Valérie Gateau, philosophe et formatrice en
                        éthique à la Chaire de Philosophie de l’Hôpital de Paris (GHU). Ces temps
                        d’écriture, de réflexion et de narration partagée me sont très précieux et
                        participent à ma formation continue. En dix ans, j’ai participé à plus de 200
                        ateliers d’écriture et masterclasses. Être à cette place de participante me
                        permet d’éprouver ce que vit un participant d’atelier mais aussi, d’affiner mes
                        interventions et d’ajuster au mieux ma posture d’animatrice, choix relevant
                        d’une déontologie qui m’habite et que je me suis fixée. Différents projets
                        d’écriture (pièce de théâtre, micro-fictions) sont en cours dont un recueil de
                        nouvelles alsaciennes avec un groupe d’écrivants de Strasbourg réunis sous ma
                        direction. Pour moi, écrire est un acte d’amour et permet, comme le dit André
                        Comte-Sponville, de « vivre davantage».

                    </p>
                </div>

            </div>

        </div>
    );
}

export default Home;
