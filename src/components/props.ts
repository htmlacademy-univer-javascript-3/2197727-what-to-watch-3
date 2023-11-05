import { Film } from '../film';
import { PreviewFilm } from './preview-film';

export type PromoFilmCardProps = {
  id: string;
  posterImage: string;
  name: string;
  backgroundImage: string;
  genre: string;
  released: number;
}

export type SmallFilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  isPlayingPreviewVideo: boolean;
  onSmallFilmCardMouseOver: () => void;
  onSmallFilmCardMouseOut: () => void;
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
  smallFilmCards: PreviewFilm[];
  films: Film[];
  reviews: ReviewProps[];
}

export type MainScreenProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: PreviewFilm[];
}

export type MyListScreenProps = {
  smallFilmCards: PreviewFilm[];
}

export type FilmDetailsProps = {
  film: Film;
}

export type FilmListProps = {
  films: PreviewFilm[];
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
  smallFilmCards: PreviewFilm[];
  films: Film[];
  reviews: ReviewProps[];
}

export type PlayerScreenProps = {
  films: Film[];
}

export type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  poster: string;
}
