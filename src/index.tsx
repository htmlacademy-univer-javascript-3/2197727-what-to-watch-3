import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AppProps } from './components/props';
import { promoFilm, smallFilmCards } from './mocks';

const appData: AppProps = {
  promoFilmCard: promoFilm,
  smallFilmCards: smallFilmCards
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <h1>Hello, World!</h1>
    <App
      promoFilmCard={appData.promoFilmCard}
      smallFilmCards={appData.smallFilmCards}
    />
  </React.StrictMode>
);
