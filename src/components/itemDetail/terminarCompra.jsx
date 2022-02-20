import { useNavigate } from "react-router-dom";


const TerminarCompra = () =>{

    let irHome = useNavigate();
    let irProduct = useNavigate();

    const home = () => {
        irHome("/");
    }

    const product = () =>{
        irProduct ("/producto")
    }

    return( 
    <div>
        <h1>Terminaste Compra</h1>
        <button className="btn btn-primary" onClick={product} >Volver a la Pagina de Productos</button>
        <button className="btn btn-primary" onClick={home}>Volver a la Pagina de Inicio</button>
    </div>

    );
}

export default TerminarCompra;