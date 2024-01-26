import { motion } from "framer-motion";
import React from "react";
import "../styles/Inicio.css";
export const Inicio = () => {
  function handleScroll() {
    window.scrollTo({
      top: window.scrollY + 0.8 * window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="containerInicio">
      <div className="logoContainer">
        <h2>BIXO</h2>
      </div>
      <motion.div
        className="textInicio"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Diseño Web </h2>
        <h1>Personalizado</h1>

        <div class="main__action" onClick={handleScroll}>
          <a class="main__scroll" href="#">
            <div class="main__scroll-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </div>

            <span class="main__scroll-text">Scroll</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
