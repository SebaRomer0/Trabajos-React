import logo007 from './imagen/logo007.png'
// import carritoDeCompra from './imagen/cart-solid-24.png'
import CarWidget from './CarWidget'


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
            <img className='logoCarrito' src={CarWidget.carrito} alt="carrito de compra" />
        </nav>
        ) 
    }

export default NavBar;