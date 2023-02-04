import React from "react";
import "./Header.css";
import useTheme from "./hooks/useTheme";

const Header = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <div className="container">
      <button className="day" onClick={() => setIsDark(!isDark)}>
        Дневная тема
      </button>
      <button className="night" onClick={() => setIsDark(!isDark)}>
        Ночная тема
      </button>
    </div>
  );
};

export default Header;
