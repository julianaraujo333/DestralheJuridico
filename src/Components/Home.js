import React from "react";
import styles from "./Home.module.css";
import { BsCalendar } from "react-icons/bs";

const Home = () => {
  return (
    <header className={`${styles.home} container`}>
      <h1 className="title">Destralhe seu Instagram Jurídico</h1>
      <p>
        Elimine todos os erros e incertezas que você vem acumulando no seu
        Instagram Jurídico e aprenda estratégias simples que funcionam para
        prospectar clientes
      </p>

      <span>
        {" "}
        <BsCalendar color="#254528" />
        Dias <strong>23, 24 e 25 de maio</strong>, às 20h27
      </span>
    </header>
  );
};

export default Home;
