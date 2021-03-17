import React from "react";
import Link from "next/link";
import { Container } from "../styles/movies";
import Background from "../components/Background";

function Movie() {
  return (
    <Container>
      <Background
        height={"75vh"}
        isHideBorder
        src="http://vivadigitalsa.com.br/wp-content/uploads/2019/11/indica5-27-11-1.jpg"
      >
        <section>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
              styles="height: 300px !important"
            />
            <a>Início</a>
            <a>Séries</a>
            <a>Filmes</a>
            <a>Minha lista</a>
          </div>
          <div>
            <span>Pesquisar</span>
          </div>
        </section>
      </Background>
    </Container>
  );
}

export default Movie;
