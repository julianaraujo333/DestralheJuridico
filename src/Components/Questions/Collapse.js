import React from "react";
import styles from "./Collapse.module.css";
import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className={styles.collapse}>
      <button onClick={handleToggle}>
        <div>{title}</div>
        {toggle ? <BiDownArrow /> : <BiRightArrow />}
      </button>
      <div
        className={styles.collapseContent}
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
