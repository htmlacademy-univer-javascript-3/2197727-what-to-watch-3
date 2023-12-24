import { FilmFavoriteStatus } from '../../film-favorite-status';
import { MyFilmProcess } from '../../state';
import { makeFakeFilm, makeFakePreviewFilms } from '../../utils/mocks';
import { postFilmFavoriteStatus } from '../api-action';
import { myListProcess, clearMyList } from '../my-list-process';

describe('My list process slice', () => {
  const initialState: MyFilmProcess = {
    favoriteFilms: [],
    favoriteFilmCount: 0,
    isFavoriteFilmsLoading: false,
  };

  describe('return initial state', () => {
    it('with empty action', () => {
      const expectedState = { ...initialState };
      const emptyAction = { type: '' };
      const result = myListProcess.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('with empty action and undefined state', () => {
      const expectedState = { ...initialState };
      const emptyAction = { type: '' };
      const result = myListProcess.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('postFilmFavoriteStatus', () => {
    it('increase "favoriteFilmCount" with "postFilmFavoriteStatus.fulfilled" action', () => {
      const film = { ...makeFakeFilm(), isFavorite: true, previewImage: '', previewVideoLink: '' };
      const filmFavoriteStatus: FilmFavoriteStatus = {
        id: film.id,
        status: film.isFavorite ? 1 : 0,
      };
      const expectedState = { ...initialState, favoriteFilmCount: 1 };
      const result = myListProcess.reducer(initialState, postFilmFavoriteStatus.fulfilled(film, '', filmFavoriteStatus));

      expect(result).toEqual(expectedState);
    });

    it('reduce "favoriteFilmCount" with "postFilmFavoriteStatus.fulfilled" action', () => {
      const film = { ...makeFakeFilm(), isFavorite: false, previewImage: '', previewVideoLink: '' };
      const filmFavoriteStatus: FilmFavoriteStatus = {
        id: film.id,
        status: film.isFavorite ? 1 : 0,
      };
      const expectedState = { ...initialState, favoriteFilmCount: -1 };
      const result = myListProcess.reducer(initialState, postFilmFavoriteStatus.fulfilled(film, '', filmFavoriteStatus));

      expect(result).toEqual(expectedState);
    });
  });

  describe('clear my list', () => {
    it('clear my list with "clearMyList" action', () => {
      const mockFavoriteFilms = makeFakePreviewFilms();
      const previousState = {
        favoriteFilms: mockFavoriteFilms,
        favoriteFilmCount: mockFavoriteFilms.length,
        isFavoriteFilmsLoading: false,
      };
      const expectedState = { ...initialState };
      const result = myListProcess.reducer(previousState, clearMyList());

      expect(result).toEqual(expectedState);
    });
  });
});
