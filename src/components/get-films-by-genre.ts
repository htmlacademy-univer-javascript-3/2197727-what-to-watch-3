import { PreviewFilm } from './preview-film';
import { DEFAULT_GENRE } from '../const';

export const getFilmsByGenre = (films: PreviewFilm[], genre: string) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
