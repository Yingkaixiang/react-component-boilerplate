import * as React from "react";

const Hello: React.FC<{ text: string }> = ({ text }) => {
  return <h2>{text}</h2>;
};

export default Hello;
