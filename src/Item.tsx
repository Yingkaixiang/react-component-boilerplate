import React from "react";

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = ({ text }) => {
  return <span style={{ color: "red" }}>{text}</span>;
};

export default Item;
