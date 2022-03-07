import CarWidget from "../NavBar/CarWidget";
import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getFirebase, getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const { categoryId } = useParams();
  
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    const selectedProduct = productsCollection.doc(productoId);
  
    setCargando(true);
    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("El producto no existe");
        setProducts({ ...response.data(), id: response.id });
      })
      .finally(() => setCargando(false));

    // const URL = `http://localhost:3001/BaseDeDatos/${productoId}`;
    // setCargando(true);
    // fetch(URL)
    //   .then((reponse) => reponse.json())
    //   .then((json) => setProducts(json))
    //   .catch((error) => console.error(error))
    //   .finally(() => setCargando(false));
  }, [productoId]);

  if (products) {
    return (
      <div>
        <ItemDetail detalle={products} />
      </div>
    );
  }
};

export default ItemDetailContainer;
