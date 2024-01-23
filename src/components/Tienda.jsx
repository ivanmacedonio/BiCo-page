import React from "react";
import check from "../assets/check2.svg";
import danger from "../assets/danger.svg";
import "../styles/Tienda.css";
export const Tienda = () => {
  return (
    <div className="tiendaContainer">
      <h1>
        Nuestros <b>productos</b>
      </h1>
      <div className="tiendaList">
        <div className="tiendaCard">
          <h2>Landing / Onepage</h2>
          <h3>
            Una Landing o Onepage son páginas web donde el cliente tiene a la
            vista todo lo necesario para tomar la decisión de compra. Conocerá
            Acerca de tu negocio y podrá contactarte fácilmente.
          </h3>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Carga rápida </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p> Información ubicada estratégicamente </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Formulario de Contacto </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Posibilidad de agregar Método de pago </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Rápida navegación </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Imágenes y contenido personalizado </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>
              Sección Inicio, Nosotros, Servicios y Contacto (Blog opcional)
            </p>
          </div>
          <div className="listItem">
            <img src={danger} alt="" />
            <p>Consultar por soporte mensual extra </p>
          </div>
        </div>
        <div className="tiendaCard">
          <h2>Tienda online</h2>
          <h3>
            Tener una tienda online es la forma más eficaz de lanzar tu negocio
            al mundo digital. Ofrece tus servicios y productos en un sitio web
            para dar el siguiente paso
          </h3>
          <div className="listItem">
            <img src={check} alt="" />
            <p>
              Panel de administrador para modificar / agregar productos, stock y
              ofertas
            </p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Carga rápida</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Cantidad de productos ilimitados</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Métodos de pago y envío</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Botón de Whatsapp / Formulario de contacto</p>
          </div>
          <div className="listItem">
            <img src={danger} alt="" />
            <p>Consultar por Soporte Mensual extra</p>
          </div>
        </div>
        <div className="tiendaCard">
          <h2>Proyecto Personalizado</h2>
          <h3>
            Posiblemente una categoría no es suficiente para lo que estás
            buscando, quizás necesitas una web institucional que cuente con un
            pequeño ecommerce integrado en el cual puedas exponer una serie de
            productos. En estos casos es ideal un sitio personalizado
          </h3>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Carga rápida</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Secciones a pedido</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Maquetado y Diseño Personalizado</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Integraciones con Softwares o APIS</p>
          </div>
          <div className="listItem">
            <img src={check} alt="" />
            <p>Feedback constante</p>
          </div>
          <div className="listItem">
            <img src={danger} alt="" />
            <p>Consultar por Soporte Mensual extra</p>
          </div>
        </div>
      </div>
    </div>
  );
};
