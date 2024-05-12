import React from "react";
import styles from "./index.module.scss";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const HomePage = () => {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.bgContent}>
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default HomePage;
