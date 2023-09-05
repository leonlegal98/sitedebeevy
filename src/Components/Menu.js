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
    <img
        src="menu-icon.png"
        alt="Menu Icon"
        className="menu-icon2"
        onClick={toggleMenu}
      />
      <div className="menuresponlien">
                    <Link to="bio">Bio</Link>
                    <Link to="atelier">Ateliers d'écriture</Link>
                    <Link to="tarif">Tarifs</Link>
                    <Link to="presse">Presse</Link>
                    <Link to="contact">Contact</Link>
        </div>

    </div>
    
      
    </>
  ) : null;
    

    return (

        <div>

            <div className="menu">
                <div className="menu-left">
                    <Link to="/">
                        <img className='logoim1' src="/images/imagegroupbee.png" alt="Image 1"/>
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
                    src={isMenuOpen ? "/images/logofooterresp.png" : "menu-icon.png"}
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
