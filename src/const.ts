const HOUR_MINUTES_COUNT = 60;
export const RATING_STAR_COUNT = 10;

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

export enum FilmBlockLink {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS'
}
