import React from "react";
import mail from "../assets/mail.svg";
import wp from '../assets/wp.svg';
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="slogan"><h1>BIXO</h1></div>
      <div className="contacto">
        <div className="contactoItem">
          <img src={mail} alt="" />
          <p>bixodevelop@gmail.com</p>
        </div>
        <div className="contactoItem">
          <img src={wp} alt="" />
          <p>+54 11 2740 5227</p>
        </div>
      </div>
    </div>
  );
};
