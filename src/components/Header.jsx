import { motion } from "framer-motion";
import React, { useState } from "react";
import menu from "../assets/hamburguesa.svg";
import logo from "../assets/logo.svg";
import "../styles/Header.css";
export const Header = () => {
  const [show, setShow] = useState(false);
  const ListVariants = {
    hover: {
      scale: 1.2,
      color: "orange",
    },
  };
  const ListItem = ({ children }) => {
    return (
      <motion.li
        variants={ListVariants}
        whileHover="hover"
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.li>
    );
  };
  return (
    <div>
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="" />
          <label>
            <h2>BiXo</h2>
            <h4>Soluciones digitales</h4>
          </label>
        </div>
        <div className="links">
          <ul>
            <ListItem>Inicio</ListItem>
            <ListItem>Producto</ListItem>
            <ListItem>Plan de precios</ListItem>
            <ListItem>Contacto</ListItem>
          </ul>
        </div>
      </div>
      <div className="navBarMobile">
        <div className="logo">
          <img src={logo} alt="" />
          <img
            src={menu}
            alt=""
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>

        <motion.div
          initial={{ maxHeight: 0 }}
          animate={{ maxHeight: show ? 1000 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ pointerEvents: show ? "auto" : "none", overflow: "hidden" }}
        >
          <div className="links">
            <ul>
              <li>Inicio</li>
              <li>Producto</li>
              <li>Plan de precios</li>
              <li>Contacto</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
