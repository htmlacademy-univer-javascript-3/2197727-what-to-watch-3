import { render, screen } from '@testing-library/react';
import { makeFakePromoFilm, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';
import PromoFilmCard from '../promo-film-card';

describe('Promo film card', () => {
  it('render correct', () => {
    const promoFilmCard = makeFakePromoFilm();
    const { withStoreComponent } = withStore(
      withHistory(
        <PromoFilmCard
          id={promoFilmCard.id}
          posterImage={promoFilmCard.posterImage}
          name={promoFilmCard.name}
          genre={promoFilmCard.genre}
          released={promoFilmCard.released}
          backgroundImage={promoFilmCard.backgroundImage}
        />
      ),
      makeFakeStore(),
    );
    
    render(withStoreComponent);

    expect(screen.getByText(promoFilmCard.name)).toBeInTheDocument();
    expect(screen.getByText(promoFilmCard.genre)).toBeInTheDocument();
    expect(screen.getByText(promoFilmCard.released)).toBeInTheDocument();
  });
});
