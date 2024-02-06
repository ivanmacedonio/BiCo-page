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
    <header className="containerInicio">
      <div className="logoContainer">
        <h1>BIXO</h1>
      </div>
      <motion.div
        className="textInicio"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Diseño Web</h1>
        <h2>Personalizado</h2>

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
    </header>
  );
};
