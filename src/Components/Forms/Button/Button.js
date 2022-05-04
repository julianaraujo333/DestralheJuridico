import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <a
        href="https://chat.whatsapp.com/L62ACsNRcTYHoEzSHQMZ1r"
        target="_blank"
        className={styles.button}
      >
        Quero Participar
      </a>
    </div>
  );
};

export default Button;
