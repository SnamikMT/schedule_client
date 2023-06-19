import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Store from "./store/store";

interface State {
  store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
  store,
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  );
}
