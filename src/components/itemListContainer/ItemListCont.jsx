import CarWidget from "../NavBar/CarWidget";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";
import "./itemListStyle.css";


const MuestraDeLaCard = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  
  const db = getFirestore();
  const collection = db.collection("productos");


  useEffect(() => {

    let productsCollection;

    if (categoryId) {
      productsCollection = db
        .collection("productos")
        .where("elementId", "==", Number(categoryId));
    } else {
      productsCollection = db.collection("productos");
    }

    const getDataFromFirestore = async () => {
      setCargando(true);
      try {
        const response = await productsCollection.get();
        if (response.empty) console.log("No hay Productos");
        setProducts(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        setError(err);
      } finally {
        setCargando(false);
      }
    };
    getDataFromFirestore();
    
  }, [categoryId]);

  return (
    <>
      {cargando ? (
        <img className="cargandoPagina" src={CarWidget.cargando} />
      ) : (
        <div className="container-fluid fondo">
          <div className="row d-flex justify-content-center">
            <ItemList items={products} />
          </div>
        </div>
      )}
    </>
  );
};

export default MuestraDeLaCard;
