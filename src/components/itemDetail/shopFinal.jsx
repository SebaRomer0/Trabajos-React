import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

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
      <div>
          <h1>Compra Finalizada</h1>
          <h2>Gracias por su Compra:{orden.buyer.id} </h2>
      </div>
    
  );
};

export default ShopFinal;
