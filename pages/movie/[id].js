import React from "react";
import Menu from "../../components/Menu";
import Router, { useRouter } from "next/router";

//Pagina con ruta dinamica
const movie = () => {
  //Se obtiene el id de la pelicula
  const router = useRouter();
  const { id } = router.query;

  const goToHome = () => {
    Router.push("/movies");
  };

  return (
    <div>
      <Menu />
      <h2 style={{ textAlign: "center" }}>Estas viendo...</h2>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={goToHome}>Regresar</button>
      </div>
    </div>
  );
};

movie.getInitialProps = async () => {
  return {};
};

export default movie;
