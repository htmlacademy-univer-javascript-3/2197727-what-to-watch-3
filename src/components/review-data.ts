import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { Review } from '../state';
import { fetchFilmReviewsAction } from '../components/api-action';

const initialState: Review = {
  currentFilmReviews: [],
  isFilmReviewsLoading: false,
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmReviewsAction.pending, (state) => {
        state.isFilmReviewsLoading = true;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.currentFilmReviews = action.payload;
        state.isFilmReviewsLoading = false;
      });
  }
});
