import React from "react";
import styles from "./Countdown.module.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = React.useState("00");
  const [timerHours, setTimerHours] = React.useState("00");
  const [timerMinutes, setTimerMinutes] = React.useState("00");
  const [timerSeconds, setTimerSeconds] = React.useState("00");
  const [info, setInfo] = React.useState("");
  const [batata, setBatata] = React.useState(false);

  let interval = React.useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 06, 2022 00:00:00").getTime();
    const countdownLastDate = new Date("May 06, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setBatata(true);
        if (countdownLastDate >= now && now <= countdownLastDate) {
          setInfo(
            "Destralhe seu Instagram Jurídico já está acontecendo, ainda da tempo!"
          );
        } else {
          setInfo(
            "Destralhe seu Instagram Jurídico acabou, segue no instagram @araujopoli para não perder os proximos"
          );
        }
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  React.useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className={styles.wrapper}>
      {batata ? (
        <p>{info}</p>
      ) : (
        <div className={styles.countdown}>
          <p>Faltam</p>
          <div className={styles.timer}>
            <span>{timerDays}</span>
            <span>dias</span>
            <span>{timerHours}</span>
            <span>horas</span>
            <span>{timerMinutes}</span>
            <span>minutos</span>
            <span>{timerSeconds}</span>
            <span>segundos</span>
          </div>
          <p>
            para evento{" "}
            <a href="https://chat.whatsapp.com/L62ACsNRcTYHoEzSHQMZ1r">
              participe agora!
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Countdown;
