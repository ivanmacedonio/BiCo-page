import { motion } from "framer-motion";
import React from "react";
import check from "../assets/check.svg";
import navegador from "../assets/chrome.svg";
import responsive from "../assets/phone.svg";
import portada from '../assets/portada.png';
import "../styles/Ventajas.css";
export const Ventajas = () => {
  return (
    <div className="ventajasContainer">
      <div className="ventajasGif">
       <img src={portada} alt="" />
      </div>
      <motion.div
        className="ventajasText"
        initial={{ y: -120, opacity: 0 }}
        whileInView={{ y: -50, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="ventajasCard">
          <div className="imagenCard">
            <img src={check} alt="" />
          </div>
          <div className="textCard">
            <h1>Incrementa tus ventas</h1>
            <h3>
              Llega a muchos mas visitantes con un sitio web optimizado para
              vender.
            </h3>
          </div>
        </div>
        <div className="ventajasCard">
          <div className="imagenCard">
            <img src={navegador} alt="" />
          </div>
          <div className="textCard">
            <h1>Promovemos tu identidad</h1>
            <h3>
              Posicionamos el sitio web de forma estratégica para que los
              clientes tengan un fácil acceso a la plataforma
            </h3>
          </div>
        </div>
        <div className="ventajasCard">
          <div className="imagenCard">
            <img src={responsive} alt="" />
          </div>
          <div className="textCard">
            <h1>Diseño responsivo</h1>
            <h3>
              Sitios web adaptados a todo tipo de pantallas y dispositivos
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
