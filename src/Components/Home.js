import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <header className={`${styles.home} container`}>
      <h1 className="title">Destralhe seu Instagram Jurídico</h1>
      <p>
        Elimine todos os erros e incertezas que você vem acumulando no seu
        Instagram Jurídico e aprenda estratégias simples que funcionam para
        prospectar clientes
      </p>

      <span>Data - Dias 23, 24 e 25 de maio, às 20h27</span>
    </header>
  );
};

export default Home;
