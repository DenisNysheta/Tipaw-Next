import React from "react";
import cl from "@/styles/components/Header.module.scss";
import HeaderInfo from "./HeaderInfo";

function Header() {
  return (
    <header className={cl.header}>
      <h1 className={cl.header__title}>My Tipaw</h1>
      <HeaderInfo NAME="John Smith" LANGUAGES={["Fr", "NI"]} />
    </header>
  );
}

export default Header;
