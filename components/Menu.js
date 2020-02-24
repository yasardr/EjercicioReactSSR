import React from "react";
import Link from "next/link";

import "./Menu.scss";

//Componente con interacción de rutas basicas
const Menu = () => {
  return (
    <div id="nav">
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/movies">
            <a>Películas</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
