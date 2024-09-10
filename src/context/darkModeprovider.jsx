import { createContext, useState } from "react";

import PropTypes from "prop-types";

export const darkMode = createContext();
const DarkModeProvider = ({ children }) => {
  const [isDarkmodeActvated, setIsDarkModeACtvated] = useState(false);

  return (
    <darkMode.Provider value={{ isDarkmodeActvated, setIsDarkModeACtvated }}>
      {children}
    </darkMode.Provider>
  );
};
DarkModeProvider.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DarkModeProvider;
