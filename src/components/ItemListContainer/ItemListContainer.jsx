import { useState, useEffect } from "react";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const funcion = idCategory ? getProductoPorCategoria : getProductos;

    funcion(idCategory).then((res) => setProductos(res));
  }, [idCategory]);

  return (
    <>
      <h2 className="saludo"> Bienvenidos a Restaurante Ramallo! </h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
