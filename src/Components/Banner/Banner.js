import React from "react";
import styles from "./Banner.module.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.box}>
          <BsCalendar />
          <p>
            De 23 a 25 de maio vamos{" "}
            <strong>Destralhar juntos seu instagram jurídico</strong> com
            soluções e estrategias que funcionam.
          </p>
        </div>
        <div className={styles.box}>
          <AiOutlineYoutube />
          <p>
            O evento é <strong>100% gratuito e online</strong> no Youtube,
            sempre às 20h27, fique atento as aulas ficarão online por um dia.
          </p>
        </div>
        <div className={styles.box}>
          <HiOutlineDocumentText />
          <p>
            Para participar basta entrar no{" "}
            <a href="https://chat.whatsapp.com/L62ACsNRcTYHoEzSHQMZ1r">
              grupo do WhatsApp
            </a>
            , onde serão disponiveis os links das aulas, materiais e conteudos
            extras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
