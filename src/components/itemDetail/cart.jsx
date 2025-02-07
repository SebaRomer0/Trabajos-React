import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import "./itemDetailStyle.css";
import CarWidget from "../NavBar/CarWidget";

const Cart = (state) => {
  const [name, setName] = useState("");
  const [apell, setApell] = useState("");
  const [email, SetEmail] = useState("");
  const [city, setCity] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [condicion, setCondicion] = useState(true);

  const { cart, removeItem, clear, totalPrice , cartCantidad } = useCart();

  const navegate = useNavigate();

  // const precioTotal =(cart)=>{
  //   let total = 0;
  //   cart.forEach(element => {
  //     total += element.item.precio * element.item.quantity;
  //   });
  //   return total;
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      buyer: {
        name,
        apell,
        city,
        usuario,
        email,
      },
      item: cart,
      total: totalPrice(cart),
    };
    console.log(newOrder);
    const db = getFirestore();
    db.collection("ordenes")
      .add(newOrder)
      .then((res) => {
        console.log("Compra Realizada", res.id);
        navegate(`/producto/final/${res.id}`);
      })
      .catch((err) => console.log("Hubo un error", err));
  };

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
      {!cartCantidad ? (
        <div className="container-fluid fondo">
          <div className="row d-flex justify-content-center">
            <div className="card text-center estilo__cart color__titulos"
              style={{ width: 500, height: 300 }}>
              <h1>No tenes productos en tu Carrito de Compra</h1>
              <button className="btn btn-primary p-3 m-2" onClick={product}>
                Volver a la Pagina de Productos
              </button>
              <button className="btn btn-primary p-3 m-2" onClick={home}>
                Volver a la Pagina de Inicio
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid fondo">
          <div className="row d-flex justify-content-center">
            <div
              className="card text-center estilo__cart color__titulos"
              style={{ width: 900, height: 1110 }}
            >
              <h1>Terminar la Compra</h1>
              <div className="card-body">
                {cart.map((result) => {
                  return (
                    <div key={result.item.id}>
                      <h5>Nombre: {result.item.nombre}</h5>
                      {/* <img src={require(`../NavBar/imagen/indumentaria/${result.img}`)} className="card-img-top"/> */}
                      <p>Cantidad Comprada: {result.quantity}</p>
                      <p>Precio: {result.item.precio} $</p>
                      <button
                        className="btn btn-primary m-3"
                        onClick={() => removeItem(result.item.id)}
                      >
                        Borrar Producto
                      </button>
                      <button className="btn btn-primary m-3" onClick={clear}>
                        Borrar Todo
                      </button>
                    </div>
                  );
                })}
              </div>
              <section className="color__titulos">
                <div className="container-fluid pt-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <form className="row g-3" onSubmit={handleSubmit}>
                        <img
                          className="logo rounded mx-auto d-block"
                          src={CarWidget.logo007Negro}
                        />
                        <h2 className="text-center titulos__cart fs-1">
                          Completa Tus Datos
                        </h2>
                        <div className="col-md-6">
                          <label
                            htmlFor="validationDefault01"
                            className="form-label"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            id="nombre"
                            placeholder="Ingrese su Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="validationDefault02"
                            className="form-label"
                          >
                            Apellido
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            id="apellido"
                            placeholder="Ingrese su Apellido"
                            value={apell}
                            onChange={(e) => setApell(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="validationDefaultUsername"
                            className="form-label"
                          >
                            Email
                          </label>
                          <div className="input-group">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend2"
                            >
                              @
                            </span>
                            <input
                              type="email"
                              className="form-control text-center"
                              id="email"
                              aria-describedby="inputGroupPrepend2"
                              placeholder="Ingrese su Email"
                              value={email}
                              onChange={(e) => SetEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="validationDefault03"
                            className="form-label"
                          >
                            Ciudad
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            id="ciudad"
                            placeholder="Ingrese la Ciudad"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="validationDefault03"
                            className="form-label "
                          >
                            Usuario
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            id="usuario"
                            placeholder="Ingrese un Usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="validationDefault03"
                            className="form-label "
                          >
                            Contraseña
                          </label>
                          <input
                            type="password"
                            className="form-control text-center"
                            id="contraseña"
                            placeholder="Ingrese una Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary fs-3"
                            type="submit"
                          >
                            Finalizar Compra y Registro
                          </button>
                          <button className="btn btn-danger fs-3" type="reset">
                            Limpiar Formulario
                          </button>
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
      )}
    </div>
  );
};

export default Cart;
