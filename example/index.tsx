import React from "react";
import ReactDOM from "react-dom";

import Demo from "../src/index";

const App: React.FC = () => {
  return (
    <div>
      <h1>以下为测试组件：</h1>
      <Demo text="我是测试组件" />
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
