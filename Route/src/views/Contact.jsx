import React from "react";
import Formcontact from "../components/Formcontact";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contacto Happy Bakery</h1>
      <p> ¡Estamos encantados de escucharte! </p>
      <p> Puedes comunicarte con nosotros a través de los siguientes medios </p>
      <ul>
        <li>Correo electrónico: happybakery@gmail.com</li>
        <li>Redes sociales: @Happybakery</li>
      </ul>
      <Formcontact />
    </div>
  );
};

export default Contact;
