import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main"

type Props = {};

function Box({}: Props) {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Box;
