import '../Styles/Home.css';
import '../Styles/Menu.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Bio from './Bio.js';
import Home from './Home.js';

function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = isMenuOpen ? (
    <>
    <div className='responshow'>
    
      <div className="menuresponlien">
                    <Link  onClick={toggleMenu} to="/">Accueil</Link>
                    <Link  onClick={toggleMenu} to="bio">Bio</Link>
                    <Link  onClick={toggleMenu} to="atelier">Ateliers d'écriture</Link>
                    <Link  onClick={toggleMenu} to="tarif">Tarifs</Link>
                    <Link  onClick={toggleMenu} to="presse">Presse</Link>
                    <Link  onClick={toggleMenu} to="contact">Contact</Link>
        </div>
        <div className='socialmenu'>
                            <Link to="https://www.linkedin.com/in/beevy-jalma-11382b1b9/" target="_blank">
                            <img src='/images/linkedin.png'/>
                            </Link>
                            <Link to="https://www.facebook.com/latelierdebeevy" target="_blank">
                            <img src='/images/facebook.png'/>
                            </Link>
                            <Link to="https://www.instagram.com/latelierdebeevy/" target="_blank">
                            <img src='/images/instagram.png'/>
                            </Link>
                            <Link to="https://www.youtube.com/@LatelierdeBeevy" target="_blank">
                            <img className='yotubefooter' src='/images/youtube.png'/>
                            </Link>
                        </div>

    </div>
    
      
    </>
  ) : null;
    

    return (

        <div>

            <div className="menu">
                <div className="menu-left">
                    <Link to="/">
                        <img className='logoim1' src="/images/logo.png" alt="Image 1"/>
                    </Link>
                </div>
                <div className="menu-right">
                    <Link to="bio">Bio</Link>
                    <Link to="atelier">Ateliers d'écriture</Link>
                    <Link to="tarif">Tarifs</Link>
                    <Link to="presse">Presse</Link>
                    <Link to="contact">Contact</Link>
                </div>

            </div>
            <div className='menurespon'>

           
                        <div className="top-bar"></div>
                <div className="menu-container">
                    {menuItems}
                    <div className='carrerespon'>
                    <img
                    src={isMenuOpen ? "/images/close.png" : "/images/menu.png"}
                    alt="Menu Icon"
                    className="menu-icon"
                    onClick={toggleMenu}
                    />

                    </div>
                    
      </div>
      </div>
        </div>
    );
}

export default Menu;
