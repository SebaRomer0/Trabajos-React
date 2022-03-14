import carritoDeCompra from './imagen/cart-solid-24.png';
import camisa1 from './imagen/indumentaria/camisa1.jpeg';
import camisa2 from './imagen/indumentaria/camisa2.jpeg';
import pantalon1 from './imagen/indumentaria/pantalon1.jpg';
import pantalon2 from './imagen/indumentaria/pantalon2.jpg';
import loading from './imagen/loading.gif';
import hombrePaginaPrincipal from './imagen/hombre.jpg';
import remeraf1 from './imagen/indumentaria/remeraf1.jpeg';
import remeraf2 from './imagen/indumentaria/remeraf2.jpeg';
import pantalonf1 from './imagen/indumentaria/pantalonf1.jpeg';
import pantalonf2 from './imagen/indumentaria/pantalonf2.jpeg';
import logo007Negro from './imagen/logo007.png';
import logo007Blanco from './imagen/logo007-blanco.png'
import error404 from './imagen/cavernicola.gif'
import { useCart } from '../../context/CartContext';

export default {
    "carrito" : carritoDeCompra,
    "cam1" : camisa1,
    "cam2" : camisa2,
    "pant1" : pantalon1,
    "pant2" : pantalon2,
    "cargando" : loading,
    "fondoPaginaPrincipal": hombrePaginaPrincipal,
    "remeraf1": remeraf1,
    "remeraf2": remeraf2,
    "pantalonf1": pantalonf1,
    "pantalonf2": pantalonf2,
    "logo007Negro": logo007Negro,
    "logo007Blanco": logo007Blanco,
    "error404": error404
}

export  const IconoCard = () => {
    const { cartCantidad } =useCart()
    return (
        <img className='logoCarrito' src={carritoDeCompra} alt="carrito de compra" />
            )
}