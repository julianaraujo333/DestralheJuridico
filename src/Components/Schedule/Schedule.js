import React from "react";
import ScheduleCard from "./ScheduleCard";
import styles from "./Schedule.module.css";

const Schedule = () => {
  return (
    <section className={`${styles.schedule} container`}>
      <h4 className="title">Confira a programação do evento</h4>
      <span className={styles.subtitle}>Totalmente online e gratuito</span>

      <div className={styles.wrapper}>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </section>
  );
};

export default Schedule;
