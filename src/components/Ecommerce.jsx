import { motion } from "framer-motion";
import React from "react";
import "../styles/Ecommerce.css";

export const Ecommerce = () => {
  return (
    <div className="ecommerceContainer">
      <div className="ecommerceGif">
        <iframe
          src="https://giphy.com/embed/QVUL20w0FwLKnQuX4D"
          width="480"
          height="379"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <motion.div
        className="ecommerceText"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          También desarrollamos tu tienda <b>online</b>
        </h1>
        <h2>El e-commerce creció un 87% el año pasado.</h2>
        <p>
          En BiXo creamos tu sitio en base a tus necesidades y le damos su
          correspondiente mantenimiento.
        </p>
      </motion.div>
    </div>
  );
};
