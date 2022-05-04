import React from "react";
import styles from "./Collapse.module.css";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <button onClick={handleToggle}>{title}</button>
      <div
        className={styles.collapse}
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Collapse;
