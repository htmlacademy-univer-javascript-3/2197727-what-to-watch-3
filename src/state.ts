import { AuthorizationStatus } from './const';
import { store } from './store-index';
import { Film } from './film';
import { PreviewFilm } from './components/preview-film';
import { PromoFilm } from './promo-film';
import { ReviewData } from './components/props';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmData = {
  films: PreviewFilm[];
  isFilmsDataLoading: boolean;
  currentFilm?: Film;
  isFilmDataLoading: boolean;
  promoFilm?: PromoFilm;
  isPromoFilmLoading: boolean;
  currentSimilarFilms: PreviewFilm[];
  isSimilarFilmsLoading: boolean;
}

export type Review = {
  currentFilmReviews: ReviewData[];
  isFilmReviewsLoading: boolean;
}

export type GenreProcess = {
  genre: string;
}

export type MyFilmProcess = {
  favoriteFilms: PreviewFilm[];
  favoriteFilmCount: number;
  isFavoriteFilmsLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
