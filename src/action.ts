import { createAction } from '@reduxjs/toolkit';
import { PreviewFilm } from './components/preview-film';

export const changeActiveGenre = createAction<{ genre: string }>('app/changeActiveGenre');
export const loadFilms = createAction<PreviewFilm[]>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
