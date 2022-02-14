import carritoDeCompra from './imagen/cart-solid-24.png';
import camisa1 from './imagen/camisa1.jpeg';
import camisa2 from './imagen/camisa2.jpeg';
import pantalon1 from './imagen/pantalon1.jpg';
import pantalon2 from './imagen/pantalon2.jpg';
import loading from './imagen/loading.gif';
import hombrePaginaPrincipal from './imagen/hombre.jpg'

export default {
    "carrito" : carritoDeCompra,
    "cam1" : camisa1,
    "cam2" : camisa2,
    "pant1" : pantalon1,
    "pant2" : pantalon2,
    "cargando" : loading,
    "fondoPaginaPrincipal": hombrePaginaPrincipal
}

export  const IconoCard = () => {
    return (
        <img className='logoCarrito' src={carritoDeCompra} alt="carrito de compra" />    )
}