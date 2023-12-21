import { NameSpace } from '../const';
import { ReviewData } from './props';
import { State } from '../state';

export const getCurrentFilmReviews = (state: Pick<State, NameSpace.Review>): ReviewData[] => state[NameSpace.Review].currentFilmReviews;
export const getCurrentFilmReviewsLoading = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isCurrentFilmReviewsLoading;
