import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './store-index';
import { checkAuthAction, fetchFilmsAction } from './components/api-action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './components/brower-history';
import HistoryRouter from './components/history-routr';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
    </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
