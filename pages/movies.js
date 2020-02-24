import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

//Componente con la seccion de peliculas y uso de rutas dinamicas
const movies = ({ movies }) => {
  return (
    <div>
      <Menu />
      <h1 style={{ textAlign: "center" }}>Estamos en la página de películas</h1>
      {movies.map((movie, index) => (
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <hr />
          <Link href="/movie/[movie]" as={`/movie/${movie.id}`} key={index}>
            <h3>
              <a style={{ textDecoration: "none", color: "green" }}>
                {movie.name}
              </a>
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

//Inicializar props en el componente
movies.getInitialProps = async () => {
  const res = await fetch("https://api.myjson.com/bins/17aglo");
  const movies = await res.json();

  return { movies };
};

export default movies;
