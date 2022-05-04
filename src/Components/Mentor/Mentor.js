import React from "react";
import styles from "./Mentor.module.css";
import poliana from "../../Assets/tutor.jpeg";

const Mentor = () => {
  return (
    <section className={styles.mentor}>
      <div className={`${styles.wrapper} container`}>
        <div>
          <h4 className="title">Quem é Poliana Araújo?</h4>
          <p>
            Formada em direito, social media pela WTF Maison, consultora e
            especialista em marketing jurídico no Instagram. Já transformou mais
            de <strong>100 advocacias</strong> através de consultas, mentorias e
            cursos. Defende que a internet veio para{" "}
            <strong>democratizar a advocacia</strong> e sua missão é ensinar
            marketing para advogadas de uma forma ética e prática.
          </p>
        </div>
        <img src={poliana} alt="Poliana Araújo" />
      </div>
    </section>
  );
};

export default Mentor;
