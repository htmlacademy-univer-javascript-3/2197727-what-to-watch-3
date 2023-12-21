import { name, datatype, random, finance, image, internet } from 'faker';
import { humanizeDate } from '../components/change-date-format';
import { SmallFilmCardProps } from '../components/props';
import { Film } from '../film';
import { PreviewFilm } from '../components/preview-film';
import { PromoFilm } from '../promo-film';
import { ReviewData } from '../components/props';
import { Action } from '@reduxjs/toolkit';

export const makeFakeReview = (): ReviewData => ({
  id: random.alpha({count: 10}),
  date: humanizeDate(String(datatype.datetime())),
  user: name.firstName(),
  comment: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
});

export const makeFakeSmallFilmCard = (): SmallFilmCardProps => ({
  id: random.alpha({count: 10}),
  name: random.word(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  isPlayingPreviewVideo: false,
  onSmallFilmCardMouseOut: () => '',
  onSmallFilmCardMouseOver: () => '',
});

export const makeFakeFilm = (): Film => ({
  id: random.alpha({count: 10}),
  name: random.word(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  description: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName(), name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
});

export const makeFakePreviewFilms = (): PreviewFilm[] => ([
  {
    id: random.alpha({count: 10}),
    name: random.word(),
    previewImage: image.imageUrl(),
    previewVideoLink: internet.url(),
    genre: random.word(),
  },
]);

export const makeFakePromoFilm = (): PromoFilm => (
  {
    id: random.alpha({count: 10}),
    name: random.word(),
    posterImage: image.imageUrl(),
    backgroundImage: '#ffffff',
    videoLink: internet.url(),
    genre: random.word(),
    released: Number(finance.amount(1, 100, 0)),
    isFavorite: false,
  }
);

export const makeFakeFilmId = (): string => random.alpha({count: 10});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
