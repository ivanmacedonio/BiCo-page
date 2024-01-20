import React from "react";
import { Header } from "../components/Header";
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
      </div>
    </div>
  );
};
