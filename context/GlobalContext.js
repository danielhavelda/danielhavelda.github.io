import { createContext } from "react";

const GlobalContext = createContext({
  currentTheme: 'dark',
});

export default GlobalContext;