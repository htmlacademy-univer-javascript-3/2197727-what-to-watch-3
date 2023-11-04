import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import Setting from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <h1>Hello, World!</h1>
    <App
      promoFilmTitle={Setting.PromoFilmTitle}
      promoFilmGenre={Setting.PromoFilmGenre}
      promoFilmYear={Setting.PromoFilmYear}
    />
  </React.StrictMode>
);
