import React from "react";
import { Contact } from "../components/Contact";
import { Ecommerce } from "../components/Ecommerce";
import { Inicio } from "../components/Inicio";
import { Tienda } from "../components/Tienda";
import { Ventajas } from "../components/Ventajas";
import { Webs } from "../components/Webs";

import "../styles/MainPage.css";
export const MainPage = () => {
  return (
    <main className="mainPageContainer">
      <body className="Inicio">
        <Inicio></Inicio>
        <Webs></Webs>
        <Ecommerce></Ecommerce>
        <Ventajas></Ventajas>
        <Tienda></Tienda>
        <Contact></Contact>
      </body>
    </main>
  );
};
