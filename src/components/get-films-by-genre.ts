import { PreviewFilm } from './preview-film';

export const getFilmsByGenre = (films: PreviewFilm[], genre: string) => films.filter((film) => film.genre === genre);
