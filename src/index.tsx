import * as React from "react";

import Item from "./Item";

const Hello: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2>
      {text}
      <Item text={text} />
    </h2>
  );
};

export default Hello;
