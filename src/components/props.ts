import { Film } from '../film';

export type PromoFilmCardProps = {
  id: string;
  posterImage: string;
  name: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type SmallFilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type ReviewProps = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
  }

export type AppProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: SmallFilmCardProps[];
  films: Film[];
  reviews: ReviewProps[];
}

export type MainScreenProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: SmallFilmCardProps[];
}

export type MyListScreenProps = {
  smallFilmCards: SmallFilmCardProps[];
}

export type FilmDetailsProps = {
  film: Film;
}

export type FilmListProps = {
  films: SmallFilmCardProps[];
}

export type FilmOverviewProps = {
  film: Film;
}

export type FilmReviewsProps = {
  reviews: ReviewProps[];
}

export type AddReviewScreenProps = {
  films: Film[];
}

export type FilmScreenProps = {
  smallFilmCards: SmallFilmCardProps[];
  films: Film[];
  reviews: ReviewProps[];
}

export type PlayerScreenProps = {
  films: Film[];
}
