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
            De 23 a 25 de maio vamos juntas fazer um destralhe do seu perfil e
            retirar tudo o que só vem atrapalhando seu crescimento.
          </p>
        </div>
        <div className={styles.box}>
          <AiOutlineYoutube />
          <p>
            O evento é <strong> 100% gratuito </strong>e vai acontecer ao vivo
            no Youtube, sempre às 20h27. Fique atenta para não perder!
          </p>
        </div>
        <div className={styles.box}>
          <HiOutlineDocumentText />
          <p>
            Para participar basta entrar no{" "}
            <a href="https://chat.whatsapp.com/L62ACsNRcTYHoEzSHQMZ1r">
              grupo do WhatsApp
            </a>
            . Ele é um grupo silencioso, onde você receberá os links das aulas e
            materiais extras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
