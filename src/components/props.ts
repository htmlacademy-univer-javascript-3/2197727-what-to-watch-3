import { Film } from '../film';
import { PreviewFilm } from './preview-film';
import { AuthorizationStatus } from '../const';
import type { BrowserHistory } from 'history';

export type PromoFilmCardProps = {
  id: string;
  posterImage: string;
  name: string;
  backgroundImage: string;
  genre: string;
  released: number;
  isFavorite: boolean;
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
  reviews: ReviewData[];
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

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export type FormReviewProps = {
  filmId: string;
}

export type ChangeFavoriteStatusButtonProps = {
  filmId: string;
  isFavorite: boolean;
  favoriteFilmCount: number;
  authorizationStatus: AuthorizationStatus;
}
