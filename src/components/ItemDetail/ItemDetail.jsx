import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ nombre, precio, img, detail }) => {
  return (
    <div className="div_descripcion">
      <h2>{nombre} </h2>
      <h2>${precio} </h2>
      <p> {detail}</p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
