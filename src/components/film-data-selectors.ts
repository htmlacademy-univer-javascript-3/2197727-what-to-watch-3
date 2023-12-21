import { NameSpace } from '../const';
import { Film } from '../film';
import { PreviewFilm } from './preview-film';
import { PromoFilm } from '../promo-film';
import { State } from '../state';

export const getFilms = (state: Pick<State, NameSpace.Film>): PreviewFilm[] => state[NameSpace.Film].films;
export const getFilmsLoading = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isFilmsLoading;
export const getCurrentFilm = (state: Pick<State, NameSpace.Film>): Film | undefined => state[NameSpace.Film].currentFilm;
export const getCurrentFilmLoading = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isCurrentFilmLoading;
export const getCurrentSimilarFilms = (state: Pick<State, NameSpace.Film>): PreviewFilm[] => state[NameSpace.Film].currentSimilarFilms;
export const getCurrentSimilarFilmsLoading = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isCurrentSimilarFilmsLoading;
export const getPromoFilm = (state: Pick<State, NameSpace.Film>): PromoFilm | undefined => state[NameSpace.Film].promoFilm;
export const getPromoFilmLoading = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isPromoFilmLoading;
