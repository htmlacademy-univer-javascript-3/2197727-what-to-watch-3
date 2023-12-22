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
import { useAppSelector } from '../index';
import Spinner from './spinner';
import { getFilmsLoading } from '../components/film-data-selectors';
import { getAuthorizationStatus } from '../user-process-selectors';

export default function App() {
  const isFilmsLoading = useAppSelector(getFilmsLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isFilmsLoading) {
    return (
      <Spinner/>
    );
  }
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.FilmData}>
          <Route index element={<NotFoundScreen />} />
          <Route path=':id'>
            <Route index element={<FilmScreen />} />
            <Route
              path='review'
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <AddReviewScreen />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<NotFoundScreen />} />
          <Route path=':id' element={<PlayerScreen />} />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HelmetProvider>
  );
}
