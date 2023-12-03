import { useAppSelector } from '..';
import { PreviewFilm } from './preview-film';
import { getFilmsByGenre } from './get-films-by-genre';

export const useFilmsByGenre = (genre: string) => useAppSelector((state) => getFilmsByGenre(state.films as PreviewFilm[], genre));
