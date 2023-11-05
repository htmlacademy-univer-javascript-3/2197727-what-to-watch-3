import { SmallFilmCardProps, FilmListProps } from './props';
import SmallFilmCard from '../components/small-film-card';
import { useState } from 'react';

export default function FilmList({films}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState({});
  return (
    <div className="catalog__films-list">
      {films.map((film: SmallFilmCardProps) => (
        <article className="small-film-card catalog__films-card" key={film.id} onMouseOver={() => {
          setActiveFilm(film);
          return activeFilm;
        }}
        >
          <SmallFilmCard
            id={film.id}
            previewImage={film.previewImage}
            name={film.name}
            previewVideoLink={film.previewVideoLink}
            genre={film.genre}
          />
        </article>
      ))}
    </div>
  );
}
