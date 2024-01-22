import React from "react";
import admin from "../assets/adminsite.webp";
import config from '../assets/config.webp';
import email from '../assets/wp.webp';
import "../styles/Standards.css";
export const Standards = () => {
  return (
    <div className="standardsContainer">
      <div className="standardsText">
        <h1 id="estandaresTitulo">Algunos estándares de nuestros Ecommerce...</h1>
        <div className="estandaresList">
          <div className="cardEstandares">
            <img src={admin} alt="" />
            <div className="estandaresText">
              <h1>Centro de control</h1>
              <p>
                Administra el sitio web desde un sencillo panel de
                administrador, donde por ejemplo, vas a poder cargar nuevos
                productos, administrar pedidos, enviar correos, entre otras
                cosas.
              </p>
            </div>
          </div>
          <div className="cardEstandares">
            <img src={email} alt="" />
            <div className="estandaresText">
              <h1>Contacto directo</h1>
              <p>
                Tus clientes pueden contactarse mediante canales de Whatsapp,
                Email, entre otros.
              </p>
            </div>
          </div>
          <div className="cardEstandares">
            <img src={config} alt="" />
            <div className="estandaresText">
              <h1>Mantenimiento constante</h1>
              <p>
                Podrás contactarnos siempre que lo necesites, además, nos
                encargamos de que tu sitio siempre esté en correcto
                funcionamiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
