import logo007 from './imagen/logo007.png'
import CarWidget, { IconoCard, iconoCard } from './CarWidget'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav style={{border: "3px solid red",background: "#999898"}}>
            <img className='logo' src={logo007}/> 
            <div className='menu' >
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/producto">Indumentaria Masculina</Link></li>
                </ul>
            </div>
            <li><Link to="/producto/cart"> <IconoCard /></Link></li>          
        </nav>
        ) 
    }

export default NavBar;