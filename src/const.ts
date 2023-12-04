const HOUR_MINUTES_COUNT = 60;
export const RATING_STAR_COUNT = 10;
export const DEBOUNCE_TIME_FOR_PREVIEW_VIDEO = 1000;
export const FILM_SAME_GENRE_COUNT = 4;
export const SHOWN_FILM_COUNT = 8;
export const REQUEST_TIMEOUT = 5000;
export const SECOND_COUNT_IN_HOUR = 3600;
export const SECOND_COUNT_IN_MINUTE = 60;
export const MINUTE_COUNT_IN_HOUR = 60;
export const DEFAULT_GENRE = 'All genres';
export const BACKEND_URL = 'https://13.design.pages.academy/wtw';
export const AUTH_TOKEN_KEY_NAME = 'wtw-token';

export const getRunTime = (runTime: number) => {
  const hour = Math.floor(runTime / HOUR_MINUTES_COUNT);
  const minute = runTime - hour * HOUR_MINUTES_COUNT;
  return `${hour}h ${minute}m`;
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  FilmData = '/films',
  Player = '/player',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const FilmTab = {
  Overview: 'OVERVIEW',
  Details: 'DETAILS',
  Reviews: 'REVIEWS'
};

export const FilmTabNameInterface = {
  [FilmTab.Overview]: 'Overview',
  [FilmTab.Details]: 'Details',
  [FilmTab.Reviews]: 'Reviews',
};

export const APIRoute = {
  Films: '/films',
  Login: '/login',
  Logout: '/logout',
  Comments: '/comments',
  PromoFilm: '/promo',
  FavoriteFilms: '/favorite'
};

export enum NameSpace {
  Genre = 'GENRE',
  MyList = 'MY_LIST',
  Film = 'FILM',
  Review = 'REVIEW',
  User = 'USER',
}
