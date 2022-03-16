import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import "./itemDetailStyle.css"


const ShopFinal = () => {
  const { ordenId } = useParams();
  const [orden, setOrden] = useState({});

  useEffect(() => {
    const db = getFirestore();
    db.collection("ordenes")
      .doc(ordenId)
      .get()
      .then((res) => setOrden({ id: res.id, ...res.data() }));
  }, [ordenId]);

  

  return (
      <div className="container-fluid fondo color__titulos text-center">
        <div className="row d-flex justify-content-center">
          <div className="card text-center estilo__cart color__titulos" style={{ width: 900, height:1110 }}>
            <h1>Compra Finalizada</h1>
            <h2>Gracias por su Compra: ,{orden?.buyer?.name}, </h2>
            <h2>Enviaremos todos sus Datos de la Compra a su Email ,{orden?.buyer?.email}, de la Ciudad de ,{orden?.buyer?.city}</h2>
          </div>
        </div>
      </div>
  );
};

export default ShopFinal;
