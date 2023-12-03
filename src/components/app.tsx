import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../pages/main-screen';
import SignInScreen from '../pages/sign-in-screen';
import MyListScreen from '../pages/my-list-screen';
import FilmScreen from '../pages/film-screen';
import AddReviewScreen from '../pages/add-review-screen';
import PlayerScreen from '../pages/player-screen';
import NotFoundScreen from '../pages/error-screen';
import PrivateRoute from '../components/private-route';
import { AppProps } from './props';
import { useAppSelector } from '../index';
import LoadingScreen from './loading-screen';
import HistoryRouter from './history-routr';
import browserHistory from './brower-history'

export default function App({promoFilmCard, smallFilmCards, films}: AppProps) {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen promoFilmCard={promoFilmCard}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyListScreen smallFilmCards={smallFilmCards}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.FilmData}>
            <Route index element={<NotFoundScreen/>}/>
            <Route index element={<FilmScreen/>} />
              <Route path='review' element={<AddReviewScreen/>} />
            </Route>
          <Route path={AppRoute.Player}>
            <Route index element={<NotFoundScreen/>}/>
            <Route path=':id' element={<PlayerScreen films={films}/>}/>
          </Route>
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />
        </Routes>
        </HistoryRouter>
    </HelmetProvider>
  );
}
