import { Review } from '../../state';
import { reviewData } from '../review-data';

describe('Review slice', () => {
  const initialState: Review = {
    currentFilmReviews: [],
    isCurrentFilmReviewsLoading: false,
  };

  describe('return initial state', () => {
    it('with empty action', () => {
      const expectedState = { ...initialState };
      const emptyAction = { type: '' };
      const result = reviewData.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('with empty action and undefined state', () => {
      const expectedState = { ...initialState };
      const emptyAction = { type: '' };
      const result = reviewData.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });
});
