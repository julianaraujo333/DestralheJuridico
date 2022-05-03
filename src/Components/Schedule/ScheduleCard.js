import React from "react";
import styles from "./ScheduleCard.module.css";

const ScheduleCard = () => {
  return (
    <div className={styles.card}>
      <h4>Aula 01</h4>
      <span>Tirando as tralhas</span>
      <hr />
      <p>
        Elimine os erros e confusões que estão estagnando seu perfil e causando
        bloqueio criativo
      </p>
    </div>
  );
};

export default ScheduleCard;
