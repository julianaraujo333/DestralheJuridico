import React from "react";
import styles from "./Home.module.css";
import { BsCalendar } from "react-icons/bs";
import image from "../Assets/home.png";

const Home = () => {
  return (
    <header className={`${styles.home}`}>
      <div className={`${styles.image}`}>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.wrapper}`}>
        <h1 className="title">Destralhe</h1>
        <h1 className="title">seu Instagram Jurídico</h1>
        <p>
          Elimine todos os erros e incertezas que você vem acumulando no seu
          Instagram Jurídico e aprenda estratégias simples que funcionam para
          prospectar clientes.
        </p>

        <span>
          {" "}
          <BsCalendar color="#254528" />
          Dias <strong>23, 24 e 25 de maio</strong>, às 20h27
        </span>

        <div className={`${styles.button}`}>
          <a
            href="https://chat.whatsapp.com/L62ACsNRcTYHoEzSHQMZ1r"
            target="_blank"
            className={styles.button}
          >
            Quero Participar
          </a>
          <span>Gratuitamente no youtube, ao vivo</span>
        </div>
      </div>
    </header>
  );
};

export default Home;
