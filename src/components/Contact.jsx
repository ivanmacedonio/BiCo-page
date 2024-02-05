import emailjs from "emailjs-com";
import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Contact.css";

export const Contact = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  function sendMail(data) {
    const serviceId = "bixo-service";
    const templateId = "template_vyrou1b";
    const userId = "GwjrRS_aYBeP0zwKs";

    const templateParams = {
      from_name: data.Email,
      message: data.message,
      Numero: data.Numero,
      Email: data.Email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
  }

  const onSubmit = (data) => {
    sendMail(data);
  };

  return (
    <div className="contactContainer">
      <div className="sideCard"></div>
      <div className="formContact">
        <h1>Contactate con nosotros.</h1>
        <p>Esperamos tu mensaje, respondemos en 24hs hábiles</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputsContact">
            <label>
              <p>Nombre</p>
              <input
                type="text"
                {...register("from_name", {
                  required: true,
                })}
              />
            </label>
            <label>
              <p>Teléfono</p>
              <input
                type="number"
                {...register("Numero", {
                  required: true,
                })}
              />
            </label>
            <label className="double">
              <p>Email</p>
              <input type="text" {...register("Email", { required: true })} />
            </label>
            <label className="double">
              <p>Mensaje</p>
              <input
                type="text"
                id="message"
                {...register("message", { required: true })}
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
