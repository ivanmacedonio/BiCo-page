import React from "react";
import "../styles/Tienda.css";
export const Tienda = () => {
  return (
    <div className="tiendaContainer">
      <h1>
        Nuestros <b>productos</b>
      </h1>
      <div className="tiendaList">
        <div className="tiendaCard">
          <h2>Pagina plana</h2>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt, officia error, voluptatum, debitis dignissimos possimus
            sed cum blanditiis ducimus facilis nesciunt soluta impedit
            laboriosam quisquam dolore mollitia cumque. Ratione?
          </p>
        </div>
        <div className="tiendaCard">
          <h2>Tienda online</h2>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt, officia error, voluptatum, debitis dignissimos possimus
            sed cum blanditiis ducimus facilis nesciunt soluta impedit
            laboriosam quisquam dolore mollitia cumque. Ratione?
          </p>
        </div>
        <div className="tiendaCard">
          <h2>Tienda online personalizada</h2>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt, officia error, voluptatum, debitis dignissimos possimus
            sed cum blanditiis ducimus facilis nesciunt soluta impedit
            laboriosam quisquam dolore mollitia cumque. Ratione?
          </p>
        </div>
      </div>
    </div>
  );
};
