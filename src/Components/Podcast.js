 import Footer from './Footer';
 import React, { useState, useRef } from 'react';
 import '../Styles/Podcast.css';
 
 function Podcast() {
   const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
   const [isPaused, setIsPaused] = useState(true); // Ajoutez un état pour suivre la pause
   const audioRef = useRef(null);
 
   const podcasts = [
     {
       title: "Podcast 1",
       url: "/podcasts/Episode1.mp3",
       date: "Date du podcast 1",
     },
     {
       title: "Podcast 2",
       url: "/podcasts/Episode2.mp3",
       date: "Date du podcast 2",
     },
     {
       title: "Podcast 3",
       url: "/podcasts/Episode3.mp3",
       date: "Date du podcast 3",
     },
     {
       title: "Podcast 4",
       url: "/podcasts/Episode4.mp3",
       date: "Date du podcast 4",
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
     <div>
       <div className='titrepodcast'>
         <h1>Podcasts</h1>
       </div>
 
       <div className='podcastbl1'>
         {/* Contenu de votre premier podcast */}
       </div>
 
       <div className="podcast-page">
         <h1>Liste de Podcasts</h1>
         {podcasts.map((podcast) => (
           <div key={podcast.url} className="podcast-item">
             <h3>{podcast.title}</h3>
             <p>Date: {podcast.date}</p>
             <button
               className="play-button"
               onClick={() => togglePlayPause(podcast.url)}
             >
               {currentlyPlaying === podcast.url && !isPaused // Utilisez l'état de pause
                 ? 'Pause'
                 : 'Écouter'}
             </button>
             <button
               className="download-button"
               onClick={() => downloadPodcast(podcast.url)}
             >
               Télécharger
             </button>
           </div>
         ))}
       </div>
 
       <audio ref={audioRef} />
       <Footer />
     </div>
   );
 }
 
 export default Podcast;
 