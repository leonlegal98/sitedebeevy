import '../Styles/Home.css';
import '../Styles/Menu.css';
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Bio from './Bio.js';
import Home from './Home.js';


function Menu() {
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
        </div>
    );
}

export default Menu;
