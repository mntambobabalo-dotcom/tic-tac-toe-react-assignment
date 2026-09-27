import { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  // Akhil's tutorial opens in light mode, so we mirror that behaviour.
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
