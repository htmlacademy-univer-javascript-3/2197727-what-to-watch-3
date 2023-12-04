import Footer from '../components/footer';
import { Helmet } from 'react-helmet-async';
import FilmList from '../components/film-list';
import GenreList from '../components/genre-list';
import ShowMoreFilmButton from '../components/show-more-film-button';
import { SHOWN_FILM_COUNT } from '../const';
import { getGenreList } from '../components/get-genre-list';
import { useFilmsByGenre } from '../components/films-by-genre';
import { useAppDispatch, useAppSelector } from '../index';
import { useEffect, useState } from 'react';
import { getActiveGenre } from '../components/genre-process-selectors';
import { getFilms, getPromoFilm, getPromoFilmLoading } from '../components/film-data-selectors';
import { fetchPromoFilmAction } from '../components/api-action';
import LoadingScreen from '../components/loading-screen';
import PromoFilmCard from '../components/promo-film-card';

export default function MainScreen() {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const [shownFilmCount, setShownFilmCount] = useState(SHOWN_FILM_COUNT);
  const filmsByGenre = useFilmsByGenre(activeGenre);
  const promoFilmCard = useAppSelector(getPromoFilm);
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoading);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  if(isPromoFilmLoading) {
    return(
      <LoadingScreen/>
    );
  }

  return (
    <>
      <Helmet>
        <title>WTW</title>
      </Helmet>

      {promoFilmCard &&
      <PromoFilmCard
        id={promoFilmCard.id}
        posterImage={promoFilmCard.posterImage}
        name={promoFilmCard.name}
        genre={promoFilmCard.genre}
        released={promoFilmCard.released}
        backgroundImage={promoFilmCard.backgroundImage}
      isFavorite={promoFilmCard.isFavorite}
      />}

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
