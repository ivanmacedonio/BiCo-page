import React from "react";
import { Banner } from "../components/Banner";
import { Ecommerce } from "../components/Ecommerce";
import { Header } from "../components/Header";
import { Producto } from "../components/Producto";
import { Standards } from "../components/Standards";
import { Tienda } from "../components/Tienda";
import { Ventajas } from "../components/Ventajas";

import "../styles/MainPage.css";
import { Inicio } from "./Inicio";
export const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="header">
        <Header></Header>
      </div>
      <div className="Inicio">
        <Inicio></Inicio>
        <Banner></Banner>
        <Producto></Producto>
        <Ecommerce></Ecommerce>
        <Ventajas></Ventajas>
        <Standards></Standards>
        <Tienda></Tienda>
      </div>
    </div>
  );
};
