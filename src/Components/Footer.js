import React from "react";
import styles from "./Footer.module.css";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Poliana Araujo - Marketing Jurídico" />
      <p>Poliana Araújo © Todos os direitos reservados.</p>{" "}
    </footer>
  );
};

export default Footer;
