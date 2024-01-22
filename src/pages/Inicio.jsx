import React from "react";
import mainImage from '../assets/Group-Video.svg';
import icono2 from "../assets/iconoColaboracion.svg";
import icono3 from "../assets/iconoFlexibilidad.svg";
import icono1 from "../assets/iconoSeguridad.svg";
import "../styles/Inicio.css";
export const Inicio = () => {
  return (
    <div className="containerlobby">
      <div className="lobby">
        <h1>Comunica. Colabora. Crea.</h1>
        <h3>
          BiXo ofrece una forma eficaz y potente de lanzar tu negocio al mundo digital
        </h3>
        <button>Empezar</button>
        <div className="items">
          <label>
            <img src={icono1} alt="" />
            Velocidad y seguridad
          </label>
          <label>
            <img src={icono3} alt="" />
            Flexibilidad y amplitud
          </label>
          <label>
            <img src={icono2} alt="" />
            Feedback constante
          </label>
        </div>
      </div>
      <div className="imagenLobby">
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
};
