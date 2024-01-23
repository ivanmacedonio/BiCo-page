import React from "react";
import webs from "../assets/Webs.webp";
import "../styles/Webs.css";
export const Webs = () => {
  return (
    <div className="websContainer">
      <div className="imageWebContainer">
        <img src={webs} alt="" />
      </div>
      <div className="textWebContainer">
        <h2>¿Qué Tipo De Web Necesitás?</h2>
        <h1>Elegí el que más te convenga.</h1>
        <p>
          Hay un tipo de web para cada necesidad, nosotros lo hacemos realidad.
          Elegí el que más te convenga y te lo cotizamos.
        </p>
        <ul>
          <li>Ecommerce</li>
          <li>Institucional</li>
          <li>Landing / Onepage / Blog</li>
          <li>Proyecto Personalizado</li>
        </ul>
        <button>Ver Portafolio {'>'} </button>
      </div>
    </div>
  );
};
