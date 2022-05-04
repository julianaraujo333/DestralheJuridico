import React from "react";
import styles from "./Stakeholders.module.css";

const Stakeholders = () => {
  return (
    <section className={`${styles.stakeholders} container`}>
      <h4 className="title">Esse evento é para você que:</h4>
      <span>(marque o que acontece com você)</span>
    </section>
  );
};

export default Stakeholders;
