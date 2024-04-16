import React from "react";
import "./react.css";

const Main = props => {
  const { title, children } = { title: props.title, children: props.children };

  return (
    <div>
      <h1>안녕하세요, 나는{title}입니다.</h1>
      <h2>children 값은 {children}입니다.</h2>
    </div>
  );
};

Main.defaultProps = {
  title: "기본 이름",
};

export default Main;
