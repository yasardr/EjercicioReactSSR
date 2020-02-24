import React from "react";
import Menu from "../components/Menu";

//Componente de la sección contacto
const contact = () => {
  return (
    <div>
      <Menu />
      <h1 style={{ textAlign: "center" }}>Contacto</h1>
      <p style={{ textAlign: "justify", margin: 20 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        recusandae harum impedit expedita, ratione nesciunt id fugiat libero
        quasi at, quisquam minima aspernatur reiciendis deleniti natus fuga
        consectetur dolor aliquam?
      </p>
    </div>
  );
};

export default contact;
