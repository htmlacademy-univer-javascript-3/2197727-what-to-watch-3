import Header from '../components/header';
import Footer from '../components/footer';
import { MyListScreenProps } from '../components/props';
import { Helmet } from 'react-helmet-async';
import FilmList from '../components/film-list';

export default function MyListScreen({smallFilmCards}: MyListScreenProps) {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>

      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={smallFilmCards} />
        </div>
      </section>

      <Footer/>
    </div>
  );
}
