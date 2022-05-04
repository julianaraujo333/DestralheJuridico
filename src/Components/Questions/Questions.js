import React from "react";
import Collapse from "./Collapse";
import styles from "./Questions.module.css";

const data = [
  {
    id: 1,
    title: "Quanto custa o Destralhe seu Instagram Jurídico?",
    content: "Nada! O evento é totalmente gratuito.",
  },
  {
    id: 2,
    title: "Onde vou acessar as aulas?",
    content:
      "O link para as 3 aulas ao vivo será enviado no grupo do WhatsApp do evento. Mas não se preocupe, esse grupo é silencioso e serve apenas para o envio dos links e materiais importantes.",
  },
  {
    id: 3,
    title: "Esse é mais um daqueles eventos para vender curso?",
    content:
      "Não tenho porque te esconder isso: no final do Destralhe seu Instagram Jurídico eu vou abrir as vagas para a Turma 4 do 7 Passos, minha mentoria. Faço isso para que você possa tenha um test drive e conheça a minha didática. Mas se não for o seu momento de entrar no 7 Passos, não se preocupe, o conteúdo entregue no evento gratuito será tão denso e transformador quanto o conteúdo pago.",
  },
];

const Questions = () => {
  return (
    <section className={`${styles.questions} container`}>
      <h4 className="title">Dúvidas frequentes</h4>
      <span>Ainda continua com dúvidas? vamos conversar!</span>

      <div>
        {data.map((question) => (
          <Collapse
            key={question.id}
            title={question.title}
            content={question.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
