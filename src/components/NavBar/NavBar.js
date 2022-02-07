import logo007 from './imagen/logo007.png'
import CarWidget, { IconoCard, iconoCard } from './CarWidget'


function NavBar() {
    return (
        <nav style={{border: "3px solid red"}}>
            <img className='logo' src={logo007}/> 
            <div className='menu' >
                <ul>
                    <li><a href="#">Promocion</a></li>
                    <li><a href="#">Indumentaria</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <IconoCard />
        </nav>
        ) 
    }

export default NavBar;