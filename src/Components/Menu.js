import '../Styles/Home.css';
import '../Styles/Menu.css';


function Menu() {
    return (
        
            <div className="menu">
                <div className="menu-left">
                    <img className='logoim1' src="/images/logoimage.png" alt="Image 1"/>
                    <img className='logoim2' src="/images/atelierbeevy.png" alt="Image 2"/>
                </div>
                <div className="menu-right">
                    <a href="./Bio.js">Bio</a>
                    <a href="#">Ateliers d'écriture</a>
                    <a href="#">Médias</a>
                    <a href="#">Tarifs</a>
                    <a href="#">Contact</a>
                </div>

            </div>

    );
}

export default Menu;
