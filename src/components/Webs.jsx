import { motion } from "framer-motion";
import React from "react";
import webs from "../assets/Webs.webp";
import "../styles/Webs.css";
export const Webs = () => {
  return (
    <div className="websContainer">
      <motion.div
        className="imageWebContainer"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={webs} alt="" />
      </motion.div>
      <motion.div
        className="textWebContainer"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
        <button>Ver Portafolio {">"} </button>
      </motion.div>
    </div>
  );
};
