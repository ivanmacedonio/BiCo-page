import { motion } from "framer-motion";
import React from "react";
import "../styles/Portfolio.css";
export const Portfolio = () => {
  return (
    <motion.div
      className="portfolio-cnt"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="header-portfolio">
        <h1>Portfolio.</h1>
      </div>
      <div className="portfolio">
        <h2>Diseñar Webs Es Nuestra Pasión.</h2>
        <p>
          Algunos de nuestros últimos trabajos y plantillas. No dudes en
          consultarnos para mas ejemplares
        </p>
      </div>
      <div className="webs-cnt">
        <div
          className="box"
          onClick={() => {
            window.location.href = "https://rockit-dev.netlify.app/";
          }}
        >
          <h1>Rockit</h1>
        </div>
        <div
          className="box"
          onClick={() => {
            window.location.href = "https://conekta.netlify.app/";
          }}
        >
          <h1>Conekta</h1>
        </div>{" "}
        <div
          className="box"
          onClick={() => {
            window.location.href = "https://accenture-dev.netlify.app/";
          }}
        >
          <h1>Accenture</h1>
        </div>
        <div
          className="box"
          onClick={() => {
            window.location.href = "https://bemus.netlify.app/";
          }}
        >
          <h1>Bemus</h1>
        </div>
        <div
          className="box"
          onClick={() => {
            window.location.href = "https://minishop-dev.netlify.app/";
          }}
        >
          <h1>MiniShop</h1>
        </div>
        <div
          className="box"
          onClick={() => {
            window.location.href = "https://fumi-dev.netlify.app/";
          }}
        >
          <h1>FUMI</h1>
        </div>
      </div>
    </motion.div>
  );
};
