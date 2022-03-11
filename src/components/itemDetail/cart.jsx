import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

const Cart = () => {
  // const [name,setName] = useState("");
  // const [apell,setApell] = useState("");
  // const [email,SetEmail] = useState("");
  // const [city,setCity] = useState("");
  // const [usuario,setUsuario] = useState("");
  // const [password,setPassword] = useState("");

  const [formState,setFormState] = useState({
    nombre:"",
    apellido:"",
    email:"",
    ciudad:"",
    usuario:"",
    password:"",
  })

  const { cart, removeItem, clear, newStock, totalPrice } = useCart();

  const navegate = useNavigate();



  // const precioTotal =(cart)=>{
  //   let total = 0;
  //   cart.forEach(element => {
  //     total += element.item.precio * element.item.quantity;
  //   });
  //   return total;
  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newOrder = {
      buyer:{
        nombre,
        apellido,
        ciudad,
        usuario,
      },
      item:cart,
      total:totalPrice(cart)
    };
    console.log(newOrder);
    const db = getFirestore()
    db.collection("ordenes")
    .add(newOrder)
    .then((res)=> {
      console.log("Compra Realizada", res.id);
      navegate(`/producto/final/${res.id}`);
    })
    .catch((err)=> console.log("Hubo un error", err))
  }


  let irHome = useNavigate();
  let irProduct = useNavigate();

  const home = () => {
    irHome("/");
  };

  const product = () => {
    irProduct("/producto");
  };
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="card text-center" style={{ width: 800 }}>
            <h1>Terminar la Compra</h1>
            <div className="card-body">
                {cart.map((result) => {
                    return (
                        <div key={result.item.id}>
                            <h5>Nombre: {result.item.nombre}</h5>
                            <p>Cantidad Comprada: {result.quantity}</p>
                            <p>Stock disponible todavia: {result.item.stock} </p>
                            <p>Precio: {result.item.precio} $</p>
                            <button className="btn btn-primary m-3" onClick={()=>removeItem (result.item.id)}>Borrar Producto</button>
                            <button className="btn btn-primary m-3" onClick={clear}>Borrar Todo</button>
                        </div>
                    );
                })}
            </div>
            <section>
            <div className="container-fluid pt-3">
                <div className="row align-items-center">
                    <div className="col">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            {/* <img class="img-fluid" src="estilo/imagen/" alt="Imagen para formulario"> */}
                            <h2 id="contacto" className="text-center pt-4 fs-1">Completa Tus Datos</h2>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault01" className="form-label">Nombre</label>
                                <input type="text" className="form-control text-center" id="nombre" placeholder="Ingrese su Nombre" value={formState.nombre} onChange={(e)=> setName(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                                <input type="text" className="form-control text-center" id="apellido" placeholder="Ingrese su Apellido" value={formState.apellido} onChange={(e)=> setApell(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input type="text" className="form-control text-center" id="email" aria-describedby="inputGroupPrepend2" placeholder="Ingrese su Email" value={formState.email} onChange={(e)=> SetEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault03" className="form-label">Ciudad</label>
                                <input type="text" className="form-control text-center" id="ciudad" placeholder="Ingrese la Ciudad" value={formState.ciudad} onChange={(e)=> setCity(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault03" className="form-label ">Usuario</label>
                                <input type="text" className="form-control text-center" id="usuario" placeholder="Ingrese un Usuario" value={formState.usuario} onChange={(e)=> setUsuario(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault03" className="form-label ">Contraseña</label>
                                <input type="password" className="form-control text-center" id="contraseña" placeholder="Ingrese una Contraseña" value={formState.password} onChange={(e)=> setPassword(e.target.value)} required />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary fs-3" type="submit">Finalizar Compra y Registro</button>
                                <button className="btn btn-danger fs-3" type="reset">Limpiar Formulario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
            <button className="btn btn-primary p-3 m-2" onClick={product}>
              Volver a la Pagina de Productos
            </button>
            <button className="btn btn-primary p-3 m-2" onClick={home}>
              Volver a la Pagina de Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
