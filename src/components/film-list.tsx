import { FilmListProps } from './props';
import SmallFilmCard from '../components/small-film-card';
import { useRef, useState } from 'react';
import { DEBOUNCE_TIME_FOR_PREVIEW_VIDEO, FILM_SAME_GENRE_COUNT } from '../const';
import { PreviewFilm } from './preview-film';

export default function FilmList({films, genre}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState('');
  const timer = useRef<NodeJS.Timeout>();
  const filmsGenre = genre ? films.filter((film) => film.genre === genre).slice(0, FILM_SAME_GENRE_COUNT + 1) : films;

  return (
    <div className="catalog__films-list">
      {filmsGenre.map((film: PreviewFilm) => (
        <SmallFilmCard
          key={film.id}
          id={film.id}
          previewImage={film.previewImage}
          name={film.name}
          previewVideoLink={film.previewVideoLink}
          isPlayingPreviewVideo={film.id === activeFilm}
          onSmallFilmCardMouseOver={() => {
            timer.current = setTimeout(() => {
              setActiveFilm(film.id);
            }, DEBOUNCE_TIME_FOR_PREVIEW_VIDEO);
          }}
          onSmallFilmCardMouseOut={() => {
            clearTimeout(timer.current);
            setActiveFilm('');
          }}
        />
      ))}
    </div>
  );
}
