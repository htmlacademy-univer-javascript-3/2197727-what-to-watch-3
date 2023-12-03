import { MainScreenProps } from '../components/props';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet-async';
import FilmList from '../components/film-list';
import PromoFilmCard from '../components/promo-film-card';
import { getGenreList } from '../components/get-genre-list';
import GenreList from '../components/genre-list';
import { useAppDispatch, useAppSelector } from '../index';
import ShowMoreFilmButton from '../components/show-more-film-button';
import { setDefaultShownFilmCount } from '../action';
import { useEffect } from 'react';
import { PreviewFilm } from '../components/preview-film';

export default function MainScreen({promoFilmCard}: MainScreenProps) {
  const filmsByGenre = useAppSelector((state) => state.filmsByGenre);
  const films = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDefaultShownFilmCount());
  }, [dispatch]);

  const shownFilmCount = useAppSelector((state) => state.shownFilmCount);
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
          <GenreList genres={getGenreList(films as PreviewFilm[])}/>
          <FilmList films={filmsByGenre as PreviewFilm[]} filmCount={shownFilmCount}/>
          {shownFilmCount < filmsByGenre.length && <ShowMoreFilmButton />}
        </section>

        <Footer/>
      </div>
    </>
  );
}
