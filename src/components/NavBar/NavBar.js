import CarWidget, { IconoCard, iconoCard } from './CarWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css"
import { useCart } from '../../context/CartContext';


function NavBar() {

    const { cartCantidad } = useCart()

    return (
        <div className="position-relative fondo_principal p-1 img-flex">
            <nav className="navbar navbar-expand-lg  justify-content-center">
                <img className='logo__nav position-absolute bottom-20 start-0' src={CarWidget.logo007Blanco}/>
                <ul className="nav nav-pills d-flex p-3 gap-3">
                    <li className="nav-item">
                        <Link className="nav-link active btn-lg" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active btn-lg" to="/producto">All Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active btn-lg" to="/producto/categoria/1">Indumentaria Masculina</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active btn-lg" to="/producto/categoria/2">Indumentaria Femenina</Link>
                    </li>
                </ul>
                <Link className='position-absolute bottom-18 end-0' to="/producto/cart"> <IconoCard /><strong>({cartCantidad})</strong></Link>
            </nav>
        </div>
        ) 
    }

export default NavBar;