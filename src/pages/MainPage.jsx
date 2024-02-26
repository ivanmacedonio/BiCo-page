import React from "react";
import wp from "../assets/wp1.svg";
import { Contact } from "../components/Contact";
import { Ecommerce } from "../components/Ecommerce";
import { Inicio } from "../components/Inicio";
import { Tienda } from "../components/Tienda";
import { Ventajas } from "../components/Ventajas";
import { Webs } from "../components/Webs";

import "../styles/MainPage.css";
export const MainPage = () => {
  function handleWhatsAppClick() {
    const number = "+541127405227";
    const message =
      "¡Hola! ¿Cómo estás? Estoy interesado en un sitio web a medida. ¿Podrías ayudarme con eso?";
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  }
  return (
    <main className="mainPageContainer">
      <div className="Inicio">
        <img src={wp} alt="whatsapp" id="wp" onClick={handleWhatsAppClick} />
        <Inicio></Inicio>
        <Tienda></Tienda>
        <Webs></Webs>
        <Ecommerce></Ecommerce>
        <Ventajas></Ventajas>
        <Contact></Contact>
      </div>
    </main>
  );
};
