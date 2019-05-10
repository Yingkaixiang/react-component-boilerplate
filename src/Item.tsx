import React from "react";

interface IItemProps {
  text: string;
}

const Item: React.FC<IItemProps> = ({ text }) => {
  return <span style={{ color: "red" }}>{text}</span>;
};

export default Item;
