import React from "react";
import ScheduleCard from "./ScheduleCard";
import styles from "./Schedule.module.css";

const data = [
  {
    id: 1,
    title: "Aula 1",
    subtitle: "Tirando as tralhas",
    content:
      "Elimine os erros e confusões que estão estagnando seu perfil e causando bloqueio criativo",
  },
  {
    id: 2,
    title: "Aula 2",
    subtitle: "O básico que funciona",
    content:
      "A prospecção de clientes explicada de uma maneira absurdamente simples",
  },
  {
    id: 3,
    title: "Aula 3",
    subtitle: "Extraindo o melhor do Instagram",
    content:
      "Como usar o Instagram de forma estratégia e eficiente, sem surtar",
  },
];

const Schedule = () => {
  return (
    <section className={`${styles.schedule} container`}>
      <h4 className="title">Confira a programação do evento</h4>
      <span className={styles.subtitle}>Totalmente online e gratuito</span>

      <div className={styles.wrapper}>
        {data.map((data) => (
          <ScheduleCard
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            description={data.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Schedule;
