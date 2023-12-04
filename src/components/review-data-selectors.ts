import { NameSpace } from '../const';
import { ReviewData } from './api-action';
import { State } from '../state';

export const getCurrentFilmReviews = (state: State): ReviewData[] => state[NameSpace.Review].currentFilmReviews;
export const getFilmReviewsLoading = (state: State): boolean => state[NameSpace.Review].isFilmReviewsLoading;
