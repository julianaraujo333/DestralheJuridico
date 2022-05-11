import React from "react";
import styles from "./ScheduleCard.module.css";

const ScheduleCard = ({ title, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <span>{subtitle}</span>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default ScheduleCard;
