import { motion } from "framer-motion";
import React, { useEffect } from "react";
import "../styles/Portfolio.css";
export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.section
      className="portfolio-cnt"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="header-portfolio">
        <h1>Portfolio.</h1>
      </div>
      <section className="portfolio">
        <h2>Diseñar Webs Es Nuestra Pasión.</h2>
        <p>
          Algunos de nuestros últimos trabajos y plantillas. No dudes en
          consultarnos para mas ejemplares
        </p>
      </section>
      <div className="webs-cnt">
        <article
          className="box"
          onClick={() => {
            window.location.href = "https://franciscopedroza.netlify.app/";
          }}
        >
          <h1>Francisco Pedroza</h1>
        </article>
        <article
          className="box"
          onClick={() => {
            window.location.href = "https://rockit-dev.netlify.app/";
          }}
        >
          <h1>Rockit</h1>
        </article>
        <article
          className="box"
          onClick={() => {
            window.location.href = "https://conekta.netlify.app/";
          }}
        >
          <h1>Conekta</h1>
        </article>{" "}
        <article
          className="box"
          onClick={() => {
            window.location.href = "https://bemus.netlify.app/";
          }}
        >
          <h1>Bemus</h1>
        </article>
        <article
          className="box"
          onClick={() => {
            window.location.href = "https://www.vandalia.com.ar/";
          }}
        >
          <h1>Vandalia</h1>
        </article>
        <article
          className="box"
          onClick={() => {
            window.location.href = "https://ivanmacedonio.netlify.app/";
          }}
        >
          <h1>Ivandev</h1>
        </article>
      </div>
    </motion.section>
  );
};
