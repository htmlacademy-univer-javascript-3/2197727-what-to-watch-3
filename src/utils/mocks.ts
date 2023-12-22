import { name, datatype, random, finance, image, internet, commerce } from 'faker';
import { humanizeDate } from '../components/change-date-format';
import { SmallFilmCardProps } from '../components/props';
import { Film } from '../film';
import { PreviewFilm } from '../components/preview-film';
import { PromoFilm } from '../promo-film';
import { ReviewData } from '../components/props';
import { Action } from '@reduxjs/toolkit';
import { State } from '../state';
import { AuthorizationStatus, DEFAULT_GENRE, NameSpace } from '../const';
import { FavoriteFilmPostData } from '../favorite-film-post-data';

export const makeFakeReview = (): ReviewData => ({
  id: random.alpha({count: 10}),
  date: String(datatype.datetime()),
  user: name.firstName(),
  comment: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
});

export const makeFakeFilm = (): Film => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  description: commerce.productDescription(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
});

export const makeFakeFavoriteFilmPostData = (): FavoriteFilmPostData => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  description: commerce.productDescription(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
});

export const makeFakePreviewFilms = (): PreviewFilm[] => ([
  {
    id: random.alpha({count: 10}),
    name: name.title(),
    previewImage: image.imageUrl(),
    previewVideoLink: internet.url(),
    genre: random.word(),
  },
]);

export const makeFakePromoFilm = (): PromoFilm => (
  {
    id: random.alpha({count: 10}),
    name: name.title(),
    posterImage: image.imageUrl(),
    backgroundImage: '#ffffff',
    videoLink: internet.url(),
    genre: random.word(),
    released: Number(finance.amount(1, 100, 0)),
    isFavorite: false,
  }
);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [NameSpace.Film]: {
    films: makeFakePreviewFilms(),
    isFilmsLoading: false,
    currentFilm: makeFakeFilm(),
    isCurrentFilmLoading: false,
    promoFilm: makeFakePromoFilm(),
    isPromoFilmLoading: false,
    currentSimilarFilms: makeFakePreviewFilms(),
    isCurrentSimilarFilmsLoading: false,
  },
  [NameSpace.Genre]: {
    genre: DEFAULT_GENRE,
  },
  [NameSpace.MyList]: {
    favoriteFilms: [],
    favoriteFilmCount: 0,
    isFavoriteFilmsLoading: false,
  },
  [NameSpace.PostingReview]: {
    isFormReviewSubmitting: false,
  },
  [NameSpace.Review]: {
    currentFilmReviews: [makeFakeReview()],
    isCurrentFilmReviewsLoading: false,
  },
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    avatarUrl: '',
  },
  ...(initialState ?? {}),
});

export const makeFakeFilmId = (): string => random.alpha({count: 10});
export const makeFakeAvatarUrl = (): string => internet.url();
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
