import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AppProps } from './components/props';
import { films } from './mocks/films';
import { promoFilm } from './mocks/promo-film';
import { PreviewFilm } from './components/preview-film';
import { Provider } from 'react-redux';
import { store } from './store-index';
import { checkAuthAction, fetchFilmsAction } from './components/api-action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const appData: AppProps = {
  promoFilmCard: promoFilm,
  smallFilmCards: films.slice(1, films.length) as PreviewFilm[],
  films: films,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
        <App
          promoFilmCard={appData.promoFilmCard}
          smallFilmCards={appData.smallFilmCards}
          films={appData.films}
        />
    </Provider>
  </React.StrictMode>
);
