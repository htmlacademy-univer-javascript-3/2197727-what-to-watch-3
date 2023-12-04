import { NameSpace } from '../const';
import { PreviewFilm } from '../components/preview-film';
import { State } from '../state';

export const getFavoriteFilms = (state: State): PreviewFilm[] => state[NameSpace.MyList].favoriteFilms;
export const getFavoriteFilmsDataLoading = (state: State): boolean => state[NameSpace.MyList].isFavoriteFilmsLoading;
export const getFavoriteFilmCount = (state: State): number => state[NameSpace.MyList].favoriteFilmCount;
