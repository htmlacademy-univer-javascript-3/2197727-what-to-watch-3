import { MainScreenProps } from '../components/props';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet-async';
import FilmList from '../components/film-list';
import PromoFilmCard from '../components/promo-film-card';
import GenreList from '../components/genre-list';
import { useAppSelector } from '../index';
import ShowMoreFilmButton from '../components/show-more-film-button';
import { SHOWN_FILM_COUNT } from '../const';
import { getGenreList } from '../components/get-genre-list';
import { useState } from 'react';
import { useFilmsByGenre } from '../components/films-by-genre';

export default function MainScreen({promoFilmCard}: MainScreenProps) {
  const activeGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);
  const [shownFilmCount, setShownFilmCount] = useState(SHOWN_FILM_COUNT);
  const filmsByGenre = useFilmsByGenre(activeGenre);

  return (
    <>
      <Helmet>
        <title>WTW</title>
      </Helmet>

      <PromoFilmCard
        id={promoFilmCard.id}
        posterImage={promoFilmCard.posterImage}
        name={promoFilmCard.name}
        genre={promoFilmCard.genre}
        released={promoFilmCard.released}
        backgroundImage={promoFilmCard.backgroundImage}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={getGenreList(films)} onGenreClick={() => setShownFilmCount(SHOWN_FILM_COUNT)}/>
          <FilmList films={filmsByGenre} filmCount={shownFilmCount}/>
          {shownFilmCount < filmsByGenre.length && <ShowMoreFilmButton onShowMoreFilmButtonClick={() => setShownFilmCount(shownFilmCount + SHOWN_FILM_COUNT)} />}
        </section>

        <Footer/>
      </div>
    </>
  );
}
