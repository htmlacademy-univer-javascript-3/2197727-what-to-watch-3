import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from './const';
import { userProcess } from './user-process';
import { filmData } from './components/film-data';
import { genreProcess } from './components/genre-process';
import { reviewData } from './components/review-data';
import { myListProcess } from './components/my-list-process';

export const rootReducer = combineReducers({
  [NameSpace.Genre]: genreProcess.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MyList]: myListProcess.reducer,
});
