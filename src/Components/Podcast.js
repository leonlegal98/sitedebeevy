import Footer from './Footer';
import React, {useState, useRef} from 'react';
import '../Styles/Podcast.css';

function Podcast() {
    const [currentlyPlaying,
        setCurrentlyPlaying] = useState(null);
    const [isPaused,
        setIsPaused] = useState(true); // Ajoutez un état pour suivre la pause
    const audioRef = useRef(null);

    const podcasts = [
        {
            key: 'episode1',
            title: 'Episode 1',
            url: '/podcasts/Episode1.mp3',
            date: '13:56',
            texte: 'Dans la valise'
        }, {
            key: 'episode2',
            title: 'Episode 2',
            url: '/podcasts/Episode2.mp3',
            date: '10:10',
            texte: 'Dans le chapeau'
        }, {
            key: 'episode3',
            title: 'Episode 3',
            url: '/podcasts/Episode3.mp3',
            date: '10:46',
            texte: 'Dans la thermos'
        }, {
            key: 'episode4',
            title: 'Episode 4',
            url: '/podcasts/Episode4.mp3',
            date: '12:56',
            texte: 'Dans la radio'
        }, {
            key: 'episode5',
            title: 'Episode 5',
            url: '/podcasts/Episode5.mp3',
            date: '14:56',
            texte: 'Dans la boîte à biscuits'
        },
        // Ajoutez d'autres podcasts ici
    ];

    const togglePlayPause = (url) => {
        const audio = audioRef.current;
        if (currentlyPlaying === url) {
            if (isPaused) {
                audio.play();
                setIsPaused(false);
            } else {
                audio.pause();
                setIsPaused(true);
            }
        } else {
            audio.src = url;
            audio.play();
            setCurrentlyPlaying(url);
            setIsPaused(false);
        }
    };

    const downloadPodcast = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'podcast.mp3';
        link.click();
    };

    return (
        <div className='podcastbody'>
            <div className='titrepodcast'>
                <h1>Podcasts</h1>
            </div>

            <div className='podcastbl1'>
                <div>
                    <img src='/images/imagepodcast.png'/>
                </div>

                <div className='podcastbl1bl2'>
                    <h3 className='poddansma'>Dans ma poche, ma mémoire
                    </h3>
                    <p>
                        <span>Novembre 2021 - Mars 2022</span>
                        <br></br>
                        -
                        <br></br>
                        "Dans ma poche, ma mémoire", un podcast en 5 épisodes réalisé par Charlie
                        Droesch-Du Cerceau durant les ateliers d'écriture menés à l'EHPAD du Centre
                        Hospitalier d'Erstein. Projet initié par la Compagnie Actémo Théâtre en
                        collaboration avec le Service Culturel de la Ville d'Erstein.
                    </p>
                </div>
            </div>

            <div className="podcast-page">

                {podcasts.map((podcast) => (
                    <div key={podcast.url} className="podcast-item">
                        <div>
                            <h3 className='titlepodcastepi'>{podcast.title}</h3>
                            <p>{podcast.texte}</p>
                            <p>{podcast.date}</p>
                        </div>
                        <div className='position-buttonpod'>
                            <button
                                className="round-button play-button"
                                onClick={() => togglePlayPause(podcast.url)}>
                                {currentlyPlaying === podcast.url && !isPaused
                                    ? (<img src="/images/pause.png" alt="Pause"/>)
                                    : (<img src="/images/play.png" alt="Écouter"/>)}
                            </button>
                            <button
                                className="round-button2 download-button"
                                onClick={() => downloadPodcast(podcast.url)}>
                                <img src="/images/download.png" alt="Télécharger"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <audio ref={audioRef}/>
            <Footer/>
        </div>
    );
}

export default Podcast;
