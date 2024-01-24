import React from "react";
import "../styles/Contact.css";
export const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="sideCard"></div>
      <div className="formContact">
        <h1>Contactate con nosotros.</h1>
        <p>Esperamos tu mensaje, respondemos en 24hs hábiles</p>
        <form>
          <div className="inputsContact">
            <label>
              <p>Nombre</p>
              <input type="text" />
            </label>
            <label>
              <p>Teléfono</p>
              <input type="number" />
            </label>
            <label className="double">
              <p>Email</p>
              <input type="text" />
            </label>
            <label  className="double">
              <p>Mensaje</p>
              <input type="text" id="message" />
            </label>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
    
  );
};
