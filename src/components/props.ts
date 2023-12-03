import { Film } from '../film';
import { PreviewFilm } from './preview-film';
import { AuthorizationStatus } from '../const';

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
  filmId: string;
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
  filmCount?: number;
}

export type FilmOverviewProps = {
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
}

export type FilmReviewsProps = {
  filmId: string;
  reviews: ReviewData[];
}

export type AddReviewScreenProps = {
  films: Film[];
}

export type FilmScreenProps = {
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

export type GenreListProps = {
  genres: string[];
  onGenreClick: () => void;
}

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export type ShowMoreFilmButtonProps = {
  onShowMoreFilmButtonClick: () => void;
}
