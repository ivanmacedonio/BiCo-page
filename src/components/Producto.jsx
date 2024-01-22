import React from "react";
import card1 from "../assets/imagen1.webp";
import card2 from '../assets/imagen2.webp';
import card3 from '../assets/imagen3.webp';
import "../styles/Producto.css";
export const Producto = () => {
  return (
    <div className="productoContainer">
      <div className="headerProducto">
        <h2>Lo que ofrecemos</h2>
        <p>Algunas características que acompañan a nuestros sitios</p>
      </div>
      <div className="cardsProductoContainer">
        <div className="cardProducto">
          <img src={card2} alt="" />
          <h3>Personalizable</h3>
          <p>
            El software a medida se adapta perfectamente a los requisitos y
            procesos específicos de tu empresa. Puedes personalizar cada
            aspecto, desde la interfaz de usuario hasta las funcionalidades
            internas, garantizando que se ajuste de manera óptima a tus
            necesidades comerciales.
          </p>
        </div>
        <div className="cardProducto">
          <img src={card1} alt="" />
          <h3>Análisis constante</h3>
          <p>
            La implementación de herramientas analíticas específicas se vuelve
            más efectiva en un sitio web personalizado. Esto permite un
            seguimiento detallado del comportamiento del usuario, métricas de
            rendimiento del sitio y otras métricas clave. La información
            recopilada facilita la toma de decisiones informadas y ajustes
            estratégicos.
          </p>
        </div>
        <div className="cardProducto">
          <img src={card3} alt="" />
          <h3>Escalable</h3>
          <p>
            A medida que tu empresa crece o cambian las necesidades comerciales,
            el software personalizado puede escalar y adaptarse fácilmente. Esta
            flexibilidad garantiza que la inversión en desarrollo de software
            sea a largo plazo y pueda evolucionar junto con la empresa.
          </p>
        </div>
      </div>
    </div>
  );
};
