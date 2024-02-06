import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import webs from "../assets/siteswebv.webp";
import "../styles/Webs.css";
export const Webs = () => {
  return (
    <section className="websContainer">
      <motion.div
        className="imageWebContainer"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={webs} alt="Ecommerce" />
      </motion.div>
      <motion.div
        className="textWebContainer"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>¿Qué Tipo De Web Necesitás?</h3>
        <h2>Elegí el que más te convenga.</h2>
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
        <Link to={'/portfolio'} className="link1">Ver Portafolio {">"}</Link>
      </motion.div>
    </section>
  );
};
