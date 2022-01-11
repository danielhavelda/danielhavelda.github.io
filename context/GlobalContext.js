import { createContext } from "react";

const GlobalContext = createContext({
  currentTheme: 'dark',
  bodyOverflow: true
});

export default GlobalContext;