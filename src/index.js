import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GameContextProvider } from './contexts/GameContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { SfxContextProvider } from './contexts/SfxContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SfxContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </SfxContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
