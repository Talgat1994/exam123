import React from "react";
import cn from "classnames";
import useTheme from "./hooks/useTheme";

const Layout = ({ children }) => {
  const { isDark } = useTheme();
  return <div className={cn("Layout", { dark: isDark })}>{children}</div>;
};

export default Layout;
