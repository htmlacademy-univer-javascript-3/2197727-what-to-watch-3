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
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type ReviewData = {
  idFilm: string;
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
  reviews: ReviewData[];
}

export type MainScreenProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: PreviewFilm[];
}

export type MyListScreenProps = {
  smallFilmCards: PreviewFilm[];
}

export type FilmDetailsProps = {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
}

export type FilmListProps = {
  films: PreviewFilm[];
  genre: string;
}

export type FilmOverviewProps = {
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
}

export type FilmReviewsProps = {
  idFilm: string;
  reviews: ReviewData[];
}

export type AddReviewScreenProps = {
  films: Film[];
}

export type FilmScreenProps = {
  smallFilmCards: PreviewFilm[];
  films: Film[];
  reviews: ReviewData[];
}

export type PlayerScreenProps = {
  films: Film[];
}

export type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  poster: string;
}

export type TabsProps = {
  film: Film;
  reviews: ReviewData[];
}
