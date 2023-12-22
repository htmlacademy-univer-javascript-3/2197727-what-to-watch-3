import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import FilmReviews from '../tab-film-reviews';
import { ReviewData } from '../props';

describe('FilmReviews', () => {
  it('render correctly', () => {
    const reviews = [] as ReviewData[];
    const filmReviewsId = 'film-card__reviews-col';
    const preparedComponent = withHistory(<FilmReviews reviews={reviews} />);

    render(preparedComponent);

    expect(screen.getByTestId(filmReviewsId)).toBeInTheDocument();
  });
});
