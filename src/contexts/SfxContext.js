import { createContext } from 'react';

export const SfxContext = createContext({
  hoverSfx: () => {},
  clickSfx: () => {},
  winSfx: () => {}
});

export function SfxContextProvider({ children }) {
  const noop = () => {};
  return (
    <SfxContext.Provider value={{ hoverSfx: noop, clickSfx: noop, winSfx: noop }}>
      {children}
    </SfxContext.Provider>
  );
}
