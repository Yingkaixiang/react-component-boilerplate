import * as React from "react";

import Item from "./Item";

import styles from "./index.less";

const Hello: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2 className={styles.header}>
      {text}
      <Item text={text} />
      <div className={styles.test}>4444</div>
    </h2>
  );
};

export default Hello;
