import '../Styles/Home.css';
import '../Styles/Menu.css';
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Bio from './Bio.js';
import Home from './Home.js';


function Menu() {
    return (

        <div className="menu">
            <div className="menu-left">
                <img className='logoim1' src="/images/logoimage.png" alt="Image 1"/>
                <img className='logoim2' src="/images/atelierbeevy.png" alt="Image 2"/>
            </div>
            <div className="menu-right">
                <Link to="bio">Bio</Link>
                <Link to="atelier">Ateliers d'écriture</Link>
                <Link to="presse">Presse</Link>
                <Link to="tarif">Tarifs</Link>
                <Link to="contact">Contact</Link>
            </div>
        </div>

    );
}

export default Menu;
