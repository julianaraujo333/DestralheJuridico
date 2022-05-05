import React from "react";
import Button from "../Forms/Button/Button";
import SwitchButton from "../Forms/SwitchButton/SwitchButton";
import styles from "./Stakeholders.module.css";

const data = [
  {
    id: 1,
    content: "Sente-se perdida no digital",
  },
  {
    id: 2,
    content: "Não sabe como começar seu instagram jurídico",
  },
  {
    id: 3,
    content: "Já produz conteúdo, mas não consegue clientes",
  },
  {
    id: 4,
    content: "Está cansada de seguir várias estratégias e nenhuma funcionar",
  },
  {
    id: 5,
    content: "Está sofrendo com bloqueio criativo",
  },
  {
    id: 6,
    content: "Fica ansiosa porque não consegue criar conteúdo com constância",
  },
  {
    id: 7,
    content:
      "Está cansada de fazer cursos de marketing, mas não ter resultados",
  },
];

const Stakeholders = () => {
  return (
    <section className={`${styles.stakeholders}`}>
      <div className={`${styles.wrapper} container`}>
        <div>
          <h4 className="title">Esse evento é para você que:</h4>
          <span>(marque o que acontece com você)</span>
        </div>
        <div>
          {data.map((content) => (
            <SwitchButton key={content.id} content={content.content} />
          ))}
        </div>
      </div>
      <Button />
    </section>
  );
};

export default Stakeholders;
