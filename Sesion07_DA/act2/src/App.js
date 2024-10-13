/*import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function App() {
  return (
    <CounterProvider>
      <h1>Contador con React Context</h1>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
  );
}

export default App;*/

import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemedComponent from "./ThemedComponent";

function App() {
  return (
    <ThemeProvider>
      <h1>Cambio de Tema con React Context</h1>
      <ThemeSwitcher />
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;

