import logo007 from './imagen/logo007.png'

function NavBar() {
    return (
        <nav>
            <img className='logo' src={logo007}/> 
            <div className='menu' >
                <ul>
                    <li><a href="#">Promocion</a></li>
                    <li><a href="#">Indumentaria</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
        ) 
    }

export default NavBar;