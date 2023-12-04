import { useAppSelector } from '..';
import { getFilmsByGenre } from './get-films-by-genre';
import { getFilms } from '../components/film-data-selectors';

export const useFilmsByGenre = (genre: string) => getFilmsByGenre(useAppSelector(getFilms), genre);
