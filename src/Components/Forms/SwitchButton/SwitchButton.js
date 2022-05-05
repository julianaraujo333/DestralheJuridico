import React from "react";
import styles from "./SwitchButton.module.css";

const SwitchButton = ({ content }) => {
  const [toggle, setToggle] = React.useState(false);

  function handleChange() {
    setToggle(!toggle);
  }
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: toggle ? "#D4D4D8" : "#B4B4BB" }}
    >
      <label className={styles.switch}>
        <input type="checkbox" onChange={handleChange} />
        <span className={styles.slider}></span>
      </label>
      <p>{content}</p>
    </div>
  );
};

export default SwitchButton;
