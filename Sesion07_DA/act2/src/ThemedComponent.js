import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "20px" }}>
      <h2>Este es un componente temático</h2>
      <p>El tema actual es: {theme}</p>
    </div>
  );
};

export default ThemedComponent;
